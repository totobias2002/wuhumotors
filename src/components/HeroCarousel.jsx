import { useCallback, useEffect, useRef, useState } from 'react';
import { heroSlides } from '../data/heroSlides';
import './HeroCarousel.css';

const AUTOPLAY_MS = 6000;
const COUNT = heroSlides.length;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const startAutoplay = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % COUNT), AUTOPLAY_MS);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(timerRef.current);
  }, [startAutoplay]);

  const goTo = (i) => {
    setIndex(((i % COUNT) + COUNT) % COUNT);
    startAutoplay();
  };

  return (
    <section id="inicio" className="hero-carousel">
      {heroSlides.map((slide, i) => (
        <a
          key={slide.id}
          href="#contacto"
          className={`hero-carousel__slide ${i === index ? 'is-active' : ''}`}
          aria-hidden={i !== index}
          tabIndex={i === index ? 0 : -1}
        >
          <picture>
            <source media="(max-width: 780px)" srcSet={slide.mobile} />
            <img src={slide.desktop} alt={slide.alt} loading={i === 0 ? 'eager' : 'lazy'} />
          </picture>
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
        {heroSlides.map((slide, i) => (
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
