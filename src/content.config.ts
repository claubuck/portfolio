import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Cada archivo .md dentro de src/content/proyectos/ se convierte
// automáticamente en una tarjeta de proyecto. Para agregar uno nuevo,
// copia un .md existente y cambia el contenido. Nada más.
const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    titulo: z.string(),
    // Una frase: qué problema resuelve. No qué tecnología usa.
    resumen: z.string(),
    // Tecnologías principales. Máximo 6 o la tarjeta se satura.
    stack: z.array(z.string()),
    // Tu rol real en el proyecto.
    rol: z.string().optional(),
    periodo: z.string().optional(),
    // Acepta una URL o cadena vacía (para ocultar el botón).
    repo: z.union([z.string().url(), z.literal('')]).optional(),
    demo: z.union([z.string().url(), z.literal('')]).optional(),
    // Los destacados salen primero y con borde marcado.
    destacado: z.boolean().default(false),
    // Menor número = aparece antes.
    orden: z.number().default(99),
  }),
});

export const collections = { proyectos };
