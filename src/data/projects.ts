import type { ImageMetadata } from 'astro';

import sdHome from '../assets/work/sawdust/home-desktop.png';
import sdHomeM from '../assets/work/sawdust/home-mobile.png';
import sdSpot from '../assets/work/sawdust/protagonista-desktop.png';
import sdSpotM from '../assets/work/sawdust/protagonista-mobile.png';
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
import mdEquipo from '../assets/work/medicos/equipo-desktop.png';
import mdRec from '../assets/work/medicos/recursos-desktop.png';
import mdCursos from '../assets/work/medicos/cursos-desktop.png';
import mdRefs from '../assets/work/medicos/referencias-desktop.png';
import mdFaq from '../assets/work/medicos/faq-desktop.png';

import gvHome from '../assets/work/goldvision/home.png';
import gvGrad from '../assets/work/goldvision/graduacion.png';
import gvRecetados from '../assets/work/goldvision/recetados.png';
import gvComoComprar from '../assets/work/goldvision/como-comprar.png';

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

export type SheetLayout = 'bleed' | 'pair' | 'product' | 'ink';

export interface Project {
  ref: string;
  /** Composition of the sheet on the home page. */
  layout: SheetLayout;
  /** Optional second image shown next to the plate (pair layout). */
  companion?: Figure;
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
    layout: 'bleed',
    slug: 'sawdust',
    name: 'SawDust',
    kind: 'Rediseño de tienda online',
    platform: 'Tiendanube',
    year: '2026',
    status: 'online',
    statusLabel: 'Online',
    statusNote: 'Theme rediseñado publicado en sawdust.com.ar desde octubre de 2026; las mejoras siguen por fases',
    summary:
      'Rediseño comercial y theme propio para una tienda polirrubro: radio control, fresas CNC, lockers, bidones flexibles y accesorios de viaje, ordenados bajo un mismo criterio.',
    goal:
      'Que un cliente entienda en segundos qué vende la marca, encuentre su rubro y compre con confianza, y que la tienda pueda sumar o destacar rubros desde el editor, sin rediseñar.',
    role: [
      'Dirección visual y sistema de diseño: color, tipografía, espaciados, cards y botones',
      'Arquitectura de rubros y navegación: menú desktop y mobile, header compacto al hacer scroll',
      'Desarrollo del theme sobre Ipanema: secciones propias, filtros, fichas y estilos en sawdust.css',
      'Actualización de la base a Ipanema 1.4.2 conservando los componentes propios',
      'QA en preview real (390 a 1440 px) antes de cada publicación',
    ],
    solution:
      'Un theme propio sobre Ipanema que respeta todo lo nativo de Tiendanube (variantes, promociones, cuotas, envíos, filtros) y suma secciones configurables desde el editor visual: hero con varios banners, rubros, producto protagonista con video, campaña destacada, descubrimiento por rubro y preguntas frecuentes. Cada cambio se prueba en un borrador y las versiones anteriores quedan congeladas para volver atrás.',
    stack: ['Tiendanube', 'Twig', 'CSS', 'JavaScript sin librerías', 'Git'],
    link: { href: 'https://www.sawdust.com.ar/', label: 'sawdust.com.ar' },
    plate: {
      src: sdHome,
      alt: 'Home de SawDust en desktop: header con buscador y menú por rubros, hero de autos a radio control y tarjetas de Radio Control, Bidones y Lockers.',
      callouts: [
        {
          title: 'Buscador protagonista y menú por rubros',
          detail: 'El buscador queda siempre a mano y el menú ordena la tienda por rubro, con Bidones y Ofertas en primer nivel. Al hacer scroll el header se compacta solo con CSS, sin saltos de layout.',
          impl: 'header.tpl · menú propio seleccionable desde el editor',
          region: { x: 5, y: 2.2, w: 90, h: 9.8 },
          pin: { x: 36, y: 3 },
        },
        {
          title: 'Hero con varios banners',
          detail: 'Slider de campañas (cuotas, envíos, nuevos ingresos) con arte distinto para desktop y mobile, para que el producto y el texto se lean bien en cada pantalla.',
          impl: 'sección sd-hero',
          region: { x: 0, y: 12, w: 100, h: 36.8 },
          pin: { x: 2, y: 13.5 },
        },
        {
          title: 'Tarjetas de rubro',
          detail: 'Los rubros principales como puerta de entrada; desde el editor se elige cuáles destacar (hoy Radio Control, Bidones y Lockers) y el encuadre de cada foto para pantallas chicas.',
          impl: 'sección sd-rubros',
          region: { x: 5, y: 55.6, w: 90, h: 40.5 },
          pin: { x: 22, y: 55.8 },
        },
      ],
    },
    figures: [
      { src: sdHomeM, alt: 'Home de SawDust en mobile con el banner vertical de autos a radio control.', caption: 'Home mobile, arte vertical propio', kind: 'mobile' },
      { src: sdSpot, alt: 'Sección de producto protagonista: bidones flexibles con texto a la izquierda y video a la derecha.', caption: 'Producto protagonista: Bidones con video', kind: 'desktop' },
      { src: sdSpotM, alt: 'Producto protagonista en mobile: texto, botón y video vertical del bidón flexible.', caption: 'Producto protagonista mobile, clip vertical', kind: 'mobile' },
      { src: sdCat, alt: 'Categoría Autos RC con filtro Tipo y precio en la barra lateral.', caption: 'Categoría con filtro «Tipo» por campo personalizado', kind: 'desktop' },
      { src: sdPdpM, alt: 'Ficha de producto de SawDust en mobile con precio, cuotas y precio por transferencia.', caption: 'Ficha de producto mobile', kind: 'mobile' },
      { src: sdDest, alt: 'Grilla de productos destacados con precio, cuotas y precio con transferencia.', caption: 'Product cards: precio, cuotas y transferencia', kind: 'desktop' },
      { src: sdCatM, alt: 'Categoría de SawDust en mobile con barra de filtrar y ordenar.', caption: 'Categoría mobile', kind: 'mobile' },
      { src: sdPdp, alt: 'Ficha de producto de SawDust en desktop con galería y selector de color.', caption: 'Ficha de producto desktop', kind: 'desktop' },
    ],
    facts: [
      { label: 'Base', value: 'Theme Ipanema 1.4.2, versión propia' },
      { label: 'Secciones propias', value: 'sd-hero, sd-rubros, producto protagonista, sd-editorial, sd-discovery y preguntas frecuentes' },
      { label: 'Rubros', value: 'Radio Control, Fresas CNC, Lockers, Bidones, Accesorios para tu viaje y más' },
      { label: 'Respaldo', value: 'Cada versión anterior del theme queda congelada para volver atrás' },
    ],
    notes: [
      'Siguen en curso, por fases: optimización de los videos de campaña en desktop, ajustes del árbol de categorías en el administrador y pruebas en iPhone real.',
    ],
  },
  {
    ref: '02',
    layout: 'pair',
    companion: { src: mdHomeM, alt: 'Hero de Médicos Digitales en mobile.', caption: 'La misma portada en el celular', kind: 'mobile' },
    slug: 'medicos-digitales',
    name: 'Médicos Digitales',
    kind: 'Sitio con CMS',
    platform: 'Next.js + Sanity',
    year: '2026',
    status: 'online',
    statusLabel: 'Online',
    statusNote: 'Publicado en Vercel; el dominio propio lo define el cliente',
    summary:
      'Sitio administrable para un campus virtual de salud digital e inteligencia artificial aplicada a la medicina, dirigido a médicos especialistas.',
    goal:
      'Explicar un modelo denso (recursos gratis → talleres → acompañamiento) a médicos con poco tiempo que llegan desde el celular, y que el cliente pueda editar los contenidos sin depender de un desarrollador.',
    role: [
      'Sistema visual editorial derivado del logo, con tokens de color, tipografía y espaciado',
      'Arquitectura de contenido: home por secciones + cursos, referencias y preguntas frecuentes',
      'Desarrollo en Next.js, React y TypeScript con CSS Modules y componentes reutilizables',
      'CMS en Sanity con Studio en español, revalidación por webhook y pruebas de edición reales',
      'Deploy en Vercel, SEO técnico, accesibilidad y QA en producción',
    ],
    solution:
      'Páginas estáticas que se regeneran al publicar: Sanity entrega los contenidos (textos de cada sección, talleres, equipo, referencias y preguntas frecuentes), un webhook firmado actualiza el sitio en segundos y, si el CMS falla, se mantiene la última versión buena. Navegación por anclas con estado activo, Studio embebido en /studio y suscripción con el formulario oficial de Substack, sin backend propio.',
    stack: ['Next.js', 'React', 'TypeScript', 'CSS Modules', 'Sanity', 'Vercel'],
    link: { href: 'https://medicos-digitales.vercel.app/', label: 'medicos-digitales.vercel.app' },
    plate: {
      src: mdHome,
      alt: 'Hero de Médicos Digitales en desktop: titular con una palabra en serif itálica, propuesta del campus y reel de fotos de especialistas.',
      callouts: [
        {
          title: 'Navegación por anclas con estado activo',
          detail: 'El menú marca la sección que se está leyendo y lleva a las páginas internas sin perder el contexto. Al volver atrás se recupera el scroll.',
          impl: 'SiteHeader · IntersectionObserver',
          region: { x: 27, y: 0, w: 53.2, h: 8 },
          pin: { x: 21, y: 1 },
        },
        {
          title: 'Titular editorial',
          detail: 'Grotesca con carácter para leer rápido y una sola palabra en serif itálica como acento. Fuentes autoalojadas.',
          impl: 'next/font · tokens.css',
          region: { x: 4, y: 25.5, w: 52, h: 27 },
          pin: { x: 47, y: 26 },
        },
        {
          title: 'Contenido editable desde Sanity',
          detail: 'Propuesta, listas y botones salen del CMS: el cliente cambia textos y destinos sin tocar el diseño, y el sitio se actualiza al publicar.',
          impl: 'Sanity Studio en /studio · webhook de revalidación',
          region: { x: 59.5, y: 11.5, w: 36.5, h: 40.5 },
          pin: { x: 89, y: 12 },
        },
        {
          title: 'Reel de la red de especialistas',
          detail: 'Fotos con recorte ajustado una por una. El movimiento se puede pausar, se detiene fuera de pantalla y queda quieto con movimiento reducido.',
          impl: 'componente HeroReel',
          region: { x: 0, y: 60, w: 100, h: 40 },
        },
      ],
    },
    figures: [
      { src: mdHomeM, alt: 'Hero de Médicos Digitales en mobile.', caption: 'Hero mobile', kind: 'mobile' },
      { src: mdComp, alt: 'Sección de competencias digitales con una cruz ámbar dividiendo cuatro áreas.', caption: 'Competencias: la cruz del logo como divisor', kind: 'desktop' },
      { src: mdEco, alt: 'Pirámide del ecosistema de servicios construida en HTML sobre fondo negro.', caption: 'Ecosistema: diagrama rehecho en HTML', kind: 'desktop' },
      { src: mdProg, alt: 'Programa Médicos Digitales con seis áreas en grilla.', caption: 'Programa educativo por áreas', kind: 'desktop' },
      { src: mdTall, alt: 'Webinars gratuitos y talleres con acompañamiento en dos columnas.', caption: 'Talleres: gratis vs. acompañamiento', kind: 'desktop' },
      { src: mdEquipo, alt: 'Sección Quiénes somos con la foto y la trayectoria del director del campus.', caption: 'Equipo y especialistas', kind: 'desktop' },
      { src: mdRec, alt: 'Recursos gratuitos y bloque de suscripción con el formulario de Substack.', caption: 'Recursos + suscripción con Substack', kind: 'desktop' },
      { src: mdCursos, alt: 'Página interna de cursos y seminarios con índice por tipo de taller.', caption: 'Página interna /cursos', kind: 'desktop' },
      { src: mdRefs, alt: 'Página de referencias y evidencia con publicaciones numeradas.', caption: 'Página interna /referencias', kind: 'desktop' },
      { src: mdFaq, alt: 'Página de preguntas frecuentes con acordeones y contacto.', caption: 'Página interna /preguntas-frecuentes', kind: 'desktop' },
    ],
    facts: [
      { label: 'CMS', value: 'Sanity: textos por sección, talleres, equipo, referencias y preguntas frecuentes' },
      { label: 'Lighthouse mobile', value: 'Rendimiento 95–97 · Accesibilidad, buenas prácticas y SEO 100' },
      { label: 'Lighthouse desktop', value: '100 en las cuatro categorías' },
      { label: 'Medición', value: 'Durante el desarrollo, sobre el build de producción: mediana de 3 corridas por ruta. No es un monitoreo del sitio publicado' },
      { label: 'Accesibilidad', value: 'axe-core sin violaciones en las 4 rutas, a 1440 y 390 px' },
    ],
  },
  {
    ref: '03',
    layout: 'product',
    slug: 'gold-vision',
    name: 'Gold Vision',
    kind: 'Tienda online',
    platform: 'Shopify',
    year: '2026',
    status: 'online',
    statusLabel: 'Online',
    statusNote: 'Entregada al cliente, que la administra en su plan Shopify Basic',
    summary:
      'Tienda de óptica diseñada y desarrollada sobre Shopify: anteojos de vista y cristales graduados, con una estética minimalista y premium. Entregada al cliente, que hoy la administra.',
    goal:
      'Vender anteojos con receta online: que el cliente elija armazón y cristales, y que los datos de graduación lleguen con el pedido en vez de tomarse solo en el local.',
    role: [
      'Evaluación de Tiendanube y prototipo visual navegable aprobado antes de programar',
      'Theme Online Store 2.0 sobre Dawn con secciones propias en Liquid y CSS',
      'Arquitectura comercial: catálogo por categorías, variantes de color, navegación y footer',
      'Flujo de cristales graduados: carga por ojo o receta adjunta',
      'Configuración de la tienda y traspaso al cliente en Shopify Basic',
    ],
    solution:
      'Secciones propias editables desde el personalizador (hero por slides con encuadre configurable, grilla de categorías, más vendidos, bloque editorial, cómo comprar con receta y footer), variantes de color reales con stock propio, carrito y checkout nativos y filtros de colección nativos. La ficha de cristales pide la graduación por ojo o la receta en foto: los datos viajan con el pedido y se ven en el Admin sin apps.',
    stack: ['Shopify', 'Liquid', 'Dawn', 'CSS', 'JavaScript'],
    plate: {
      src: gvHome,
      alt: 'Home de Gold Vision en desktop: menú con Anteojos de Vista y Cristales, hero de cristales graduados, franja de beneficios y grilla de dos categorías.',
      callouts: [
        {
          title: 'Navegación priorizada',
          detail: 'El menú y la home llevan a lo que más se vende: Anteojos de Vista y Cristales. Lentes de contacto salió de la navegación destacada.',
          impl: 'gv-header · menú principal',
          region: { x: 39.5, y: 2.6, w: 23, h: 6.4 },
          pin: { x: 33, y: 3.4 },
        },
        {
          title: 'Hero por slides con encuadre configurable',
          detail: 'Cada slide define desde el personalizador dónde se centra la foto y el tamaño del bloque, para que el producto no se recorte.',
          impl: 'sección gv-hero-slider',
          region: { x: 0, y: 8.8, w: 100, h: 39 },
          pin: { x: 40, y: 10 },
        },
        {
          title: 'Grilla de categorías',
          detail: 'Las categorías protagonistas en formato 1:1, el mismo de las fotos de producto, para que ninguna imagen se deforme.',
          impl: 'sección gv-category-grid',
          region: { x: 22.7, y: 63.7, w: 54.6, h: 32.3 },
        },
      ],
    },
    figures: [
      { src: gvGrad, alt: 'Formulario de graduación en mobile: opción de graduación estándar, carga de valores o receta, esquema de ojo derecho e izquierdo y campos de esfera y cilindro.', caption: 'Carga de graduación por ojo en la ficha de cristales', kind: 'detail' },
      { src: gvRecetados, alt: 'Bloque editorial oscuro con foto de anteojos al atardecer y el título Tu receta, tu estilo.', caption: 'Bloque editorial de anteojos de vista', kind: 'desktop' },
      { src: gvComoComprar, alt: 'Sección Comprá tus anteojos con receta en cuatro pasos con íconos.', caption: 'Cómo comprar con receta, en cuatro pasos', kind: 'desktop' },
    ],
    facts: [
      { label: 'Base', value: 'Dawn (Online Store 2.0) con secciones propias gv-*' },
      { label: 'Catálogo', value: 'Anteojos de vista con variantes de color y cristales graduados' },
    ],
    notes: [
      'Los mensajes de cuotas y transferencia quedan apagados con una opción del tema hasta que se confirmen las condiciones de la pasarela de pagos.',
      'La carga del catálogo de cristales y la fotografía de producto siguen a cargo del cliente.',
    ],
  },
  {
    ref: '04',
    layout: 'ink',
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
