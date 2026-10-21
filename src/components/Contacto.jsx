import { useState } from 'react';
import { models } from '../data/models';
import './Contacto.css';

const CONTACT_EMAIL = 'contacto@wuhumotors.com.ar';
// Si se define VITE_CONTACT_ENDPOINT el formulario hace POST (JSON) ahi;
// si no, abre el cliente de mail con los datos cargados.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

export default function Contacto({ modelName = '' }) {
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (ENDPOINT) {
      setStatus('sending');
      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, fecha: new Date().toISOString() }),
        });
        if (!res.ok) throw new Error(res.status);
        setStatus('sent');
        form.reset();
      } catch {
        setStatus('error');
      }
      return;
    }

    const body = [
      `Nombre: ${data.nombre} ${data.apellido}`,
      `Teléfono: ${data.telefono}`,
      `Email: ${data.email}`,
      `Modelo: ${data.modelo}`,
      '',
      data.mensaje,
    ].join('\n');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Consulta web: ${data.modelo || 'Chery'}`
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contacto" className="contacto">
      <div className="contacto__inner">
        <h2 className="contacto__title reveal">
          Sin dudas, <strong>tu próximo Chery</strong>
          <br />
          está cada vez más cerca.
        </h2>
        <p className="contacto__lead reveal reveal-delay-1">
          Completá el siguiente formulario y nos pondremos en contacto a la brevedad
        </p>

        <form className="contacto__form reveal reveal-delay-2" onSubmit={onSubmit}>
          <input name="nombre" type="text" placeholder="Nombre" />
          <input name="apellido" type="text" placeholder="Apellido" required />
          <input name="telefono" type="tel" placeholder="Teléfono" required pattern="[0-9()#&+*\-=. ]+" />
          <input name="email" type="email" placeholder="Email" required />
          {modelName ? (
            <input type="hidden" name="modelo" value={modelName} />
          ) : (
            <select name="modelo" defaultValue="">
              <option value="">Elegir Modelo</option>
              {[...models].sort((a, b) => a.name.localeCompare(b.name)).map((m) => (
                <option key={m.id} value={m.name}>{m.name.toUpperCase()}</option>
              ))}
            </select>
          )}
          <textarea name="mensaje" placeholder="Mensaje" rows={4} />
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando…' : 'Enviar'}
          </button>
          {status === 'sent' && <p className="contacto__msg">¡Gracias! Recibimos tu consulta.</p>}
          {status === 'error' && (
            <p className="contacto__msg contacto__msg--error">
              No pudimos enviar el formulario. Escribinos a {CONTACT_EMAIL}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
