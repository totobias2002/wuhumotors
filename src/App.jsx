import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import ModelsCarousel from './components/ModelsCarousel';
import Posventa from './components/Posventa';
import Concesionarios from './components/Concesionarios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
import useReveal from './hooks/useReveal';

function App() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <ModelsCarousel />
        <Posventa />
        <Concesionarios />
        <Contacto />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;
