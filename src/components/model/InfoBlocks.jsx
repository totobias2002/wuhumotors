import { useEffect, useRef } from 'react';
import rich from './rich';

const lines = (t) => (Array.isArray(t) ? t.map((l, i) => (i ? [<br className="mp-br" key={i} />, l] : l)) : t);

// Texto centrado a ancho reducido (por ejemplo "Que es la tecnologia Mild Hybrid?").
export function InfoText({ block }) {
  return (
    <section className="mp-info">
      <h2 className="mp-h2 mp-h2--center mp-h2--soft">{lines(block.title)}</h2>
      <div className="mp-text">
        {block.paras.map((p, i) => (
          <p className="mp-p mp-p--center" key={i}>{rich(p)}</p>
        ))}
      </div>
    </section>
  );
}

// Foto a todo el ancho.
// Como en chery.com.ar: la foto va a tamano natural pegada abajo al centro y se va opacando al scrollear
// (efecto "transparencia": 1 al entrar por abajo, ~0.61 al salir por arriba).
export function Photo({ block }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let raf = 0;
    const update = () => {
      raf = 0;
      const { top, height } = el.getBoundingClientRect();
      const start = window.innerHeight * 0.871;
      const p = Math.min(1, Math.max(0, (start - top) / (start + height)));
      el.style.opacity = String(1 - 0.386 * p);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return <section ref={ref} className="mp-photo" style={{ backgroundImage: `url(${block.image})` }} aria-hidden="true" />;
}

// Tarjetas de beneficios sobre fondo arena.
export function Cards({ block }) {
  return (
    <section className="mp-cards" style={block.pad ? { '--cards-top': `${block.pad[0]}px`, '--cards-bottom': `${block.pad[1]}px` } : undefined}>
      <h2 className="mp-h2 mp-h2--center mp-h2--soft">{lines(block.title)}</h2>
      <div className="mp-cards__grid">
        {block.items.map((c) => (
          <article className="mp-card" key={c.title}>
            <h3>{c.title}</h3>
            {c.text && <p>{c.text}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

// "Servicios conectados": texto a la izquierda y video a la derecha.
export function Services({ block }) {
  return (
    <section className="mp-services">
      <div className="mp-services__copy">
        <h2 className="mp-h2">{block.title}</h2>
        <div className="mp-text">
          {block.paras.map((p, i) => (
            <p className="mp-p" key={i}>{rich(p)}</p>
          ))}
        </div>
      </div>
      <div className="mp-services__media">
        <video src={block.video} controls playsInline preload="metadata" />
        <p className="mp-services__note">{block.note}</p>
      </div>
    </section>
  );
}
