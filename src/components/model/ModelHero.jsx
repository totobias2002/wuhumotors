import { HERO_ICONS, STROKE_ICONS } from './heroIcons';

// Hero de pagina de modelo: video de fondo o banner (foto distinta en celular/tablet), logo opcional y barra de datos.
export default function ModelHero({ block, name }) {
  const { video, bg, logo, logoSize, logoTop, highlights = [], brochure, noBar, pos, bgWidthM, noBtnM, btnBottomM, overlays = [] } = block;
  return (
    <>
      <section className={`mp-hero ${bgWidthM ? 'mp-hero--bgfixedw' : ''}`} style={{ '--bg-w-m': bgWidthM ? `${bgWidthM}px` : undefined, '--m-btn-bottom': btnBottomM ? `${btnBottomM}px` : undefined }}>
        {video && <video className="mp-hero__video" src={video} autoPlay muted loop playsInline preload="auto" aria-hidden="true" />}
        {bg && (
          <picture className="mp-hero__bg">
            {bg.m && <source media="(max-width: 1024px)" srcSet={bg.m} />}
            <img src={bg.d} alt={name} style={pos ? { '--bg-pos': pos } : undefined} />
          </picture>
        )}
        {overlays.map((o) => (
          <img
            key={o.src}
            className="mp-hero__ov"
            src={o.src}
            alt=""
            style={{ '--ov-top': `${o.d.top}px`, '--ov-l': o.d.left !== undefined ? `${o.d.left}px` : 'auto', '--ov-r': o.d.right !== undefined ? `${o.d.right}px` : 'auto', '--ov-w': `${o.d.w}px`, '--ovm-top': `${o.m.top}px`, '--ovm-l': `${o.m.left}px`, '--ovm-w': `${o.m.w}px` }}
          />
        ))}
        {logo && (
          <div className="mp-hero__inner" style={logoTop ? { '--hero-pt': `${logoTop}px` } : undefined}>
            <img className="mp-hero__logo" src={logo} alt={name} width={logoSize[0]} height={logoSize[1]} style={{ '--logo-w': `${logoSize[0]}px` }} />
          </div>
        )}
        {/* Celular/tablet: solo este boton (la barra de datos queda oculta) */}
        {!noBtnM && <a className="mp-btn mp-btn--sm mp-hero__features" href="#caracteristicas">Características</a>}
        {!noBar && (
          <div className="mp-hero__bar">
            {highlights.map((h) => (
              <div className="mp-hero__item" key={h.text}>
                <span className={`mp-icon ${STROKE_ICONS.includes(h.icon) ? 'mp-icon--stroke' : ''}`} dangerouslySetInnerHTML={{ __html: HERO_ICONS[h.icon] }} />
                <span className="mp-hero__item-text">{h.text}</span>
              </div>
            ))}
            <a className="mp-btn mp-btn--sm mp-hero__cta mp-hero__cta--features" href="#caracteristicas">Características</a>
            {brochure && (
              <a className="mp-btn mp-btn--sm mp-btn--ghost mp-hero__cta mp-hero__cta--sheet" href={brochure} target="_blank" rel="noopener noreferrer">
                Ficha Técnica
              </a>
            )}
          </div>
        )}
      </section>
      <span id="caracteristicas" className="mp-anchor" />
    </>
  );
}
