import { useState } from 'react';
import { Link } from 'react-router-dom';
import { models, modelLines } from '../data/models';
import { modelHref } from '../data/modelPages';
import './ModelsCarousel.css';

export default function ModelsCarousel() {
  const [lineId, setLineId] = useState(modelLines[0].id);
  const [modelId, setModelId] = useState(models.find((m) => m.line === modelLines[0].id).id);

  const lineModels = models.filter((m) => m.line === lineId);
  const active = lineModels.find((m) => m.id === modelId) || lineModels[0];

  const explore = modelHref(active);

  const selectLine = (id) => {
    setLineId(id);
    setModelId(models.find((m) => m.line === id).id);
  };

  // Titulos, pestanas y fotos de todas las lineas quedan montados y apilados en la misma celda
  // (grid); solo se muestra la activa. Asi el alto de la seccion nunca cambia al cambiar de linea
  // o de modelo, sin importar cuantas filas ocupen las pestanas.
  return (
    <section id="modelos" className="models">
      <div className="container models__inner">
        <div className="models__stack models__titles">
          {modelLines.map((l) => (
            <img
              key={l.id}
              src={l.logo}
              alt={l.label}
              className={`models__title ${l.id === lineId ? 'is-active' : ''}`}
              style={{ width: l.titleWidth }}
              aria-hidden={l.id !== lineId}
            />
          ))}
        </div>

        <div className="models__lines" role="tablist" aria-label="Línea de modelos">
          {modelLines.map((l) => (
            <button
              key={l.id}
              role="tab"
              aria-selected={l.id === lineId}
              aria-label={l.label}
              className={`models__line ${l.id === lineId ? 'is-active' : ''}`}
              onClick={() => selectLine(l.id)}
            >
              <img src={l.logo} alt="" style={{ width: l.tabWidth }} />
            </button>
          ))}
        </div>

        <div className="models__stack models__tabs-wrap">
          {modelLines.map((l) => (
            <div
              key={l.id}
              className={`models__tabs ${l.id === lineId ? 'is-active' : ''}`}
              role="tablist"
              aria-label={`Modelos ${l.label}`}
              aria-hidden={l.id !== lineId}
            >
              {models
                .filter((m) => m.line === l.id)
                .map((m) => (
                  <button
                    key={m.id}
                    role="tab"
                    aria-selected={m.id === active.id}
                    tabIndex={l.id === lineId ? 0 : -1}
                    className={`models__tab ${m.id === active.id ? 'is-active' : ''}`}
                    onClick={() => setModelId(m.id)}
                  >
                    {m.name}
                  </button>
                ))}
            </div>
          ))}
        </div>

        <div className="models__stage">
          {models.map((m) => (
            <img
              key={m.id}
              src={m.image}
              alt={m.name}
              className={`models__car-image ${m.id === active.id ? 'is-active' : ''}`}
              aria-hidden={m.id !== active.id}
            />
          ))}
        </div>

        {explore.to ? (
          <Link to={explore.to} className="models__explore">Explorar</Link>
        ) : (
          <a href={explore.href} target="_blank" rel="noopener noreferrer" className="models__explore">Explorar</a>
        )}
      </div>
    </section>
  );
}
