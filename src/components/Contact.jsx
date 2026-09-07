import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="contact">
      <div className="container contact__inner">
        <div>
          <p className="section-label">Contacto</p>
          <h2 className="section-title">Hablemos de tu próximo Chery</h2>
          <p className="section-subtitle">
            Dejanos tus datos y un asesor de Wuhu Motors se va a comunicar con vos.
          </p>

          <div className="contact__info">
            <div>
              <span>Email</span>
              <strong>contacto@wuhumotors.com.ar</strong>
            </div>
            <div>
              <span>Teléfono</span>
              <strong>A confirmar</strong>
            </div>
            <div>
              <span>Dirección</span>
              <strong>A confirmar</strong>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label>
            Nombre y apellido
            <input type="text" name="name" required placeholder="Tu nombre" />
          </label>
          <label>
            Email
            <input type="email" name="email" required placeholder="tu@email.com" />
          </label>
          <label>
            Modelo de interés
            <input type="text" name="model" placeholder="Ej: Tiggo 7 Pro Hybrid" />
          </label>
          <label>
            Mensaje
            <textarea name="message" rows="4" placeholder="Contanos qué estás buscando" />
          </label>
          <button type="submit" className="btn btn-primary">
            {sent ? 'Consulta enviada ✓' : 'Enviar consulta'}
          </button>
        </form>
      </div>
    </section>
  );
}
