import { useEffect } from 'react';

// Visor de fotos dentro de la misma pagina (reemplaza abrir la imagen en otra pestana).
export default function Lightbox({ images, index, onClose, onChange }) {
  const count = images.length;
  const go = (i) => onChange((i + count) % count);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(index + 1);
      if (e.key === 'ArrowLeft') go(index - 1);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  });

  return (
    <div className="mp-lightbox" role="dialog" aria-modal="true" aria-label="Galería de fotos" onClick={onClose}>
      <button className="mp-lightbox__close" onClick={onClose} aria-label="Cerrar">×</button>
      <button
        className="mp-lightbox__nav mp-lightbox__nav--prev"
        onClick={(e) => { e.stopPropagation(); go(index - 1); }}
        aria-label="Anterior"
      >
        ‹
      </button>
      <img src={images[index]} alt="" onClick={(e) => e.stopPropagation()} />
      <button
        className="mp-lightbox__nav mp-lightbox__nav--next"
        onClick={(e) => { e.stopPropagation(); go(index + 1); }}
        aria-label="Siguiente"
      >
        ›
      </button>
    </div>
  );
}
