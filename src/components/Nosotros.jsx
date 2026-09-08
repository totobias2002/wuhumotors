import './SplitPanel.css';

export default function Nosotros() {
  return (
    <section id="nosotros" className="split-panel split-panel--reverse">
      <div
        className="split-panel__media reveal"
        style={{ backgroundImage: 'url(/sections/nosotros.png)' }}
      />
      <div className="split-panel__copy">
        <h2 className="reveal">
          Conocé
          <br />
          <span>Wuhu Motors</span>
        </h2>
        <p className="reveal reveal-delay-1">
          Acercate a la <strong>calidad y el respaldo</strong> que solo te brinda nuestro{' '}
          <strong>concesionario oficial Chery</strong>. Te esperamos para asesorarte
          personalmente.
        </p>
        <a href="mailto:contacto@wuhumotors.com.ar" className="split-panel__btn reveal reveal-delay-2">
          Ver más
        </a>
      </div>
    </section>
  );
}
