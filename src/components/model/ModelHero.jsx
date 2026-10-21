import { HERO_ICONS } from './heroIcons';

export default function ModelHero({ data }) {
  return (
    <>
      <section className="mp-hero">
        <video className="mp-hero__video" src={data.hero.video} autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
        <div className="mp-hero__inner">
          <img
            className="mp-hero__logo"
            src={data.hero.logo}
            alt={data.name}
            width={data.hero.logoSize[0]}
            height={data.hero.logoSize[1]}
          />
          {/* Celular/tablet: solo este boton (la barra de datos queda oculta) */}
          <a className="mp-btn mp-btn--sm mp-hero__features" href="#caracteristicas">Características</a>
        </div>

        <div className="mp-hero__bar">
          {data.highlights.map((h) => (
            <div className="mp-hero__item" key={h.text}>
              <span className={`mp-icon ${h.icon === 0 ? 'mp-icon--stroke' : ''}`} dangerouslySetInnerHTML={{ __html: HERO_ICONS[h.icon] }} />
              <span className="mp-hero__item-text">{h.text}</span>
            </div>
          ))}
          <a className="mp-btn mp-btn--sm mp-hero__cta mp-hero__cta--features" href="#caracteristicas">Características</a>
          <a className="mp-btn mp-btn--sm mp-btn--ghost mp-hero__cta mp-hero__cta--sheet" href={data.brochure} target="_blank" rel="noopener noreferrer">
            Ficha Técnica
          </a>
        </div>
      </section>
      <span id="caracteristicas" className="mp-anchor" />
    </>
  );
}
