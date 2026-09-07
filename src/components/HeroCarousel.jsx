import { useCallback, useEffect, useRef, useState } from 'react';
import { heroSlides } from '../data/heroSlides';
import './HeroCarousel.css';

const AUTOPLAY_MS = 6000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((i) => {
    setIndex(((i % heroSlides.length) + heroSlides.length) % heroSlides.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, []);

  const restartAutoplay = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, AUTOPLAY_MS);
  };

  return (
    <section id="inicio" className="hero-carousel">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.id}
          className={`hero-carousel__slide ${i === index ? 'is-active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={i !== index}
        >
          <div className="hero-carousel__scrim" />
        </div>
      ))}

      <div className="container hero-carousel__content">
        {heroSlides.map((slide, i) => (
          <a
            key={slide.id}
            href={slide.ctaHref}
            className={`hero-carousel__text ${i === index ? 'is-active' : ''}`}
            style={{ '--accent': slide.accent }}
            aria-label={`Ver ${slide.badge}`}
          >
            {slide.logoImage || slide.textImage ? (
              <div className="hero-carousel__graphic">
                {slide.logoImage && (
                  <img
                    src={slide.logoImage}
                    alt={slide.badge}
                    className="hero-carousel__logo-img"
                  />
                )}
                {slide.textImage && (
                  <img
                    src={slide.textImage}
                    alt={slide.title}
                    className="hero-carousel__text-img"
                  />
                )}
              </div>
            ) : (
              <>
                <span className="hero-carousel__badge">{slide.badge}</span>
                <h1>{slide.title}</h1>
              </>
            )}
          </a>
        ))}
      </div>

      <button
        className="hero-carousel__arrow hero-carousel__arrow--prev"
        onClick={() => {
          prev();
          restartAutoplay();
        }}
        aria-label="Modelo anterior"
      >
        ‹
      </button>
      <button
        className="hero-carousel__arrow hero-carousel__arrow--next"
        onClick={() => {
          next();
          restartAutoplay();
        }}
        aria-label="Siguiente modelo"
      >
        ›
      </button>

      <div className="hero-carousel__dots">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.id}
            className={i === index ? 'is-active' : ''}
            onClick={() => {
              goTo(i);
              restartAutoplay();
            }}
            aria-label={`Ver ${slide.badge}`}
          />
        ))}
      </div>

      <a href="#modelos" className="hero-carousel__scroll" aria-label="Ir a modelos">
        <span />
      </a>
    </section>
  );
}
