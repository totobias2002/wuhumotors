import './SplitPanel.css';

export default function Posventa() {
  return (
    <section id="posventa" className="split-panel">
      <div
        className="split-panel__media reveal"
        style={{ backgroundImage: 'url(/sections/posventa.png)' }}
      />
      <div className="split-panel__copy">
        <h2 className="reveal">
          Servicio
          <br />
          <span>Postventa</span>
        </h2>
        <p className="reveal reveal-delay-1">
          Nuestro servicio de postventa está <strong>diseñado para asegurar</strong> que tu
          experiencia sea siempre excepcional, brindándote la <strong>tranquilidad y el
          soporte</strong> que mereces.
        </p>
        <a href="#contacto" className="split-panel__btn reveal reveal-delay-2">
          Ver más
        </a>
      </div>
    </section>
  );
}
