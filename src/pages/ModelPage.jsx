import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { modelPages } from '../data/modelPages';
import { models } from '../data/models';
import ModelSoon from './ModelSoon';
import ModelHero from '../components/model/ModelHero';
import TextGallery from '../components/model/TextGallery';
import VideoBand from '../components/model/VideoBand';
import AdasCarousel from '../components/model/AdasCarousel';
import ColorPicker from '../components/model/ColorPicker';
import Contacto from '../components/Contacto';
import rich from '../components/model/rich';
import '../components/model/ModelPage.css';

export default function ModelPage() {
  const { slug } = useParams();
  const data = modelPages[slug];

  useEffect(() => {
    if (data) document.title = `Chery ${data.name} | Wuhu Motors`;
    return () => {
      document.title = 'Wuhu Motors | Concesionario Oficial Chery';
    };
  }, [data]);

  if (!data) {
    const model = models.find((m) => m.slug === slug);
    return model ? <ModelSoon model={model} /> : <Navigate to="/" replace />;
  }

  const common = { modelLogo: data.modelLogo, modelName: data.name };

  return (
    <main className="mp">
      <ModelHero data={data} />
      <TextGallery id="interior" title={data.interior.title} paragraphs={[data.interior.text]} images={data.interior.images} {...common} />
      <VideoBand band={data.band} />
      <TextGallery id="seguridad" title={data.security.title} paragraphs={[data.security.text]} images={data.security.images} reverse {...common} />

      <section id="tecnologia" className="mp-tech" style={{ backgroundImage: `url(${data.tech.bg})` }}>
        <div className="mp-tech__copy">
          <h2 className="mp-h2">{data.tech.title}</h2>
          <span className="mp-divider" />
          <div className="mp-text">
            {data.tech.paragraphs.map((p, i) => (
              <p className="mp-p" key={i}>{rich(p)}</p>
            ))}
          </div>
          <div className="mp-split__cta">
            <a className="mp-btn" href="#contacto">Cotizá tu Chery</a>
            <img className="mp-split__logo" src={data.modelLogo} alt={data.name} />
          </div>
        </div>
      </section>
      <AdasCarousel items={data.adas} />

      <ColorPicker colors={data.colors} brochure={data.colorsBrochure} />
      <Contacto modelName={data.name} />
    </main>
  );
}
