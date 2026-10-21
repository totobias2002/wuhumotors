import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { modelPages } from '../data/modelPages';
import { models } from '../data/models';
import ModelSoon from './ModelSoon';
import ModelHero from '../components/model/ModelHero';
import TextGallery from '../components/model/TextGallery';
import TechSection from '../components/model/TechSection';
import VideoBand from '../components/model/VideoBand';
import AdasCarousel from '../components/model/AdasCarousel';
import ColorPicker from '../components/model/ColorPicker';
import { Cards, InfoText, Photo, Services } from '../components/model/InfoBlocks';
import Contacto from '../components/Contacto';
import '../components/model/ModelPage.css';

// Cada tipo de bloque de la lista `blocks` de modelPages.js se dibuja con su componente.
function renderBlock(block, i, data) {
  const common = { modelLogo: data.modelLogo, modelName: data.name };
  switch (block.type) {
    case 'hero':
      return <ModelHero key={i} block={block} name={data.name} />;
    case 'feature':
      return (
        <TextGallery key={i} id={block.id} title={block.title} paragraphs={block.paras} images={block.images} video={block.video}
          reverse={block.reverse} tone={block.tone} ink={block.ink} boxed={block.boxed} m={block.m} videoFirst={block.videoFirst} {...common} />
      );
    case 'band':
      return <VideoBand key={i} band={block} />;
    case 'tech':
      return <TechSection key={i} block={block} {...common} />;
    case 'carousel':
      return <AdasCarousel key={i} items={block.items} bare={!block.items[0]?.video} />;
    case 'infotext':
      return <InfoText key={i} block={block} />;
    case 'photo':
      return <Photo key={i} block={block} />;
    case 'cards':
      return <Cards key={i} block={block} />;
    case 'services':
      return <Services key={i} block={block} />;
    case 'colors':
      return <ColorPicker key={i} colors={block.colors} brochure={block.brochure} layout={block.layout} />;
    default:
      return null;
  }
}

export default function ModelPage() {
  const { slug } = useParams();
  const data = modelPages[slug];

  useEffect(() => {
    if (data) document.title = `Chery ${data.name} | Wuhu Motors`;
    return () => {
      document.title = 'Wuhu Motors | Chery';
    };
  }, [data]);

  if (!data) {
    const model = models.find((m) => m.slug === slug);
    return model ? <ModelSoon model={model} /> : <Navigate to="/" replace />;
  }

  return (
    <main className="mp">
      {data.blocks.map((b, i) => renderBlock(b, i, data))}
      <Contacto modelName={data.name} />
    </main>
  );
}
