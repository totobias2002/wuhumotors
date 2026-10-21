// Formato: codigo de pais + numero, sin espacios, guiones ni "+". Ej: 5491122223333
// TODO: confirmar que este sea el WhatsApp comercial real (hoy es el telefono que figura en el footer).
export const WHATSAPP_NUMERO = import.meta.env.VITE_WHATSAPP_NUMERO || '5491160016793';
export const WHATSAPP_MENSAJE = 'Hola, quería consultar por un Chery.';

export function armarLinkWhatsapp(mensaje = WHATSAPP_MENSAJE, numero = WHATSAPP_NUMERO) {
  return `https://wa.me/${numero.replace(/\D/g, '')}?text=${encodeURIComponent(mensaje)}`;
}
