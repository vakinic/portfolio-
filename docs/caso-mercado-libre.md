# Caso de estudio: canal de Mercado Libre — recopilación de información

Documento interno, **no se publica**. La página `/trabajos/mercado-libre/` se construye solo cuando
cada sección tenga información real y verificable. Si una sección queda sin datos, se omite: no se
publica con textos de relleno.

Leyenda: ✅ verificado · ⏳ pendiente de validar · ❓ falta el dato

---

## 1. Datos ya verificados

| Dato | Fuente | Estado |
| --- | --- | --- |
| Más de 5 años gestionando el canal | Confirmado por Nicolás (2026-10-19) | ✅ |
| Rubro: importadora de herramientas | Texto publicado, confirmado | ✅ |
| MercadoLíder Platinum | Captura de perfil de vendedor y de reputación | ✅ |
| +10.000 ventas en la cuenta | Captura de perfil de vendedor («+10mil Ventas») | ✅ |
| Reputación en 60 días: 2.851 ventas, reclamos 0,45 %, mediaciones 0 %, cancelaciones 0,38 % | `src/assets/trayectoria/reputacion.png` | ✅ (falta la fecha de la captura) |
| ROAS de 13× alcanzado en Product Ads | Captura del panel de Mercado Ads, 15/11 al 14/12/2025: inversión $450.000,61, ingresos $6.204.003,37 (13,8×), 224 ventas, 788.570 impresiones, 2.631 clics | ✅ para ese período; no es un promedio |
| Amazon Seller Central, envíos FBA, sourcing desde China | Texto publicado, confirmado | ✅ |

Capturas disponibles en el historial de git (commit `9a604e3^`), no publicadas hoy:
`src/assets/trayectoria/publicidad.png`, `perfil-vendedor.jpg`, `amazon.png`.
Antes de usarlas: confirmar que no muestran nombre de la empresa, datos personales ni información sensible.

## 2. Datos pendientes de validar

| # | Pregunta | Para qué se usa |
| --- | --- | --- |
| 1 | Facturación mensual $8M → $130M: ¿mes/año de inicio y del pico? | Volver a mostrar la cifra (hoy oculta en `Track.astro`, `revenue.show = false`) |
| 2 | ¿Son pesos nominales? ¿Tenés el equivalente en dólares o en unidades vendidas para el mismo período? | Contextualizar la evolución frente a la inflación |
| 3 | ¿Qué factores además de tu gestión influyeron (inversión, ampliación de catálogo, contexto de mercado)? | Redactar el resultado sin atribuírtelo en exclusiva |
| 4 | Fecha de la captura de reputación | Leyenda de la captura |
| 5 | ¿Se puede publicar el período del ROAS (15/11 al 14/12/2025)? | Ya figura en la home; confirmar que no es confidencial |
| 6 | Seguidores (+1.000), productos activos (+500), «Tienda oficial»: ¿siguen vigentes y se pueden publicar? | Contexto de la cuenta |
| 7 | ¿Gestionaste cuentas de Mercado Libre de otros clientes o solo la de la importadora? | Cómo se redacta «gestiono» en Servicios |
| 8 | Modalidad comercial que querés ofrecer: gestión mensual, auditoría puntual, ambas | Texto de Servicios y Metodología |

## 3. Estructura del caso (completar)

### Contexto del negocio ❓
- Tipo de empresa y catálogo (sin nombre ni datos confidenciales).
- Situación del canal cuando empezaste: ¿qué funcionaba y qué no?

### Mi rol y responsabilidades ❓
- Cargo.
- ¿Coordinabas personas? ¿Cuántas y en qué tareas?
- Qué decisiones dependían de vos (precios, promociones, inversión en publicidad, compras, catálogo) y cuáles no.

### Gestión comercial y operativa ❓
- Rutina: preguntas, reclamos, stock, despachos, reputación.
- Herramientas usadas (planillas, integraciones, reportes).

### Optimización de publicaciones ❓
- Dos o tres acciones concretas (títulos, fichas técnicas, fotos, variantes, catálogo, precios).
- ¿Hay alguna mejora medida que se pueda mostrar?

### Estrategias publicitarias ❓
- Cómo armabas y ajustabas las campañas de Product Ads.
- Datos verificados: ROAS de 13× en el período 15/11 al 14/12/2025 (✅).

### Evolución de resultados ⏳
- +10.000 ventas, MercadoLíder Platinum (✅).
- Facturación con período y aclaración de valores nominales (⏳ preguntas 1–3).

### Aprendizajes ❓
- Uno o dos aprendizajes que hoy apliques con clientes.

## 4. Implementación cuando esté completo

- Página estática `src/pages/trabajos/mercado-libre.astro` con el mismo patrón visual de los otros casos
  (migas «Proyectos / Mercado Libre», intro, brief, galería de capturas).
- Sumarla al sitemap (`src/pages/sitemap.xml.ts`).
- Enlazarla desde la sección Experiencia y desde el servicio «Gestión y optimización de marketplaces».
