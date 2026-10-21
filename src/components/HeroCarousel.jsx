import { useCallback, useEffect, useRef, useState } from 'react';
import { heroSlidesDesktop, heroSlidesMobile, HERO_MOBILE_QUERY } from '../data/heroSlides';
import './HeroCarousel.css';

const AUTOPLAY_MS = 6000;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(HERO_MOBILE_QUERY).matches);
  useEffect(() => {
    const mq = window.matchMedia(HERO_MOBILE_QUERY);
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return isMobile;
}

export default function HeroCarousel() {
  const isMobile = useIsMobile();
  const slides = isMobile ? heroSlidesMobile : heroSlidesDesktop;
  const count = slides.length;

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const startAutoplay = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
  }, [count]);

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(timerRef.current);
  }, [startAutoplay]);

  const goTo = (i) => {
    setIndex(((i % count) + count) % count);
    startAutoplay();
  };

  return (
    <section id="inicio" className="hero-carousel">
      {slides.map((slide, i) => (
        <a
          key={slide.id}
          href="#contacto"
          className={`hero-carousel__slide ${i === index ? 'is-active' : ''}`}
          aria-hidden={i !== index}
          tabIndex={i === index ? 0 : -1}
        >
          <img src={slide.src} alt={slide.alt} loading={i === 0 ? 'eager' : 'lazy'} />
        </a>
      ))}

      <button
        className="hero-carousel__arrow hero-carousel__arrow--prev"
        onClick={() => goTo(index - 1)}
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        className="hero-carousel__arrow hero-carousel__arrow--next"
        onClick={() => goTo(index + 1)}
        aria-label="Siguiente"
      >
        ›
      </button>

      <div className="hero-carousel__dots">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            className={i === index ? 'is-active' : ''}
            onClick={() => goTo(i)}
            aria-label={`Ver ${slide.alt}`}
          />
        ))}
      </div>
    </section>
  );
}
