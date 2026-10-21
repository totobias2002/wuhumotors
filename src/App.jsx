import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
import Home from './pages/Home';
import ModelPage from './pages/ModelPage';
import useReveal from './hooks/useReveal';

// Al cambiar de pagina vuelve arriba; si la URL trae #ancla, baja hasta esa seccion.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }
    const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
    return () => clearTimeout(t);
  }, [pathname, hash]);
  return null;
}

function App() {
  const { pathname } = useLocation();
  useReveal(pathname);

  return (
    <>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<ModelPage />} />
      </Routes>
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;
