import logo from '../assets/logo-cherywuhu.png';
import './Footer.css';

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Wuhu Motors - Chery" />
          <p>Concesionario oficial Chery en Argentina.</p>
          <div className="footer__social">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="YouTube">YT</a>
            <a href="#" aria-label="LinkedIn">IN</a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Navegación</h4>
          <a href="#inicio">Inicio</a>
          <a href="#modelos">Modelos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#posventa">Posventa</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer__col">
          <h4>Contacto</h4>
          <a href="mailto:contacto@wuhumotors.com.ar">contacto@wuhumotors.com.ar</a>
          <span>Teléfono a confirmar</span>
          <span>Dirección a confirmar</span>
        </div>

        <div className="footer__col">
          <h4>Legales</h4>
          <a href="#">Términos y condiciones</a>
          <a href="#">Política de privacidad</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {YEAR} Wuhu Motors. Todos los derechos reservados.</span>
        <span>Concesionario oficial Chery</span>
      </div>
    </footer>
  );
}
