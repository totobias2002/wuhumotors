// Convierte "texto **negrita** texto" en nodos React (las negritas de las fichas de Chery).
export default function rich(text) {
  return text.split('**').map((part, i) => (i % 2 ? <b key={i}>{part}</b> : part));
}
