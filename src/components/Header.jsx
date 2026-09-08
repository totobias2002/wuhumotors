import { useEffect, useState } from 'react';
import logo from '../assets/logo-cherywuhu.png';
import './Header.css';

const NAV_LINKS = [
  { label: 'Modelos', href: '#modelos', hasCaret: true },
  { label: 'Nosotros', href: '#nosotros', hasCaret: false },
  { label: 'Posventa', href: '#posventa', hasCaret: false },
  { label: 'Concesionarios', href: '#concesionarios', hasCaret: false },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#inicio" className="header__logo">
          <img src={logo} alt="Wuhu Motors - Chery" />
        </a>

        <nav className={`header__nav ${menuOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
              {link.hasCaret && <span className="header__caret" aria-hidden="true" />}
            </a>
          ))}
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
