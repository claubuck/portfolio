// ═══════════════════════════════════════════════════════════════
//  TODO TU CONTENIDO VIVE AQUÍ.
//  Datos cargados desde tu CV. Edita este archivo (y los .md de
//  src/content/proyectos/) y el sitio entero se actualiza.
// ═══════════════════════════════════════════════════════════════

export const perfil = {
  nombre: 'Claudio Dario Campos',
  rol: 'AI Engineer & Full Stack Developer',
  especialidades: 'Agentes de IA · Sistemas multiagente · Automatización inteligente · LLMs',

  // Lo primero que lee un reclutador: qué haces y con qué impacto.
  titular:
    'Diseño agentes de IA y equipos de agentes que automatizan procesos reales de negocio. Más de 15 años construyendo software; hoy, IA aplicada en producción.',

  bio: `Desarrollador Full Stack con más de 15 años de experiencia, hoy enfocado en Inteligencia
Artificial aplicada: diseño y desarrollo de agentes de IA, equipos de agentes que colaboran entre sí
y automatizaciones inteligentes que resuelven problemas reales de negocio. Combino una base sólida
en arquitectura backend y sistemas escalables con la integración de modelos de lenguaje (LLMs) en
productos en producción.

He convertido procesos manuales en flujos automatizados de alto rendimiento, logrando el
procesamiento de millones de documentos en tiempos récord. Autodidacta, orientado a resultados y
reconocido por los equipos con los que trabajo por mi capacidad para resolver problemas complejos y
adoptar rápidamente nuevas tecnologías.`,

  ubicacion: 'Juan B. Alberdi, Tucumán, Argentina · Disponible para remoto',
  email: 'camposclaudio@live.com',
  telefono: '+54 9 3865 261406',
  // Solo dígitos, con código de país. Se usa para el enlace de WhatsApp.
  whatsapp: '5493865261406',

  // Deja en '' cualquiera que no quieras mostrar y desaparece solo.
  redes: {
    linkedin: 'https://www.linkedin.com/in/claudio-campos-b6b8095a/',
    github: 'https://github.com/claubuck', // ← verifica que sea tu usuario correcto
    sitio: '',
  },

  // Tu CV real ya está en public/cv.pdf. Para actualizarlo, reemplaza ese archivo.
  cv: 'cv.pdf',
} as const;

// ── Stack técnico ──────────────────────────────────────────────
// ── Cifras del hero ───────────────────────────────────────────
// Todas salen de tu CV. Si no puedes respaldar una cifra en una
// entrevista, bórrala: una sola inflada te cuesta el puesto.
export const estadisticas = [
  { valor: '15+', etiqueta: 'Años de experiencia' },
  { valor: 'Millones', etiqueta: 'De documentos procesados' },
  { valor: '3', etiqueta: 'Organismos públicos' },
  { valor: '100%', etiqueta: 'Dockerizado desde 2020' },
];

export const stack = [
  {
    categoria: 'Inteligencia Artificial',
    items: [
      'Agentes de IA',
      'Sistemas multiagente',
      'Orquestación de LLMs',
      'Tool calling',
      'RAG',
      'Prompt engineering',
    ],
  },
  {
    categoria: 'Automatización',
    items: [
      'Procesamiento masivo de documentos',
      'Extracción inteligente de datos',
      'Web scraping',
      'Integración de APIs',
      'n8n',
    ],
  },
  {
    categoria: 'Backend',
    items: ['Node.js', 'Nest.js', 'Go', 'PHP / Laravel 7-11', '.NET', 'ASP.NET MVC'],
  },
  {
    categoria: 'Frontend',
    items: ['Vue.js', 'Nuxt', 'React', 'Next.js', 'React Native', 'Tailwind CSS'],
  },
  {
    categoria: 'Infraestructura',
    items: [
      'Docker',
      'Kubernetes',
      'Argo CD',
      'Grafana',
      'Servidores Linux',
      'Despliegues a producción',
      'Git',
      'Gestión de dominios',
    ],
  },
];

// ── Experiencia ────────────────────────────────────────────────
// Lo más reciente primero.
export const experiencia = [
  {
    puesto: 'Desarrollador Full Stack & IA',
    empresa: 'TAXO',
    periodo: '2024 — Actualidad',
    contexto:
      'Empresa ecuatoriana de soluciones contables y tributarias. Node.js, Nest.js, Go, Nuxt, Tailwind y LLMs.',
    logros: [
      'Diseño y desarrollo de agentes de IA y equipos de agentes que automatizan tareas contables y operativas, integrando LLMs en los procesos centrales del negocio.',
      'Construcción de pipelines de procesamiento que permitieron procesar millones de documentos en tiempos récord, reduciendo drásticamente el trabajo manual.',
      'Desarrollo de automatizaciones que resolvieron problemas críticos de la operación, con reconocimiento constante del equipo por su impacto.',
      'Desarrollo de servicios backend de alto rendimiento en Node.js, Nest.js y Go, con frontend en Nuxt y Tailwind.',
    ],
    enlaces: [
      { texto: 'ws.taxo.co', url: 'https://ws.taxo.co' },
      { texto: 'app.taxo.co', url: 'https://app.taxo.co' },
    ],
  },
  {
    puesto: 'Consultor de Software',
    empresa: 'BIWINI',
    periodo: 'Septiembre 2022 — Actualidad',
    contexto:
      'A cargo de proyectos de desarrollo y modernización de sistemas para organismos públicos, y de la relación con los clientes.',
    logros: [
      'Sistema de ticketera para la Agencia Gubernamental de Control de Buenos Aires (Laravel 9, Vue 2).',
      'ENACOM — Sistema Hertz: automatización de los procesos administrativos y técnicos para la autorización de estaciones radioeléctricas.',
      'Sistema de gestión de expedientes para la Municipalidad de Escobar (Laravel 8).',
      'Sistema para el departamento de Catastro de la Municipalidad de Escobar (Laravel 10, Vue 3, Tailwind).',
      'Automatizaciones y web scraping con Node.js; gestión de servidores Linux y puesta en producción de sistemas dockerizados.',
    ],
    enlaces: [],
  },
  {
    puesto: 'Desarrollador de Software',
    empresa: 'Freelance',
    periodo: '2007 — Actualidad',
    contexto:
      'Consultoría y desarrollo de sistemas para organismos públicos, pymes y grandes empresas.',
    logros: [
      'Más de 15 años entregando sistemas de gestión a medida, de punta a punta: relevamiento, arquitectura, desarrollo y puesta en producción.',
      'Productos propios en explotación: sistemas multitenancy de ventas, gestión médica y gestión para proveedores de internet.',
    ],
    enlaces: [],
  },
];

// ── Formación y certificaciones ───────────────────────────────
export const formacion = [
  {
    titulo: 'Desarrollador PHP',
    institucion: 'Centro de e-Learning UTN FRBA',
    periodo: '2021',
  },
  {
    titulo: 'Desarrollador .NET',
    institucion: 'Centro de e-Learning UTN FRBA',
    periodo: '2020',
  },
  {
    titulo: 'Contador Público (en curso)',
    institucion: 'Universidad del Norte Santo Tomás de Aquino — Concepción, Tucumán',
    periodo: 'Restan 6 materias',
  },
];

// ── Navegación del header ─────────────────────────────────────
export const navegacion = [
  { texto: 'Proyectos', href: '#proyectos' },
  { texto: 'Stack', href: '#stack' },
  { texto: 'Experiencia', href: '#experiencia' },
  { texto: 'Contacto', href: '#contacto' },
];
