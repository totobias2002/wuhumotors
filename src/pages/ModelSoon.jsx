import { useEffect } from 'react';
import Contacto from '../components/Contacto';
import '../components/model/ModelPage.css';

// Pagina de un modelo que todavia no tiene su ficha completa: se queda dentro del sitio.
export default function ModelSoon({ model }) {
  useEffect(() => {
    document.title = `Chery ${model.name} | Wuhu Motors`;
    return () => {
      document.title = 'Wuhu Motors | Concesionario Oficial Chery';
    };
  }, [model]);

  return (
    <main className="mp">
      <section className="mp-soon">
        <h1 className="mp-h2 mp-h2--center">{model.name}</h1>
        <img className="mp-soon__car" src={model.image} alt={model.name} />
        <p className="mp-soon__text">
          Estamos preparando la ficha completa de este modelo. Mientras tanto, consultanos y te asesoramos personalmente.
        </p>
        <a className="mp-btn" href="#contacto">Cotizá tu Chery</a>
      </section>
      <Contacto modelName={model.name} />
    </main>
  );
}
