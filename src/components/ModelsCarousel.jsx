import { useState } from 'react';
import { models, modelLines } from '../data/models';
import './ModelsCarousel.css';

export default function ModelsCarousel() {
  const [lineId, setLineId] = useState(modelLines[0].id);
  const [modelId, setModelId] = useState(models.find((m) => m.line === modelLines[0].id).id);

  const line = modelLines.find((l) => l.id === lineId);
  const lineModels = models.filter((m) => m.line === lineId);
  const active = lineModels.find((m) => m.id === modelId) || lineModels[0];

  const selectLine = (id) => {
    setLineId(id);
    setModelId(models.find((m) => m.line === id).id);
  };

  return (
    <section id="modelos" className="models">
      <div className="container">
        <img
          key={line.id}
          src={line.logo}
          alt={line.label}
          className="models__title"
          style={{ width: line.titleWidth }}
        />

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

        <div className="models__tabs" role="tablist" aria-label="Modelo">
          {lineModels.map((m) => (
            <button
              key={m.id}
              role="tab"
              aria-selected={m.id === active.id}
              className={`models__tab ${m.id === active.id ? 'is-active' : ''}`}
              onClick={() => setModelId(m.id)}
            >
              {m.name}
            </button>
          ))}
        </div>

        {/* Todas las fotos quedan montadas (precargadas) y solo cambia la opacidad: sin parpadeo ni saltos de altura. */}
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

        <a href={active.officialUrl} target="_blank" rel="noopener noreferrer" className="models__explore">
          Explorar
        </a>
      </div>
    </section>
  );
}
