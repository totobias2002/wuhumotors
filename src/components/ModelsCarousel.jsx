import { useMemo, useState, useRef, useLayoutEffect, useCallback } from 'react';
import { models, modelLines } from '../data/models';
import './ModelsCarousel.css';

export default function ModelsCarousel() {
  const [activeLine, setActiveLine] = useState(modelLines[0].id);
  const [activeId, setActiveId] = useState(
    models.find((m) => m.line === modelLines[0].id).id
  );

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const [imgMaxHeight, setImgMaxHeight] = useState(null);

  const lineModels = useMemo(
    () => models.filter((m) => m.line === activeLine),
    [activeLine]
  );

  const active = lineModels.find((m) => m.id === activeId) || lineModels[0];
  const activeLineLabel = modelLines.find((l) => l.id === activeLine)?.label;

  const selectLine = (lineId) => {
    setActiveLine(lineId);
    const first = models.find((m) => m.line === lineId);
    if (first) setActiveId(first.id);
  };

  // Measures the real, currently-available space for the car photo so the
  // whole section (title + tabs + photo + specs + button) always fits
  // within one viewport, no matter the browser chrome height, zoom level,
  // or screen size. "otherHeight" (everything except the photo) is the
  // same regardless of the photo's current size, so this converges in a
  // single pass instead of guessing with vh/clamp.
  const recalc = useCallback(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const stage = stageRef.current;
    if (!section || !container || !stage) return;

    const containerHeight = container.getBoundingClientRect().height;
    const stageHeight = stage.getBoundingClientRect().height;
    const otherHeight = containerHeight - stageHeight;

    const sectionStyle = getComputedStyle(section);
    const padTop = parseFloat(sectionStyle.paddingTop) || 0;
    const padBottom = parseFloat(sectionStyle.paddingBottom) || 0;

    const available = window.innerHeight - padTop - padBottom - otherHeight;
    const nextMax = Math.min(420, Math.max(150, available));
    setImgMaxHeight(Math.round(nextMax));
  }, []);

  useLayoutEffect(() => {
    recalc();
  }, [recalc, active.id, activeLine]);

  useLayoutEffect(() => {
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, [recalc]);

  return (
    <section id="modelos" className="models" ref={sectionRef}>
      <div className="container" ref={containerRef}>
        <h3 className="models__line-title reveal">{activeLineLabel}</h3>

        <div className="models__line-tabs" role="tablist" aria-label="Línea de modelos">
          {modelLines.map((line) => (
            <button
              key={line.id}
              role="tab"
              aria-selected={line.id === activeLine}
              className={`models__line-tab ${line.id === activeLine ? 'is-active' : ''}`}
              onClick={() => selectLine(line.id)}
            >
              {line.label}
            </button>
          ))}
        </div>

        <div className="models__name-tabs" role="tablist" aria-label="Modelo">
          {lineModels.map((m) => (
            <button
              key={m.id}
              role="tab"
              aria-selected={m.id === active.id}
              className={`models__name-tab ${m.id === active.id ? 'is-active' : ''}`}
              onClick={() => setActiveId(m.id)}
            >
              {m.name.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="models__stage" ref={stageRef}>
          <img
            key={active.id}
            src={active.image}
            alt={active.name}
            className="models__car-image"
            style={imgMaxHeight ? { maxHeight: `${imgMaxHeight}px` } : undefined}
          />
        </div>

        <div className="models__meta" key={active.id + "-meta"}>
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
        </div>

        <a href="mailto:contacto@wuhumotors.com.ar" className="models__explore">
          Explorar
        </a>
      </div>
    </section>
  );
}
