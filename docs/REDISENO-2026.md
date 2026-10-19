# Rediseño del portfolio — octubre 2026

Rama: `redesign/editorial-portfolio` (sin publicar). Producción sigue en `main` / commit `c07a108`.

## 1. Auditoría del sitio anterior

| Área | Hallazgo |
| --- | --- |
| Arquitectura | Una sola página de 824 líneas con datos, markup, estilos inline (`style=`, `onmouseover`) y scripts globales mezclados. |
| Posicionamiento | Centrado en consultoría de Mercado Libre; no comunicaba diseño ni desarrollo web. |
| Proyectos | Grilla de tarjetas iguales (imagen 176px + texto). Casos con afirmaciones no verificadas: Gold Vision presentado como tienda funcionando y Óptica IA con una mejora de tiempo «estimada». |
| SEO | Sin Open Graph, Twitter cards, canonical, sitemap ni robots. |
| Performance | Google Fonts por `@import` (bloqueante), PNG sin optimizar desde `/public` (hasta 590 KB), sin `width/height`, logos de terceros por hotlink. |
| Accesibilidad | Lightbox sin manejo de foco, botones de carrusel de 28px, marquee infinito sin `prefers-reduced-motion`, textos `zinc-500/600` sobre negro con contraste bajo. |
| Tema | Modo oscuro aplicado por script al final del body (parpadeo para quien elegía claro). |
| Privacidad | Imágenes publicadas con teléfono (panel Óptica) y dirección postal (sourcing). |

## 2. Herramientas usadas
- **impeccable**: contexto de producto (`PRODUCT.md`), sorteo de dirección, contrato de dirección, detector y revisión de acabado.
- **emil-design-eng**: criterios de movimiento (curvas, duraciones, feedback al presionar, reducción de movimiento).
- **web-design-guidelines**: revisión de accesibilidad y buenas prácticas.
- **Playwright + Chrome del sistema**: capturas reales desktop/mobile de cada proyecto y QA.
- **Lighthouse**: medición de performance, accesibilidad, SEO.
- No disponibles: generación de imágenes, CLI de Vercel. Canva, Gmail y Drive no se usaron.

## 3. Investigación de proyectos (estado real al 2026-10-19)
| Proyecto | Fuente | Estado | Cómo se presenta |
| --- | --- | --- | --- |
| SawDust | `D:\Proyectos\SawDust` + sitio | El rediseño sobre Ipanema está publicado en sawdust.com.ar (el HTML público incluye `sd-hero`, `sd-rubros`). La doc del repo todavía dice que producción usa «Simple»: conviene actualizarla. | Online, con enlace. |
| Médicos Digitales | `D:\Proyectos\Landing-Santi` | Terminado, dominio `medicosdigitales.org` sin activar. Capturas del build local, autorizadas por el usuario. | «Listo para publicar». |
| Gold Vision | `D:\Proyectos\Web-shopify` | Dev store de Shopify con contraseña; marca sin lanzar; la exploración en Tiendanube está fuera de servicio. Testimonios del theme son de ejemplo (no se muestran). | «En desarrollo», sin enlace. |
| Óptica Recetas AI | `D:\Proyectos\optica-recetas-ai` | MVP con número de prueba; el usuario pidió sacarlo. | Eliminado. |
| Automatización n8n | captura existente | Workflow «Calendar Agent»: WhatsApp → transcripción → Supabase → agente IA con Google Calendar. | «Prototipo». |

## 4. Dirección de arte: «Catálogo de importadora»
Cada proyecto es una ficha de catálogo: número de referencia en placa azul, nombre en grotesca expandida, especificaciones en tabla y llamadas numeradas sobre la captura real. Remite al origen comercial de Nicolás (importadora de herramientas) y obliga a mostrar evidencia concreta en vez de adjetivos.

