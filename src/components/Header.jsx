import { useEffect, useState } from 'react';
import logo from '../assets/logo-cherywuhu.png';
import { models, PRICE_LIST_URL } from '../data/models';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

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
        <a href="#inicio" className="header__logo" onClick={close}>
          <img src={logo} alt="Wuhu Motors - Chery" />
        </a>

        <nav className={`header__nav ${menuOpen ? 'is-open' : ''}`}>
          {/* El slide-in vive en <nav> y el scroll tactil en este wrapper (evita un bug de iOS con transform + overflow). */}
          <div className="header__scroll">
            {/* Con el panel movil abierto no hay hover: el toque dispara mouseenter y despues click, y se anulaban entre si. */}
            <div
              className={`header__dropdown ${openMenu === 'modelos' ? 'is-open' : ''}`}
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
              <div className="header__dropdown-menu">
                {models.map((m) => (
                  <a key={m.id} href="#modelos" onClick={close}>
                    {m.name}
                  </a>
                ))}
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
            <a href="#concesionarios" onClick={close}>Concesionarios</a>
            <a href="#posventa" onClick={close}>Posventa</a>
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
