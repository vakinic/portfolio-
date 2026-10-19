import type { ImageMetadata } from 'astro';

import sdHome from '../assets/work/sawdust/home-desktop.png';
import sdHomeM from '../assets/work/sawdust/home-mobile.png';
import sdCat from '../assets/work/sawdust/categoria-desktop.png';
import sdCatM from '../assets/work/sawdust/categoria-mobile.png';
import sdPdp from '../assets/work/sawdust/producto-desktop.png';
import sdPdpM from '../assets/work/sawdust/producto-mobile.png';
import sdDest from '../assets/work/sawdust/destacados-desktop.png';

import mdHome from '../assets/work/medicos/home-desktop.png';
import mdHomeM from '../assets/work/medicos/home-mobile.png';
import mdComp from '../assets/work/medicos/competencias-desktop.png';
import mdEco from '../assets/work/medicos/ecosistema-desktop.png';
import mdProg from '../assets/work/medicos/programa-desktop.png';
import mdTall from '../assets/work/medicos/talleres-desktop.png';
import mdRec from '../assets/work/medicos/recursos-desktop.png';
import mdCursos from '../assets/work/medicos/cursos-desktop.png';

import gvProd from '../assets/work/goldvision/producto.png';
import gvHome from '../assets/work/goldvision/home.png';
import gvMas from '../assets/work/goldvision/mas-vendidos.png';
import gvGrad from '../assets/work/goldvision/graduacion.png';

import agAgenda from '../assets/work/automatizacion/agente-agenda.png';

export type Status = 'online' | 'listo' | 'desarrollo' | 'prototipo';

/** Region of the plate image, in % of its width/height. */
export interface Region { x: number; y: number; w: number; h: number }

export interface Callout {
  title: string;
  detail: string;
  /** Concrete piece that implements it (section, file, setting). */
  impl?: string;
  region: Region;
  /** Where the number sits, when the region's top-left corner covers content. */
  pin?: { x: number; y: number };
}

export interface Figure {
  src: ImageMetadata;
  alt: string;
  caption: string;
  kind: 'desktop' | 'mobile' | 'detail';
}

export interface Project {
  ref: string;
  slug: string;
  name: string;
  /** What it is, in a few words. */
  kind: string;
  platform: string;
  year: string;
  status: Status;
  statusLabel: string;
  statusNote: string;
  summary: string;
  goal: string;
  role: string[];
  solution: string;
  stack: string[];
  link?: { href: string; label: string };
  plate: { src: ImageMetadata; alt: string; callouts: Callout[] };
  figures: Figure[];
  facts?: { label: string; value: string }[];
  notes?: string[];
}

