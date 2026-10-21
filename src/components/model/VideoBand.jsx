// Franja de pantalla completa entre secciones. Variantes: video de fondo (escritorio) + foto con parallax
// en celular/tablet, solo foto, o reproductor de video con controles.
export default function VideoBand({ band }) {
  if (band.player) {
    return (
      <section className={`mp-band mp-band--player ${band.mobileOnly ? 'mp-band--mobile-only' : ''}`}>
        <video src={band.player} controls playsInline preload="metadata" />
      </section>
    );
  }
  if (band.video) {
    return (
      <>
        <section className="mp-band mp-band--video" aria-hidden="true">
          <video src={band.video} autoPlay muted loop playsInline preload="none" />
        </section>
        {band.image && <section className="mp-band mp-band--image" style={{ backgroundImage: `url(${band.image})` }} aria-hidden="true" />}
      </>
    );
  }
  return <section className="mp-band mp-band--photo" style={{ backgroundImage: `url(${band.image})` }} aria-hidden="true" />;
}
