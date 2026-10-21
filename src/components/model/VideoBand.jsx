// Franja de pantalla completa entre Interior y Seguridad: video en escritorio, foto con parallax en celular/tablet.
export default function VideoBand({ band }) {
  return (
    <>
      <section className="mp-band mp-band--video" aria-hidden="true">
        <video src={band.video} autoPlay muted loop playsInline preload="none" />
      </section>
      <section className="mp-band mp-band--image" style={{ backgroundImage: `url(${band.image})` }} aria-hidden="true" />
    </>
  );
}
