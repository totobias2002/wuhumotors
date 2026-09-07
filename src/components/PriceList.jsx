import { models } from '../data/models';
import './PriceList.css';

export default function PriceList() {
  return (
    <section id="precios" className="pricelist">
      <div className="container">
        <p className="section-label">Lista de precios</p>
        <h2 className="section-title">Precios de la gama Chery</h2>
        <p className="section-subtitle">
          Los valores pueden variar según configuración y disponibilidad. Consultá el
          precio actualizado de cada modelo con nuestros asesores.
        </p>

        <div className="pricelist__table">
          <div className="pricelist__row pricelist__row--head">
            <span>Modelo</span>
            <span>Motor</span>
            <span>Precio</span>
          </div>
          {models.map((m) => (
            <div key={m.id} className="pricelist__row">
              <span className="pricelist__model">{m.name}</span>
              <span>{m.engine}</span>
              <a href="#contacto" className="pricelist__price">
                Consultar precio
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
