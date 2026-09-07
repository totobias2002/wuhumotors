import './Nosotros.css';

export default function Nosotros() {
  return (
    <section id="nosotros" className="nosotros">
      <div className="container nosotros__inner">
        <div>
          <p className="section-label">Nosotros</p>
          <h2 className="section-title">Wuhu Motors, concesionario oficial Chery</h2>
          <p className="section-subtitle">
            Somos el punto de contacto directo con la marca en Argentina: asesoramiento
            personalizado, financiación y una postventa pensada para acompañarte en
            todo el ciclo de vida de tu vehículo.
          </p>
          <ul className="nosotros__list">
            <li>Showroom con toda la gama Chery disponible para probar</li>
            <li>Asesores especializados en cada modelo</li>
            <li>Planes de financiación y toma de usados</li>
          </ul>
        </div>

        <div className="nosotros__card">
          <h3>Visitanos</h3>
          <p className="nosotros__placeholder">Dirección a confirmar</p>
          <p className="nosotros__placeholder">Lun a Sáb — horario a confirmar</p>
          <a href="#contacto" className="btn btn-outline">
            Cómo llegar
          </a>
        </div>
      </div>
    </section>
  );
}
