import { useState } from 'react';
import { models } from '../data/models';
import './ModelsCarousel.css';

export default function ModelsCarousel() {
  const [index, setIndex] = useState(0);
  const active = models[index];

  const prev = () => setIndex((i) => (i === 0 ? models.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === models.length - 1 ? 0 : i + 1));

  return (
    <section id="modelos" className="models">
      <div className="container">
        <p className="section-label">Gama Chery</p>
        <h2 className="section-title">Elegí tu próximo Chery</h2>
        <p className="section-subtitle">
          Conocé el detalle de cada modelo disponible en Wuhu Motors.
        </p>

        <div className="models__stage">
          <div
            className="models__visual"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${active.color}55, transparent 60%), linear-gradient(160deg, ${active.color}22, #101015)`,
            }}
          >
            <span className="models__visual-name">{active.name}</span>
          </div>

          <div className="models__info">
            <h3>{active.name}</h3>
            <p className="models__tagline">{active.tagline}</p>

            <dl className="models__specs">
              <div>
                <dt>Motor</dt>
                <dd>{active.engine}</dd>
              </div>
              <div>
                <dt>Largo</dt>
                <dd>{active.length}</dd>
              </div>
              <div>
                <dt>Distancia entre ejes</dt>
                <dd>{active.wheelbase}</dd>
              </div>
            </dl>

            <a href="#contacto" className="btn btn-primary">
              Explorar
            </a>
          </div>
        </div>

        <div className="models__controls">
          <button onClick={prev} aria-label="Modelo anterior">
            ◁ Anterior
          </button>
          <div className="models__dots">
            {models.map((m, i) => (
              <button
                key={m.id}
                className={i === index ? 'is-active' : ''}
                onClick={() => setIndex(i)}
                aria-label={`Ver ${m.name}`}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Siguiente modelo">
            Siguiente ▷
          </button>
        </div>
      </div>
    </section>
  );
}
