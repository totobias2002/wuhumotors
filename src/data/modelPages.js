// Contenido de las paginas de modelo (replica de chery.com.ar/<slug>/).
// Las fotos y el video del hero viven en /public/chery/models/<slug>/. Los videos de asistencias
// (pesan 4-11 MB cada uno) se enlazan desde chery.com.ar para no inflar el repositorio.
const UP = 'https://chery.com.ar/wp-content/uploads';

const t8 = '/chery/models/tiggo-8-pro';

export const modelPages = {
  'tiggo-8-pro': {
    name: 'Tiggo 8 Pro',
    hero: { video: `${t8}/hero.mp4`, logo: `${t8}/logo-hero.png`, logoSize: [422, 50] },
    modelLogo: `${t8}/logo-btn.png`,
    highlights: [
      { icon: 0, text: 'Garantía de 7 años' },
      { icon: 1, text: '1.6L Turbo con 186CV' },
      { icon: 2, text: 'Asistencias a la conducción' },
      { icon: 3, text: 'Capacidad para 7 Pasajeros' },
    ],
    brochure: `${UP}/2025/12/MY25_TIGGO_8_PRO.pdf`,
    interior: {
      title: 'Interior',
      text: 'El **TIGGO 8 Pro** ofrece un interior amplio y confortable; cuenta con **7 plazas**, **tapizado interior en cuero ecológico, techo panorámico, pantallas LED de 12,3” con conectividad inalámbrica, cámara 360°, sistema de audio premium SONY, asientos eléctricos delanteros y climatización tri-zona,** para una experiencia premium.',
      images: [`${t8}/int-1.png`, `${t8}/int-2.jpg`, `${t8}/int-3.png`, `${t8}/int-4.jpg`],
    },
    band: { video: `${t8}/hero.mp4`, image: `${t8}/mobile-hero.jpg` },
    security: {
      title: 'Seguridad',
      text: 'Cuenta con **6 airbags, control de estabilidad (ESP), control de tracción (TCS), asistente de arranque en pendiente (HAC), control de descenso (HDC), alerta de punto ciego (BSD), alerta de trafico cruzado trasero (RCTA) y asistencias avanzadas a la conducción (ADAS)** brindando una protección total.',
      images: [`${t8}/sec-1.png`, `${t8}/sec-2.png`, `${t8}/sec-3.jpg`, `${t8}/sec-4.jpg`],
    },
    tech: {
      title: 'Tecnología',
      bg: `${t8}/tech-bg.png`,
      paragraphs: [
        'Dentro de las asistencias avanzadas (ADAS) cuenta con **Alerta de colisión frontal (FWC), asistente de frenado automático (AEB), alerta de mantenimiento activo de carril (LDW+LKA), conmutador automático de luces (IHC) y control crucero adaptativo ACC).**',
        'Cuenta con asistencias a la conducción para reforzar tu seguridad y la de los ocupantes.',
      ],
    },
    adas: [
      { caption: 'ALERTA DE CAMBIO INVOLUNTARIO DE CARRIL(LDW)', video: `${UP}/2025/12/ALERTA-DE-CAMBIO-INVOLUNTARIO-DE-CARRILLDW_Without-Subtitle.mp4` },
      { caption: 'ALERTA DE COLISIÓN TRASERA (RCW)', video: `${UP}/2025/12/ALERTA-DE-COLISION-TRASERA-RCW_Without-Subtitle.mp4` },
      { caption: 'ALERTA DE PUERTA ABIERTA (DOW)', video: `${UP}/2025/12/ALERTA-DE-PUERTA-ABIERTA-DOW_Without-Subtitle.mp4` },
      { caption: 'ALERTA DE TRAFICO CRUZADO TRACERO (RCTA)', video: `${UP}/2025/12/ALERTA-DE-TRAFICO-CRUZADO-TRACERO-RCTA_Without-Subtitle.mp4` },
      { caption: 'CONMUTADOR AUTOMATICO DE LUCES ALTAS (IHC)', video: `${UP}/2025/12/CONMUTADOR-AUTOMATICO-DE-LUCES-ALTAS%EF%BC%88IHC%EF%BC%89_Without-Subtitle.mp4` },
      { caption: 'CONTROL DE CRUCERO ADAPTATIVO (ACC)', video: `${UP}/2025/12/CONTROL-DE-CRUCERO-ADAPTATIVO-ACC_Without-Subtitle.mp4` },
    ],
    colorsBrochure: `${UP}/2025/08/MY25-TIGGO-8-PRO.pdf`,
    colors: [
      { name: 'Tech Grey', hex: '#9d9d9d', image: `${t8}/color-1.png` },
      { name: 'Khaki White', hex: '#ffffff', ring: true, image: `${t8}/color-2.png` },
      { name: 'Nasdaq Silver', hex: '#b9c6cf', image: `${t8}/color-3.png` },
      { name: 'Carbon Black', hex: '#171a29', image: `${t8}/color-4.png` },
      { name: 'Rhine Blue', hex: '#003366', image: `${t8}/color-5.png` },
      { name: 'Aurora Green', hex: '#0f5e3a', image: `${t8}/color-6.png` },
    ],
  },
};

// Todos los modelos tienen ruta interna (/slug). Los que todavia no tienen ficha completa muestran
// una pagina "proximamente" dentro del mismo sitio.
export const modelPath = (m) => `/${m.slug}`;
