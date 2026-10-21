import { useState } from 'react';

export default function ColorPicker({ colors, brochure }) {
  const [i, setI] = useState(0);
  const c = colors[i];
  return (
    <section className="mp-colors">
      <h2 className="mp-h2 mp-h2--center">Elegí tu color</h2>
      <div className="mp-colors__dots" role="tablist" aria-label="Color">
        {colors.map((col, k) => (
          <button
            key={col.name}
            role="tab"
            aria-selected={k === i}
            aria-label={col.name}
            className={`mp-colors__dot ${k === i ? 'is-active' : ''}`}
            onClick={() => setI(k)}
          >
            <span style={{ background: col.hex, border: col.ring ? '1px solid #808080' : 'none' }} />
          </button>
        ))}
      </div>
      <div className="mp-colors__stage">
        {colors.map((col, k) => (
          <img key={col.name} src={col.image} alt={col.name} className={k === i ? 'is-active' : ''} aria-hidden={k !== i} loading="lazy" />
        ))}
      </div>
      <p className="mp-colors__name">{c.name}</p>
      <a className="mp-btn mp-colors__sheet" href={brochure} target="_blank" rel="noopener noreferrer">Ficha técnica</a>
    </section>
  );
}
