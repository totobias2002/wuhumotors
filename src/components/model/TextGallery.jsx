import { useState } from 'react';
import rich from './rich';
import Lightbox from './Lightbox';

// Bloque "texto + galeria 2x2" de Interior y Seguridad (Seguridad lleva la galeria a la izquierda).
export default function TextGallery({ id, title, paragraphs, images, modelLogo, modelName, reverse }) {
  const [open, setOpen] = useState(null);
  return (
    <section id={id} className={`mp-split ${reverse ? 'mp-split--reverse' : ''}`}>
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
      <div className="mp-gallery">
        {images.map((src, i) => (
          <button type="button" className="mp-gallery__item" key={src} onClick={() => setOpen(i)} aria-label={`Ver foto ${i + 1} de ${title}`}>
            <img src={src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
      {open !== null && <Lightbox images={images} index={open} onClose={() => setOpen(null)} onChange={setOpen} />}
    </section>
  );
}
