// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// ─────────────────────────────────────────────────────────────
// CONFIGURACIÓN DE GITHUB PAGES — lee esto antes del primer deploy
//
// Caso A (por defecto): repo llamado "portfolio"
//   URL final: https://TU-USUARIO.github.io/portfolio
//   site: 'https://TU-USUARIO.github.io'   base: '/portfolio'
//
// Caso B: repo llamado "TU-USUARIO.github.io"
//   URL final: https://TU-USUARIO.github.io
//   site: 'https://TU-USUARIO.github.io'   base: '/'  (o borra la línea base)
//
// Caso C: dominio propio (ej. claudiocampos.dev)
//   site: 'https://claudiocampos.dev'      base: '/'
// ─────────────────────────────────────────────────────────────

// https://astro.build/config
export default defineConfig({
  site: 'https://claubuck.github.io',
  base: '/portfolio',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
