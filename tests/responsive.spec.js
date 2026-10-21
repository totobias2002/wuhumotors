import { test, expect } from '@playwright/test';

// Anchos (y alto) representativos: celulares chicos y grandes, tablets, notebooks y monitores.
const VIEWPORTS = [
  { w: 320, h: 640 },
  { w: 360, h: 740 },
  { w: 393, h: 852 },
  { w: 430, h: 932 },
  { w: 600, h: 900 },
  { w: 768, h: 1024 },
  { w: 820, h: 1180 },
  { w: 1024, h: 768 },
  { w: 1099, h: 800 },
  { w: 1101, h: 800 },
  { w: 1280, h: 800 },
  { w: 1440, h: 900 },
  { w: 1920, h: 1080 },
  { w: 740, h: 360 }, // celular horizontal
];

const HEADER_H = 59; // debe coincidir con --header-h (index.css)

// Elementos que adrede quedan fuera del flujo o del borde (panel movil cerrado, aro del boton de WhatsApp).
const IGNORE = '.header__nav, .wpp-btn';

for (const { w, h } of VIEWPORTS) {
  test.describe(`${w}x${h}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: w, height: h });
      await page.goto('/');
      await page.waitForSelector('.models__tabs.is-active');
      // Las fuentes web cambian el alto de los textos al cargar: se mide recien cuando terminaron.
      await page.evaluate(() => document.fonts.ready);
      // Las animaciones de entrada dejan secciones en opacity:0; para medir layout no importan.
      await page.addStyleTag({ content: '.reveal{opacity:1!important;transform:none!important}' });
    });

    test('no hay scroll horizontal ni elementos fuera de pantalla', async ({ page }) => {
      const res = await page.evaluate((ignore) => {
        const de = document.documentElement;
        const bad = [];
        document.querySelectorAll('body *').forEach((el) => {
          if (el.closest(ignore)) return;
          const b = el.getBoundingClientRect();
          if (b.width > 0 && getComputedStyle(el).position !== 'fixed' && b.right > de.clientWidth + 1) {
            bad.push(`${el.className || el.tagName} (+${Math.round(b.right - de.clientWidth)}px)`);
          }
        });
        return { overflow: de.scrollWidth - de.clientWidth, bad: [...new Set(bad)].slice(0, 5) };
      }, IGNORE);
      expect(res.bad, 'elementos que se salen por la derecha').toEqual([]);
      expect(res.overflow, 'scroll horizontal (px)').toBe(0);
    });

    test('el header no pisa al logo y no tapa el banner', async ({ page }) => {
      const res = await page.evaluate(() => {
        const rect = (s) => document.querySelector(s).getBoundingClientRect();
        const burger = getComputedStyle(document.querySelector('.header__toggle')).display !== 'none';
        const logo = rect('.header__logo img');
        const header = rect('.header');
        const hero = rect('.hero-carousel');
        const out = { burger, headerH: Math.round(header.height), heroTop: Math.round(hero.top) };
        if (burger) {
          out.gap = Math.round(rect('.header__toggle').left - logo.right);
        } else {
          const links = [...document.querySelectorAll('.header__scroll > *')].map((e) => e.getBoundingClientRect());
          out.gap = Math.round(Math.min(...links.map((l) => l.left)) - logo.right);
          out.rows = new Set(links.map((l) => Math.round(l.top))).size;
          const left = Math.min(...links.map((l) => l.left));
          const right = Math.max(...links.map((l) => l.right));
          out.navOffCenter = Math.round((left + right) / 2 - document.documentElement.clientWidth / 2);
        }
        return out;
      });
      // Con lugar de sobra (>= 1440px) el menu tiene que estar centrado en la pantalla.
      if (!res.burger && w >= 1440) expect(Math.abs(res.navOffCenter), 'desvio del menu respecto del centro (px)').toBeLessThanOrEqual(2);
      expect(res.headerH).toBe(HEADER_H);
      expect(res.heroTop, 'el banner arranca justo debajo del header').toBe(HEADER_H);
      expect(res.gap, 'espacio entre logo y menu/boton').toBeGreaterThanOrEqual(0);
      if (!res.burger) expect(res.rows, 'menu en una sola fila').toBe(1);
    });

    test('la seccion de modelos ocupa la pantalla y no cambia de alto al cambiar de linea', async ({ page }) => {
      const heights = [];
      for (const line of ['Tiggo', 'Arrizo', 'Himla']) {
        await page.getByRole('tab', { name: line, exact: true }).click();
        heights.push(await page.evaluate(() => Math.round(document.querySelector('.models').getBoundingClientRect().height)));
      }
      expect(new Set(heights).size, `alto por linea: ${heights}`).toBe(1);
      expect(heights[0]).toBeGreaterThanOrEqual(h - HEADER_H - 1);
    });

    test('el boton flotante de WhatsApp no tapa el logo de Corven', async ({ page }) => {
      const res = await page.evaluate(() => {
        const img = document.querySelector('.footer__corven img').getBoundingClientRect();
        const wpp = document.querySelector('.wpp-btn');
        const w = wpp.getBoundingClientRect();
        // El aro pulsante crece fuera del boton; se compara contra el boton en reposo.
        return { corvenRight: img.right, corvenLeft: img.left, wppLeft: w.left };
      });
      expect(res.corvenRight, 'borde derecho del logo vs borde izquierdo del boton').toBeLessThanOrEqual(res.wppLeft + 1);
    });
  });
}

test('el menu movil abre y cierra con la hamburguesa y deja el logo visible', async ({ page }) => {
  await page.setViewportSize({ width: 393, height: 852 });
  await page.goto('/');
  const toggle = page.locator('.header__toggle');
  const nav = page.locator('.header__nav');
  const logo = page.locator('.header__logo');

  await toggle.click();
  await expect(nav).toHaveClass(/is-open/);
  await expect(logo).toBeInViewport();
  await expect(toggle).toBeInViewport();

  await toggle.click();
  await expect(nav).not.toHaveClass(/is-open/);
});

test('menu Modelos (escritorio): panel con lineas y, al elegir un modelo, baja a la seccion con ese modelo', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await page.locator('.header__dropdown--mega > .header__dropdown-toggle').hover();
  await expect(page.locator('.header__mega')).toBeVisible();

  await page.getByRole('tab', { name: 'Arrizo', exact: true }).first().hover();
  await page.locator('.header__mega-group.is-active .header__mega-model', { hasText: 'Arrizo 8 CSH' }).click();

  await expect(page.locator('.models__tab.is-active').filter({ hasText: 'Arrizo 8 CSH' })).toBeVisible();
  await expect(page.locator('.header__mega')).toBeHidden();
  await expect.poll(async () => Math.round(await page.locator('#modelos').evaluate((e) => e.getBoundingClientRect().top))).toBeLessThan(HEADER_H + 4);
});

test('menu Modelos (celular): lineas agrupadas con subtitulo y al elegir un modelo baja a la seccion', async ({ page }) => {
  await page.setViewportSize({ width: 393, height: 852 });
  await page.goto('/');
  await page.locator('.header__toggle').click();
  await page.locator('.header__dropdown--mega > .header__dropdown-toggle').click();

  await expect(page.locator('.header__mega-grouptitle')).toHaveCount(3);
  for (const t of await page.locator('.header__mega-grouptitle').all()) await expect(t).toBeVisible();

  await page.locator('.header__mega-model', { hasText: 'Tiggo 8 Pro' }).click();
  await expect(page.locator('.header__nav')).not.toHaveClass(/is-open/);
  await expect(page.locator('.models__tab.is-active').filter({ hasText: 'Tiggo 8 Pro' })).toBeVisible();
  await expect.poll(async () => Math.round(await page.locator('#modelos').evaluate((e) => e.getBoundingClientRect().top))).toBeLessThan(HEADER_H + 4);
});
