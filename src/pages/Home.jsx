import HeroCarousel from '../components/HeroCarousel';
import ModelsCarousel from '../components/ModelsCarousel';
import Posventa from '../components/Posventa';
import Concesionarios from '../components/Concesionarios';
import Contacto from '../components/Contacto';

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <ModelsCarousel />
      <Posventa />
      <Concesionarios />
      <Contacto />
    </main>
  );
}