export const projects: Project[] = [
  {
    ref: '01',
    slug: 'sawdust',
    name: 'SawDust',
    kind: 'Tienda online',
    platform: 'Tiendanube',
    year: '2026',
    status: 'online',
    statusLabel: 'Online',
    statusNote: 'Publicada en sawdust.com.ar',
    summary:
      'Rediseño del storefront de una marca que pasó a vender rubros muy distintos: autos a radio control, fresas CNC, lockers y más, ordenados bajo un mismo criterio.',
    goal:
      'Que un cliente entienda en segundos qué vende la marca, encuentre su rubro y compre con confianza, y que se puedan sumar rubros nuevos desde el administrador, sin rediseñar.',
    role: [
      'Dirección visual y sistema de diseño (color, tipografía, cards, botones)',
      'Arquitectura de rubros, menú desktop y mobile',
      'Desarrollo del theme sobre Ipanema: secciones propias, header, filtros y fichas',
      'QA en preview real (390 a 1440 px) antes de cada publicación',
    ],
    solution:
      'Un theme propio sobre Ipanema que respeta todo lo nativo de Tiendanube (variantes, promos, cuotas, envío, filtros) y suma secciones configurables desde el editor visual: hero de campaña, rubros, campaña destacada, producto protagonista y FAQ.',
    stack: ['Tiendanube', 'Twig', 'CSS', 'JavaScript sin librerías'],
    link: { href: 'https://www.sawdust.com.ar/', label: 'sawdust.com.ar' },
    plate: {
      src: sdHome,
      alt: 'Home de SawDust en desktop: header con buscador, hero de autos a radio control y tarjetas de rubro.',
      callouts: [
        {
          title: 'Buscador protagonista y menú por rubros',
          detail: 'El buscador queda siempre a mano y el menú ordena la tienda por rubro. Al hacer scroll el header se compacta solo con CSS, sin saltos de layout.',
          impl: 'header.tpl · menú propio seleccionable desde el editor',
          region: { x: 4.6, y: 2.4, w: 90.8, h: 10.2 },
        },
        {
          title: 'Hero de campaña por dispositivo',
          detail: 'Arte distinto para desktop y mobile, para que el producto y el texto se lean bien en cada pantalla.',
          impl: 'sección sd-hero',
          region: { x: 0, y: 12.4, w: 100, h: 38 },
        },
        {
          title: 'Tarjetas de rubro',
          detail: 'Tres rubros principales como puerta de entrada. El encuadre de cada foto se ajusta desde el editor para que el producto se vea completo en pantallas chicas.',
          impl: 'sección sd-rubros',
          region: { x: 5, y: 55.4, w: 90, h: 42.4 },
          pin: { x: 20.6, y: 55.6 },
        },
      ],
    },
    figures: [
      { src: sdHomeM, alt: 'Home de SawDust en mobile con el hero vertical.', caption: 'Home mobile, arte vertical propio', kind: 'mobile' },
      { src: sdCat, alt: 'Categoría Autos RC con filtro Tipo y precio en la barra lateral.', caption: 'Categoría con filtro «Tipo» por campo personalizado', kind: 'desktop' },
      { src: sdPdpM, alt: 'Ficha de producto de SawDust en mobile con precio, cuotas y precio por transferencia.', caption: 'Ficha de producto mobile', kind: 'mobile' },
      { src: sdDest, alt: 'Grilla de productos destacados con precio, cuotas y precio con transferencia.', caption: 'Product cards: precio, cuotas y transferencia', kind: 'desktop' },
      { src: sdCatM, alt: 'Categoría de SawDust en mobile con barra de filtrar y ordenar.', caption: 'Categoría mobile', kind: 'mobile' },
      { src: sdPdp, alt: 'Ficha de producto de SawDust en desktop con galería y selector de color.', caption: 'Ficha de producto desktop', kind: 'desktop' },
    ],
    facts: [
      { label: 'Base', value: 'Theme Ipanema, versión propia' },
      { label: 'Secciones propias', value: 'Hero, rubros, campaña, descubrimiento, producto protagonista, FAQ' },
      { label: 'Respaldo', value: 'Cada versión anterior del theme queda congelada para volver atrás' },
    ],
  },
  {
    ref: '02',
    slug: 'medicos-digitales',
    name: 'Médicos Digitales',
    kind: 'Sitio con CMS',
    platform: 'Next.js + Sanity',
    year: '2026',
    status: 'listo',
    statusLabel: 'Listo para publicar',
    statusNote: 'Terminado, a la espera del dominio del cliente',
    summary:
      'Landing y páginas internas para un campus virtual de formación en salud digital dirigido a médicos especialistas.',
    goal:
      'Explicar un modelo denso (recursos gratis → talleres → acompañamiento) a médicos con poco tiempo que llegan desde el celular, y que el cliente pueda editar los textos sin depender de un desarrollador.',
    role: [
      'Sistema visual derivado del logo: la cruz ámbar que se abre en esquinas',
      'Arquitectura de contenido: home + cursos, referencias y preguntas frecuentes',
      'Desarrollo en Next.js y TypeScript con CSS Modules',
      'CMS en Sanity con panel en español, SEO técnico y QA final',
    ],
    solution:
      'Un sitio estático con revalidación: Sanity entrega los textos, un webhook firmado actualiza las páginas al publicar y el formulario oficial de Substack capta suscriptores sin backend propio.',
    stack: ['Next.js', 'TypeScript', 'CSS Modules', 'Sanity', 'Substack'],
    plate: {
      src: mdHome,
      alt: 'Hero de Médicos Digitales en desktop: titular con una palabra en serif itálica y reel de retratos.',
      callouts: [
        {
          title: 'Titular editorial',
          detail: 'Grotesca con carácter para leer rápido y una sola palabra en serif itálica como acento. Fuentes autoalojadas.',
          impl: 'next/font · tokens.css',
          region: { x: 3.6, y: 27.6, w: 52.4, h: 28 },
          pin: { x: 47.5, y: 29 },
        },
        {
          title: 'Textos editables desde Sanity',
          detail: 'Propuesta, listas y botones salen del CMS: el cliente cambia copys y destinos sin tocar el diseño.',
          impl: 'Sanity Studio en /studio',
          region: { x: 59, y: 13.4, w: 37.6, h: 40.6 },
          pin: { x: 87.4, y: 13.6 },
        },
        {
          title: 'Reel con la cruz del logo',
          detail: 'Las esquinas ámbar del logo enmarcan la foto activa. El movimiento se puede pausar y se detiene con movimiento reducido.',
          impl: 'componente HeroReel',
          region: { x: 0, y: 58.4, w: 100, h: 41.6 },
        },
      ],
    },
    figures: [
      { src: mdHomeM, alt: 'Hero de Médicos Digitales en mobile.', caption: 'Hero mobile', kind: 'mobile' },
      { src: mdComp, alt: 'Sección de competencias digitales con una cruz ámbar dividiendo cuatro áreas.', caption: 'Competencias: la cruz como divisor', kind: 'desktop' },
      { src: mdEco, alt: 'Pirámide del ecosistema de servicios construida en HTML sobre fondo negro.', caption: 'Ecosistema: diagrama del PDF rehecho en HTML', kind: 'desktop' },
      { src: mdProg, alt: 'Programa en tres niveles representado como escalera.', caption: 'Programa en tres niveles', kind: 'desktop' },
      { src: mdTall, alt: 'Webinars gratuitos y talleres con acompañamiento en dos columnas.', caption: 'Talleres: gratis vs. acompañamiento', kind: 'desktop' },
      { src: mdCursos, alt: 'Página interna de cursos y seminarios.', caption: 'Página interna /cursos', kind: 'desktop' },
      { src: mdRec, alt: 'Recursos gratuitos y bloque de suscripción con el formulario de Substack.', caption: 'Recursos + suscripción con Substack', kind: 'desktop' },
    ],
    facts: [
      { label: 'Lighthouse mobile', value: 'Rendimiento 95–97 · Accesibilidad, buenas prácticas y SEO 100' },
      { label: 'Lighthouse desktop', value: '100 en las cuatro categorías' },
      { label: 'Medición', value: 'Build de producción local, mediana de 3 corridas' },
    ],
  },
  {
    ref: '03',
    slug: 'gold-vision',
    name: 'Gold Vision',
    kind: 'Tienda online',
    platform: 'Shopify',
    year: '2026',
    status: 'desarrollo',
    statusLabel: 'En desarrollo',
    statusNote: 'Tienda de prueba; la marca todavía no lanzó',
    summary:
      'Tienda de óptica para una marca nueva: anteojos de vista, cristales y lentes de contacto, con compra de anteojos recetados online.',
    goal:
      'Vender anteojos con receta, no solo de sol: cada compra depende de datos de graduación que antes solo se tomaban en el local.',
    role: [
      'Prototipo visual navegable aprobado por el cliente antes de programar',
      'Conversión a theme Shopify Online Store 2.0 sobre Dawn, con secciones propias',
      'Flujo de receta y graduación en la ficha de producto',
      'Exploración previa de la tienda en Tiendanube',
    ],
    solution:
      'Variantes de color reales con stock propio, carrito y checkout nativos de Shopify, filtros de colección nativos y una receta que viaja con el pedido: valores cargados a mano o foto adjunta, visibles en el Admin sin apps.',
    stack: ['Shopify', 'Liquid', 'Dawn', 'JavaScript'],
    plate: {
      src: gvProd,
      alt: 'Ficha de producto de Gold Vision: anteojo rojo, selector de color y pregunta sobre cristales graduados.',
      callouts: [
        {
          title: 'Cuotas y transferencia junto al precio',
          detail: 'La financiación aparece donde se decide la compra, como hacen las ópticas líderes de venta online en Argentina.',
          impl: 'sección gv-main-product',
          region: { x: 56.1, y: 43.4, w: 41, h: 7.6 },
          pin: { x: 92.4, y: 44.2 },
        },
        {
          title: 'Variantes de color reales',
          detail: 'Cada color es una variante de Shopify con su propio stock, no una simulación visual.',
          impl: 'Product variants',
          region: { x: 55.4, y: 54.8, w: 11.6, h: 6.4 },
          pin: { x: 66.4, y: 54.4 },
        },
        {
          title: 'Cristales graduados en la misma ficha',
          detail: 'El cliente elige si necesita graduación y carga los valores o sube la receta. Los datos llegan al pedido como propiedades de la línea.',
          impl: 'line item properties',
          region: { x: 56.1, y: 62.4, w: 41, h: 17 },
          pin: { x: 92.4, y: 63.2 },
        },
      ],
    },
    figures: [
      { src: gvGrad, alt: 'Formulario de graduación con esfera, cilindro, eje y distancia pupilar para cada ojo.', caption: 'Carga de graduación por ojo', kind: 'detail' },
      { src: gvHome, alt: 'Home de Gold Vision con barra de beneficios y categorías.', caption: 'Home: beneficios y categorías', kind: 'desktop' },
      { src: gvMas, alt: 'Grilla de más vendidos con precios y colores disponibles.', caption: 'Más vendidos con colores por producto', kind: 'desktop' },
    ],
    notes: [
      'Las fotos de producto son provisorias hasta tener fotografía propia.',
      'Faltan definir medios de pago y envío: es una decisión del cliente, no técnica.',
    ],
  },
  {
    ref: '04',
    slug: 'agente-de-agenda',
    name: 'Agente de agenda',
    kind: 'Automatización con IA',
    platform: 'n8n',
    year: '2026',
    status: 'prototipo',
    statusLabel: 'Prototipo',
    statusNote: 'Workflow propio, funcionando en n8n',
    summary:
      'Asistente por WhatsApp que entiende mensajes de texto y de audio y gestiona turnos en Google Calendar.',
    goal:
      'Responder y agendar sin intervención manual: crear, consultar, mover o cancelar turnos desde una conversación de WhatsApp.',
    role: ['Diseño del flujo y de los datos', 'Integraciones: WhatsApp, Supabase, OpenAI, Google Calendar', 'Agente con memoria de conversación'],
    solution:
      'Un webhook recibe cada mensaje; los audios se transcriben, el usuario se busca o se crea en Supabase y un agente de IA con memoria decide qué hacer en el calendario y responde por WhatsApp.',
    stack: ['n8n', 'WhatsApp', 'OpenAI', 'Supabase', 'Google Calendar'],
    plate: {
      src: agAgenda,
      alt: 'Workflow de n8n con nodos de webhook, transcripción de audio, Supabase, agente de IA y Google Calendar.',
      callouts: [
        {
          title: 'Entrada y clasificación',
          detail: 'Cada mensaje de WhatsApp entra por webhook y se separa en texto o audio.',
          region: { x: 1.4, y: 52.6, w: 21, h: 12.3 },
        },
        {
          title: 'Audio a texto',
          detail: 'Los audios se descargan, se transcriben y se extraen sus datos.',
          region: { x: 22.8, y: 52.6, w: 19.6, h: 9.7 },
        },
        {
          title: 'Usuario en Supabase',
          detail: 'Busca al contacto, lo crea si no existe y guarda el mensaje entrante.',
          region: { x: 42, y: 33.1, w: 24.6, h: 20.8 },
        },
        {
          title: 'Agente con calendario',
          detail: 'Un agente de IA con memoria crea, consulta, mueve o borra eventos y responde por WhatsApp.',
          region: { x: 66.7, y: 33.1, w: 31.9, h: 21.4 },
        },
      ],
    },
    figures: [],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
