import { useEffect, useRef, useState } from 'react';

function perView() {
  if (typeof window === 'undefined') return 3;
  if (window.matchMedia('(max-width: 767px)').matches) return 1;
  if (window.matchMedia('(max-width: 1024px)').matches) return 2;
  return 3;
}

// Carrusel de videos de asistencias a la conduccion (3 por vista en escritorio).
export default function AdasCarousel({ items, bare }) {
  const [pv, setPv] = useState(perView);
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const max = Math.max(0, items.length - pv);

  useEffect(() => {
    const onResize = () => setPv(perView());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const go = (i) => setIndex(Math.min(max, Math.max(0, i)));
  const cur = Math.min(index, max);

  return (
    <section className={`mp-adas ${bare ? 'mp-adas--images' : ''}`} aria-label="Asistencias a la conducción">
      <div className="mp-adas__viewport">
        <div
          className="mp-adas__track"
          ref={trackRef}
          style={{ '--pv': pv, transform: `translateX(calc(${cur} * -1 * (100% / var(--pv))))` }}
        >
          {items.map((it) => (
            <figure className="mp-adas__slide" key={it.caption + (it.image || it.video)}>
              {it.image ? <img src={it.image} alt={it.caption} loading="lazy" /> : <video src={it.video} controls muted playsInline preload="metadata" />}
              <figcaption>{it.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      {cur > 0 && (
        <button className="mp-adas__arrow mp-adas__arrow--prev" onClick={() => go(cur - 1)} aria-label="Anterior">‹</button>
      )}
      {cur < max && (
        <button className="mp-adas__arrow mp-adas__arrow--next" onClick={() => go(cur + 1)} aria-label="Siguiente">›</button>
      )}
      <div className="mp-adas__dots">
        {Array.from({ length: max + 1 }, (_, i) => (
          <button key={i} className={i === cur ? 'is-active' : ''} onClick={() => go(i)} aria-label={`Ir a la página ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
