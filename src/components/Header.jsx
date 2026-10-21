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

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#inicio" className="header__logo">
          <img src={logo} alt="Wuhu Motors - Chery" />
        </a>

        <nav className={`header__nav ${menuOpen ? 'is-open' : ''}`}>
          <div
            className={`header__dropdown ${openMenu === 'modelos' ? 'is-open' : ''}`}
            onMouseEnter={() => setOpenMenu('modelos')}
            onMouseLeave={() => setOpenMenu(null)}
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
            onMouseEnter={() => setOpenMenu('sobre')}
            onMouseLeave={() => setOpenMenu(null)}
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
        </nav>

        <button
          className={`header__toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label="Abrir menú"
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
