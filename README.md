# Portfolio

Sitio estático hecho con **Astro 7 + Tailwind CSS 4**, pensado para publicarse
gratis en **GitHub Pages**.

---

## 1. Verlo en tu máquina

```bash
npm install     # solo la primera vez
npm run dev     # abre http://localhost:4321
```

Guarda un archivo y el navegador se actualiza solo.

---

## 2. Qué editar (y qué no)

Casi todo el contenido vive en **dos sitios**. No necesitas tocar los componentes.

| Quiero cambiar…                          | Edito…                                    |
| ---------------------------------------- | ----------------------------------------- |
| Nombre, rol, bio, email, redes, ubicación | `src/data/perfil.ts`                      |
| Stack técnico                            | `src/data/perfil.ts` → `stack`            |
| Experiencia laboral y formación          | `src/data/perfil.ts` → `experiencia`      |
| Los proyectos                            | `src/content/proyectos/*.md`              |
| Mi CV                                    | Reemplazo `public/cv.pdf` (ya está el tuyo) |
| El color de acento                       | `src/styles/global.css` → `--c-accent`    |

### Agregar un proyecto

Copia cualquier `.md` de `src/content/proyectos/`, renómbralo y cambia el
contenido. Aparece solo en la web, ordenado por el campo `orden`.

```markdown
---
titulo: "Nombre del proyecto"
resumen: "Qué problema resuelve, en una frase."
stack: ["NestJS", "PostgreSQL"]
rol: "Tu rol real"
periodo: "2025"
repo: "https://github.com/usuario/repo"   # o "" si no lo muestras
demo: ""
destacado: true    # true = tarjeta grande arriba, con este texto incluido
orden: 1           # menor número, más arriba
---

Aquí va el detalle. Solo se muestra en los proyectos `destacado: true`.
```

---

## 3. Publicarlo gratis en GitHub Pages

### Paso 1 — Ajusta la configuración

Abre `astro.config.mjs` y reemplaza `TU-USUARIO` por tu usuario de GitHub.

- Si tu repo se llama **`portfolio`** → deja `base: '/portfolio'`.
- Si tu repo se llama **`TU-USUARIO.github.io`** → cambia a `base: '/'`.

Haz lo mismo con los enlaces `TU-USUARIO` en `src/data/perfil.ts`.

### Paso 2 — Sube el código

```bash
git init
git add .
git commit -m "Portfolio inicial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/portfolio.git
git push -u origin main
```

### Paso 3 — Activa Pages

En GitHub: **Settings → Pages → Build and deployment → Source: `GitHub Actions`**.

⚠️ Este paso es obligatorio. Si Pages nunca se activó, el workflow falla al final con:

```
Error: Failed to create deployment (status: 404)
HttpError: Not Found
Creating Pages deployment failed
```

El job de compilación sale en verde igual, así que el error engaña: lo que falta no
es el código, es el interruptor de Pages. Si eliges "Deploy from a branch" también falla.

### Paso 4 — Listo

El workflow `.github/workflows/deploy.yml` compila y publica en cada `git push`.
Tarda ~40 segundos. Tu sitio queda en:

```
https://TU-USUARIO.github.io/portfolio
```

Puedes seguir el progreso en la pestaña **Actions** del repo.

---

## 4. Dominio propio (opcional)

1. Compra el dominio (~10 USD/año en Namecheap o Cloudflare).
2. En **Settings → Pages → Custom domain**, escríbelo. GitHub crea el archivo `CNAME`.
3. En tu proveedor de DNS, apunta el dominio a GitHub Pages.
4. En `astro.config.mjs`: `site: 'https://tudominio.com'` y `base: '/'`.

El certificado HTTPS lo emite GitHub gratis.

---

## Comandos

| Comando           | Qué hace                                  |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Servidor local en `localhost:4321`        |
| `npm run build`   | Compila el sitio en `dist/`               |
| `npm run preview` | Muestra el sitio compilado, como en producción |
