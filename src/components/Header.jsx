import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-cherywuhu.png';
import { models, modelLines, PRICE_LIST_URL } from '../data/models';
import { modelHref } from '../data/modelPages';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [megaLine, setMegaLine] = useState(modelLines[0].id);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => {
    setMenuOpen(false);
    setOpenMenu(null);
  };

  // Menu movil (mismo criterio que el de BAIC): con el panel abierto se congela el fondo.
  // En iOS Safari overflow:hidden en el body no alcanza para frenar el scroll tactil de atras;
  // lo que si funciona es fijar el body en su posicion actual y restaurarla al cerrar.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const { body } = document;
    const scrollY = window.scrollY;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    body.style.overflow = 'hidden';

    const shut = () => {
      setMenuOpen(false);
      setOpenMenu(null);
    };
    const onKey = (e) => e.key === 'Escape' && shut();
    // Si se agranda la ventana a desktop con el panel abierto, se cierra solo.
    const mq = window.matchMedia('(min-width: 1101px)');
    const onMq = (e) => e.matches && shut();
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);

    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
      Object.assign(body.style, prev);
      window.scrollTo(0, scrollY);
    };
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <Link to="/" className="header__logo" onClick={close}>
          <img src={logo} alt="Wuhu Motors - Chery" />
        </Link>

        <nav className={`header__nav ${menuOpen ? 'is-open' : ''}`}>
          {/* El slide-in vive en <nav> y el scroll tactil en este wrapper (evita un bug de iOS con transform + overflow). */}
          <div className="header__scroll">
            {/* Con el panel movil abierto no hay hover: el toque dispara mouseenter y despues click, y se anulaban entre si. */}
            <div
              className={`header__dropdown header__dropdown--mega ${openMenu === 'modelos' ? 'is-open' : ''}`}
              onMouseEnter={menuOpen ? undefined : () => setOpenMenu('modelos')}
              onMouseLeave={menuOpen ? undefined : () => setOpenMenu(null)}
            >
              <button
                type="button"
                className="header__dropdown-toggle"
                aria-expanded={openMenu === 'modelos'}
                onClick={() => setOpenMenu((o) => (o === 'modelos' ? null : 'modelos'))}
              >
                Modelos
                <span className="header__caret" aria-hidden="true" />
              </button>
              <div className="header__mega">
                <div className="header__mega-inner">
                  {/* Solo escritorio: pestañas por linea con el logotipo, igual que en la seccion Modelos */}
                  <div className="header__mega-lines" role="tablist" aria-label="Línea de modelos">
                    {modelLines.map((l) => (
                      <button
                        key={l.id}
                        type="button"
                        role="tab"
                        aria-selected={l.id === megaLine}
                        aria-label={l.label}
                        className={`header__mega-line ${l.id === megaLine ? 'is-active' : ''}`}
                        onMouseEnter={() => setMegaLine(l.id)}
                        onFocus={() => setMegaLine(l.id)}
                        onClick={() => setMegaLine(l.id)}
                      >
                        <img src={l.logo} alt="" />
                      </button>
                    ))}
                  </div>
                  {modelLines.map((l) => (
                    <div key={l.id} className={`header__mega-group ${l.id === megaLine ? 'is-active' : ''}`}>
                      {/* Solo celular: la linea funciona como subtitulo y se ven todas juntas */}
                      <img className="header__mega-grouptitle" src={l.logo} alt={l.label} />
                      <div className="header__mega-models">
                        {models
                          .filter((m) => m.line === l.id)
                          .map((m) => {
                            const target = modelHref(m);
                            const card = (
                              <>
                                <img src={m.image} alt="" loading="lazy" />
                                <span>{m.name}</span>
                              </>
                            );
                            return target.to ? (
                              <Link key={m.id} to={target.to} className="header__mega-model" onClick={close}>
                                {card}
                              </Link>
                            ) : (
                              <a key={m.id} href={target.href} target="_blank" rel="noopener noreferrer" className="header__mega-model" onClick={close}>
                                {card}
                              </a>
                            );
                          })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`header__dropdown ${openMenu === 'sobre' ? 'is-open' : ''}`}
              onMouseEnter={menuOpen ? undefined : () => setOpenMenu('sobre')}
              onMouseLeave={menuOpen ? undefined : () => setOpenMenu(null)}
            >
              <button
                type="button"
                className="header__dropdown-toggle"
                aria-expanded={openMenu === 'sobre'}
                onClick={() => setOpenMenu((o) => (o === 'sobre' ? null : 'sobre'))}
              >
                Sobre Chery
                <span className="header__caret" aria-hidden="true" />
              </button>
              <div className="header__dropdown-menu">
                <a href="https://chery.com.ar/introduccion/" target="_blank" rel="noopener noreferrer" onClick={close}>
                  Introducción
                </a>
                <a href="#contacto" onClick={close}>Sin dudas</a>
              </div>
            </div>
            <Link to={{ pathname: '/', hash: '#concesionarios' }} onClick={close}>Concesionarios</Link>
            <Link to={{ pathname: '/', hash: '#posventa' }} onClick={close}>Posventa</Link>
            <a href={PRICE_LIST_URL} target="_blank" rel="noopener noreferrer" onClick={close}>
              Lista de precios
            </a>
          </div>
        </nav>

        <button
          className={`header__toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
