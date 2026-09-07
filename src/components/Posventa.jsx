import './Posventa.css';

const SERVICES = [
  {
    title: 'Service oficial',
    desc: 'Mantenimiento con técnicos capacitados y repuestos originales Chery.',
  },
  {
    title: 'Garantía y respaldo',
    desc: 'Cobertura de fábrica gestionada directamente desde el concesionario.',
  },
  {
    title: 'Turnos online',
    desc: 'Coordiná tu service o revisión cuando más te convenga.',
  },
];

export default function Posventa() {
  return (
    <section id="posventa" className="posventa">
      <div className="container">
        <p className="section-label">Posventa</p>
        <h2 className="section-title">
          Una experiencia diseñada para que siempre sea excepcional
        </h2>
        <p className="section-subtitle">
          En Wuhu Motors te acompañamos después de la compra, con un servicio de
          posventa pensado para cuidar tu Chery en cada etapa.
        </p>

        <div className="posventa__grid">
          {SERVICES.map((s) => (
            <div key={s.title} className="posventa__card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
