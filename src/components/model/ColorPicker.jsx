import { useState } from 'react';

export default function ColorPicker({ colors, brochure, layout = {} }) {
  const { stage = [960, 488], top = 0, bottom = 60, slim, mt = 90, mb = 90, mobile = {} } = layout;
  const mo = { top: 60, dot: 20, gap: -6, w: 373, side: 10, bottom: 0, ...mobile };
  const [i, setI] = useState(0);
  const c = colors[i];
  return (
    <section className={`mp-colors ${slim ? 'mp-colors--slim' : ''}`} style={{
        '--c-top': `${top}px`, '--c-bottom': `${bottom - 60}px`, '--c-mt': `${mt}px`, '--c-mb': `${mb}px`,
        '--cm-top': `${mo.top}px`, '--cm-dot': `${mo.dot}px`, '--cm-gap': `${mo.gap}px`, '--cm-w': `${mo.w}px`, '--cm-side': `${mo.side}px`, '--cm-bottom': `${mo.bottom}px`,
      }}>
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
      <div className="mp-colors__stage" style={{ '--stage-w': `${stage[0]}px`, aspectRatio: `${stage[0]} / ${stage[1]}` }}>
        {colors.map((col, k) => (
          <img key={col.name} src={col.image} alt={col.name} className={k === i ? 'is-active' : ''} aria-hidden={k !== i} loading="lazy" />
        ))}
      </div>
      <p className="mp-colors__name">{c.name}</p>
      <a className="mp-btn mp-colors__sheet" href={brochure} target="_blank" rel="noopener noreferrer">Ficha técnica</a>
    </section>
  );
}
