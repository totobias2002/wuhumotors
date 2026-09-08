import './Concesionarios.css';

const SUCURSALES = [
  { name: 'Almagro', address: 'Castro Barros 188' },
  { name: 'Canning', address: 'Mariano Castex 1613' },
  { name: 'Cruce Varela', address: 'Av. Calchaquí 332' },
  { name: 'Villa Luro', address: 'Av. Rivadavia 10240' },
  { name: 'Puerto Madero', address: 'Julieta Lanteri 1735' },
];

export default function Concesionarios() {
  return (
    <section id="concesionarios" className="concesionarios">
      <div className="container">
        <p className="section-label reveal">Concesionarios oficiales</p>
        <h2 className="concesionarios__title reveal">
          5 sucursales en <span>Buenos Aires</span>
        </h2>
        <p className="concesionarios__subtitle reveal reveal-delay-1">
          Chery lleva 18 años en el país. Wuhu Motors lidera su expansión como
          concesionario oficial, cada vez más cerca tuyo.
        </p>

        <div className="concesionarios__grid">
          {SUCURSALES.map((s, i) => (
            <div
              key={s.name}
              className={`concesionarios__card reveal reveal-delay-${Math.min(i + 1, 3)}`}
            >
              <span className="concesionarios__pin" aria-hidden="true" />
              <div>
                <h3>{s.name}</h3>
                <p>{s.address}</p>
              </div>
            </div>
          ))}
          <a
            href="tel:+541160016793"
            className="concesionarios__card concesionarios__card--cta reveal reveal-delay-3"
          >
            <span className="concesionarios__pin concesionarios__pin--accent" aria-hidden="true" />
            <div>
              <h3>Contactanos</h3>
              <p>11 6001-6793</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
