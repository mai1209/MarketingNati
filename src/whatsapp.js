// Helper centralizado para los links de WhatsApp.
// Si cambia el número, se cambia solo acá.
const PHONE = "5492213096523";

export function whatsappLink(message) {
  const base = `https://wa.me/${PHONE}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
