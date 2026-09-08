import logo from '../assets/logo-cherywuhu.png';
import { models } from '../data/models';
import './Footer.css';

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col">
          <h4>Legal</h4>
          <a href="#">Políticas legales</a>
        </div>

        <div className="footer__col">
          <h4>Menu</h4>
          <a href="#inicio">Home</a>
          {models.map((m) => (
            <a key={m.id} href="#modelos">
              {m.name.toUpperCase()}
            </a>
          ))}
          <a href="#posventa">Posventa</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#concesionarios">Concesionarios</a>
        </div>

        <div className="footer__col">
          <h4>Contacto</h4>
          <a href="mailto:contacto@wuhumotors.com.ar">CONTACTO@WUHUMOTORS.COM.AR</a>
          <a href="tel:+541160016793">11 6001-6793</a>
          <span>Almagro · Canning · Cruce Varela · Villa Luro · Puerto Madero</span>
        </div>

        <div className="footer__brand">
          <img src={logo} alt="Wuhu Motors - Chery" />
          <div className="footer__social">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.25.07 1.63.07 4.81 0 3.19-.01 3.56-.07 4.81-.15 3.23-1.66 4.77-4.92 4.92-1.25.06-1.62.07-4.85.07-3.2 0-3.6 0-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.25-.07-1.62-.07-4.81 0-3.18.01-3.56.07-4.81.15-3.23 1.67-4.77 4.92-4.92C8.4 2.21 8.8 2.2 12 2.2zM12 0C8.74 0 8.33.01 7.05.07c-4.35.2-6.78 2.62-6.98 6.98C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.49 20.5 12 20.5 12 20.5s7.51 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.6 15.6V8.4L15.8 12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>Wuhu Motors S.A. Concesionario Oficial de ZTY Motors Red Chery · CUIT 30-71917302-7</span>
        <span>Copyright ©{YEAR} | Todos los derechos reservados</span>
      </div>
    </footer>
  );
}