- Paleta: papel mate `#F1F1EC`, tinta `#111`, azul de proceso `#1E3BD6` (pestañas, referencias, banda de contacto). Sin sombras ni gradientes.
- Tipografía: Archivo variable; ancho 125 % para titulares, 62–75 % para referencias y etiquetas, cifras tabulares.
- Interacción firma: señalar una llamada aísla esa zona de la captura y atenúa el resto (mouse, teclado y toque; en mobile aparece una leyenda dentro de la captura).
- Movimiento: una sola entrada (la captura se «imprime» de arriba hacia abajo al entrar en pantalla), desactivada con movimiento reducido; feedback de presión en botones.

## 5. Arquitectura nueva
Portada con índice de referencias → 4 fichas (SawDust, Médicos Digitales, Gold Vision, Agente de agenda) → Servicios (5 líneas) → Cómo trabajo (4 pasos) → Trayectoria comercial (respaldo, con anexos) → Contacto con selector de tipo de proyecto (arma el mensaje de WhatsApp; funciona sin JS) → páginas `/trabajos/<slug>/` con objetivo, participación, solución, galería y datos.

## 6. Validación
- Build sin errores; 0 errores de consola; sin scroll horizontal a 390 y 1440 px.
- Lighthouse (preview local): home mobile 95 / 100 / 100 / 100, desktop 100 / 100 / 100 / 100; CLS 0.
- Detector de impeccable: sin hallazgos.
- Peso de imágenes: p. ej. captura principal de SawDust 1,9 MB → 176 KB (WebP).

## 7. Revisión visual y segunda versión (2026-10-19)
Una crítica con dos evaluaciones independientes (diseño + detector) concluyó que la primera versión era más «ficha técnica» que «publicación premium»: 22/32 en heurísticas. Problemas principales:
- 4 fichas iguales.
- Capturas chicas.
- Exceso de rótulos.
- Los proyectos listados tres veces.
- Tres tablas seguidas en el medio.
- Home mobile de ~13.950 px.
- Ninguna imagen en el primer viewport a 1280 px.

El usuario aprobó las mejoras P1 + P2, sin sumar foto ni nota personal, y reducir la metáfora a tres gestos: pestaña REF azul, llamadas sobre la captura y banda azul de contacto.

Cambios:
- Una composición por proyecto (`layout` en `projects.ts`: `bleed`, `pair`, `product`, `ink`).
- Índice con miniaturas en lugar de la tira duplicada.
- Titular con tope de 5.5rem.
- Sin tablas de datos, sin «FIG.» y sin mayúsculas en la home.
- Trayectoria como pausa oscura con «$8M → $130M».
- Método como lista compacta.
- En mobile, la explicación de cada llamada aparece debajo de la captura al tocar el número; la lista completa vive en el caso.
- Casos con apertura a ancho completo, objetivo en grande y detalles a ancho completo.
- Menú con sección activa.
- Estados con colores distintos (online verde, listo ciruela, en desarrollo ámbar, prototipo gris).

Validación final:
- Revisión independiente: 13 correcciones resueltas en dos rondas.
- Lighthouse home: mobile 96 / 100 / 100 / 100, desktop 100 en todas las categorías; CLS 0.
- Home mobile: ~8.900 px.

Capturas en `docs/capturas/` (`revision-1280.jpg` compara las dos versiones a 1280 px).

## 8. Pendientes
- Revisar y aprobar la rama; recién ahí mergear a `main` (Vercel publica automáticamente).
- Confirmar si querés mostrar Gold Vision con capturas (hoy aparece aclarando que es una tienda de prueba).
- Cuando Médicos Digitales tenga dominio, agregar el enlace en `src/data/projects.ts`.
- Opcional: dominio propio para el portfolio (hoy `portfolio-fernicnet.vercel.app`, usado en canonical, sitemap y OG).
- Opcional: sumar otros repos (App docentes, Calculadora ML, Presupuesto Fleek, landing Hamburguesita) si tienen capturas publicables.
- Actualizar `D:\Proyectos\SawDust\CLAUDE.md` sobre qué theme está en producción.
