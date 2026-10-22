// Orden pedido: Tiggo de mayor a menor, luego Arrizo y Himla.
// `officialUrl` apunta a la ficha oficial hasta que existan las paginas propias.
const OFFICIAL = 'https://chery.com.ar';

export const models = [
  { id: 'tiggo-8-pro', slug: 'tiggo-8-pro', line: 'tiggo', name: 'Tiggo 8 Pro', image: '/chery/models/tiggo8pro.png', officialUrl: `${OFFICIAL}/tiggo-8-pro/` },
  { id: 'tiggo-7-pro-hybrid', slug: 'tiggo-7-pro-hybrid', line: 'tiggo', name: 'Tiggo 7 Pro Hybrid', image: '/chery/models/tiggo7prohybrid.png', officialUrl: `${OFFICIAL}/tiggo-7-pro-hybrid/` },
  { id: 'tiggo-7-csh', slug: 'tiggo-7-csh', line: 'tiggo', name: 'Tiggo 7 CSH', image: '/chery/models/tiggo7csh.png', officialUrl: `${OFFICIAL}/tiggo-7-csh/` },
  { id: 'tiggo-4-pro', slug: 'tiggo-4-pro', line: 'tiggo', name: 'Tiggo 4 Pro', image: '/chery/models/tiggo4pro.webp', officialUrl: `${OFFICIAL}/tiggo-4-pro/` },
  { id: 'tiggo-4-csh', slug: 'tiggo-4-hybrid', line: 'tiggo', name: 'Tiggo 4 CSH', image: '/chery/models/tiggo4hybrid.png', officialUrl: `${OFFICIAL}/tiggo-4-hybrid/` },
  { id: 'tiggo-2-pro-max', slug: 'tiggo-2-pro-max', line: 'tiggo', name: 'Tiggo 2 Pro Max', image: '/chery/models/tiggo2promax.png', officialUrl: `${OFFICIAL}/tiggo-2-pro-max/` },
  { id: 'arrizo-8-csh', slug: 'arrizo8-csh', line: 'arrizo', name: 'Arrizo 8 CSH', image: '/chery/models/arrizo8csh.png', officialUrl: `${OFFICIAL}/arrizo8-csh/` },
  { id: 'himla', slug: 'himla', line: 'himla', name: 'Himla', image: '/chery/models/himla.webp', officialUrl: `${OFFICIAL}/himla/` },
];

// Las lineas se muestran con su logotipo (mismo PNG para el titulo grande y la pestana).
export const modelLines = [
  { id: 'tiggo', label: 'Tiggo', logo: '/chery/brand/line-tiggo.png', tabWidth: 92, titleWidth: 172 },
  { id: 'arrizo', label: 'Arrizo', logo: '/chery/brand/line-arrizo.png', tabWidth: 100, titleWidth: 190 },
  { id: 'himla', slug: 'himla', label: 'Himla', logo: '/chery/brand/line-himla.png', tabWidth: 74, titleWidth: 140 },
];

export const PRICE_LIST_URL =
  'https://chery.com.ar/wp-content/uploads/2026/10/20261006_CHERY-ARG-PUBLICA-N%C2%B014-OCT26-Segunda.pdf';
