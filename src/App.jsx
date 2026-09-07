import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import ModelsCarousel from './components/ModelsCarousel';
import HybridFeature from './components/HybridFeature';
import PriceList from './components/PriceList';
import Posventa from './components/Posventa';
import Nosotros from './components/Nosotros';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <ModelsCarousel />
        <HybridFeature />
        <Nosotros />
        <Posventa />
        <PriceList />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
