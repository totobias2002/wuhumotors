import './HybridFeature.css';

export default function HybridFeature() {
  return (
    <section className="hybrid">
      <div className="container hybrid__inner">
        <div>
          <p className="section-label">Tecnología Chery</p>
          <h2 className="section-title">
            Primer híbrido enchufable de la gama, ahora en Wuhu Motors
          </h2>
          <p className="section-subtitle">
            Menor consumo, mayor autonomía y una respuesta inmediata: la tecnología
            híbrida enchufable de Chery combina motor a combustión y eléctrico para
            que cada trayecto sea más eficiente.
          </p>
          <a href="#modelos" className="btn btn-outline">
            Ver modelos híbridos
          </a>
        </div>
        <div className="hybrid__stats">
          <div>
            <strong>+1000 km</strong>
            <span>de autonomía combinada</span>
          </div>
          <div>
            <strong>-40%</strong>
            <span>de consumo estimado</span>
          </div>
          <div>
            <strong>3</strong>
            <span>modos de conducción</span>
          </div>
        </div>
      </div>
    </section>
  );
}
