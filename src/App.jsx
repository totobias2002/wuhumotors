import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import ModelsCarousel from './components/ModelsCarousel';
import Posventa from './components/Posventa';
import Nosotros from './components/Nosotros';
import Footer from './components/Footer';
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
        <Nosotros />
      </main>
      <Footer />
    </>
  );
}

export default App;
