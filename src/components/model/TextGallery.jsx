import { useState } from 'react';
import rich from './rich';
import Lightbox from './Lightbox';
import { mVars } from './mobileVars';

// Bloque "texto + galeria 2x2" (Interior, Seguridad, Diseno...). La galeria puede ir a izquierda o derecha;
// en vez de fotos puede llevar un video con controles (Arrizo 8).
export default function TextGallery({ id, title, paragraphs, images, video, modelLogo, modelName, reverse, tone = 'white', ink = 'brown', boxed, m, videoFirst }) {
  const [open, setOpen] = useState(null);
  return (
    <section id={id} style={mVars(m)} className={`mp-split mp-tone--${tone} mp-ink--${ink} ${reverse ? 'mp-split--reverse' : ''} ${boxed ? 'mp-split--boxed' : ''} ${videoFirst ? 'mp-split--vfirst' : ''}`}>
      <div className="mp-split__copy">
        <h2 className="mp-h2">{title}</h2>
        <span className="mp-divider" />
        <div className="mp-text">
          {paragraphs.map((p, i) => (
            <p className="mp-p" key={i}>{rich(p)}</p>
          ))}
        </div>
        <div className="mp-split__cta">
          <a className="mp-btn" href="#contacto">Cotizá tu Chery</a>
          <img className="mp-split__logo" src={modelLogo} alt={modelName} />
        </div>
      </div>
      {video ? (
        <div className="mp-split__video">
          <video src={video} controls playsInline preload="metadata" />
        </div>
      ) : (
        <div className="mp-gallery">
          {images.map((src, i) => (
            <button type="button" className="mp-gallery__item" key={src + i} onClick={() => setOpen(i)} aria-label={`Ver foto ${i + 1} de ${title}`}>
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
      {open !== null && <Lightbox images={images} index={open} onClose={() => setOpen(null)} onChange={setOpen} />}
    </section>
  );
}
