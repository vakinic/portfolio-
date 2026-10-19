# Portfolio — Nicolás Ferreira

Sitio personal: catálogo de trabajos de diseño y desarrollo web, e-commerce y automatizaciones.
Producción: https://portfolio-fernicnet.vercel.app (deploy automático de `main` en Vercel).

## Stack
- Astro 6 (sitio estático) + Tailwind CSS 4 (solo reset y utilidades; el diseño vive en CSS con tokens)
- Tipografía Archivo variable autoalojada (`@fontsource-variable/archivo`, ejes de peso y ancho)
- Imágenes optimizadas por `astro:assets` (WebP responsive)

## Estructura
```
src/
  data/projects.ts     ← contenido de cada proyecto (texto, estado, capturas, llamadas)
  data/site.ts         ← datos de contacto, navegación, metadatos
  components/          ← Cover, ProjectSheet, Plate, CalloutList, Services, Method, Track, Contact…
  pages/index.astro    ← home
  pages/trabajos/[slug].astro ← caso de estudio (se genera para cada proyecto con capturas)
  scripts/             ← interacción de llamadas y aparición de capturas
  styles/global.css    ← tokens (color, tipografía, espacios) y átomos compartidos
  assets/work/         ← capturas reales por proyecto
```

## Sumar o editar un proyecto
1. Guardá las capturas en `src/assets/work/<slug>/`.
2. Agregá el objeto en `src/data/projects.ts`. Las llamadas numeradas (`callouts`) usan coordenadas en % de la captura principal (`region`), y opcionalmente `pin` para mover el número.
3. Indicá el estado real (`online`, `listo`, `desarrollo`, `prototipo`). No publicar métricas ni testimonios que no estén medidos.

## Comandos
| Comando | Acción |
| --- | --- |
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local en `localhost:4321` |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Sirve el build localmente |

## Documentación de diseño
- `PRODUCT.md`: audiencia, posicionamiento, evidencia disponible y reglas de veracidad.
- `DESIGN.md`: sistema visual («Catálogo de importadora»).
- `docs/REDISENO-2026.md`: auditoría, decisiones y pendientes del rediseño.
