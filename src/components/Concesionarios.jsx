import './SplitPanel.css';

export default function Concesionarios() {
  return (
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
      </div>
    </section>
  );
}
