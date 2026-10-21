import rich from './rich';
import { mVars } from './mobileVars';

// Bloque de texto sobre foto de fondo (Tecnologia, Motorizacion, Seguridad...).
// align="right" lleva el texto a la derecha; ink: 'brown' | 'light' (blanco) | 'darkest'.
export default function TechSection({ block, modelLogo, modelName }) {
  const { id, title, paras, bg, align, ink = 'brown', bgColor, logoOverride, carouselBelow, pad, narrow, boxed, noLogo, textW, m, bgM } = block;
  return (
    <section
      id={id}
      className={`mp-tech mp-ink--${ink} ${align === 'right' ? 'mp-tech--right' : ''} ${carouselBelow ? 'mp-tech--over' : ''} ${boxed ? 'mp-tech--boxed' : ''}`}
      style={{ backgroundImage: `url(${bg})`, backgroundColor: bgColor, '--tech-pad': pad, '--bg-size-m': bgM?.size, '--bg-pos-m': bgM?.pos, ...mVars(m) }}
    >
      <div className={`mp-tech__copy ${narrow ? 'mp-tech__copy--narrow' : ''}`}>
        <h2 className="mp-h2">{title}</h2>
        <span className="mp-divider" />
        <div className="mp-text" style={textW ? { maxWidth: textW } : undefined}>
          {paras.map((p, i) => (
            <p className="mp-p" key={i}>{rich(p)}</p>
          ))}
        </div>
        <div className="mp-split__cta">
          <a className="mp-btn" href="#contacto">Cotizá tu Chery</a>
          {!noLogo && <img className="mp-split__logo" src={logoOverride || modelLogo} alt={modelName} />}
        </div>
      </div>
    </section>
  );
}
