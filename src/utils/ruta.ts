/**
 * Construye una URL respetando el `base` configurado en astro.config.mjs.
 * Úsalo para cualquier archivo de public/ (cv.pdf, imágenes, favicon).
 * Así el sitio funciona igual en /portfolio que en la raíz del dominio.
 */
export function ruta(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}/${path.replace(/^\/+/, '')}`;
}
