import rich from './rich';

// Bloque "texto + galeria 2x2" de Interior y Seguridad (Seguridad lleva la galeria a la izquierda).
export default function TextGallery({ id, title, paragraphs, images, modelLogo, modelName, reverse }) {
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
        {images.map((src) => (
          <a className="mp-gallery__item" key={src} href={src} target="_blank" rel="noopener noreferrer">
            <img src={src} alt="" loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  );
}
