import { useState } from 'react';
import { SUCURSALES } from '../data/sucursales';
import './SplitPanel.css';
import './Concesionarios.css';

export default function Concesionarios() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="concesionarios" className="split-panel split-panel--reverse">
        <div className="split-panel__media reveal" style={{ backgroundImage: 'url(/sections/nosotros.png)' }} />
        <div className="split-panel__copy">
          <h2 className="reveal">
            Concesionarios
            <br />
            <span>Oficiales</span>
          </h2>
          <p className="reveal reveal-delay-1">
            Acércate a la <strong>calidad y el respaldo</strong> que solo te brindan nuestros{' '}
            <strong>Concesionarios Oficiales</strong>. Te esperamos para asesorarte{' '}
            <strong>personalmente.</strong>
          </p>
          <button
            type="button"
            className="split-panel__btn reveal reveal-delay-2"
            aria-expanded={open}
            aria-controls="sucursales"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Ver menos' : 'Ver más'}
          </button>
        </div>
      </section>

      {open && (
        <section id="sucursales" className="sucursales">
          <div className="container sucursales__grid">
            {SUCURSALES.map((s) => (
              <div key={s.name} className="sucursales__item">
                <h3>{s.name}</h3>
                <p>{s.address}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
