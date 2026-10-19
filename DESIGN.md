---
name: Nicolás Ferreira — Portfolio
description: Catálogo de importadora de tiendas, sitios y automatizaciones que venden.
colors:
  paper: "#f1f1ec"
  paper-2: "#e3e3dc"
  surface: "#fbfbf8"
  ink: "#111111"
  ink-2: "#45453f"
  ink-3: "#62625b"
  line: "rgb(17 17 17 / 0.16)"
  line-strong: "#111111"
  blue: "#1e3bd6"
  blue-deep: "#1429a3"
  blue-wash: "#dfe4fa"
  on-blue: "#f1f1ec"
  on-blue-2: "#c9d1f7"
  ok: "#136b31"
  warn: "#9a5800"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 0.55rem + 7vw, 6rem)"
    fontWeight: 760
    lineHeight: 0.92
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.2rem + 2.4vw, 3rem)"
    fontWeight: 720
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.05rem + 0.7vw, 1.625rem)"
    fontWeight: 720
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  lead:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.02rem + 0.45vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'tnum'"
  small:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 620
    lineHeight: 1.3
    letterSpacing: "0.04em"
    fontVariation: "'wdth' 75"
  ref-numeral:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 760
    lineHeight: 1
    fontVariation: "'wdth' 62"
rounded:
  none: "0"
spacing:
  gutter: "clamp(1rem, 0.4rem + 2.6vw, 2.5rem)"
  max: "90rem"
  header-h: "3.5rem"
  section: "clamp(5rem, 3rem + 6vw, 10rem)"
  mount: "0.6rem"
components:
  button-blue:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.on-blue}"
    typography: "{typography.small}"
    rounded: "{rounded.none}"
    padding: "0 1.4rem"
    height: "3rem"
  button-blue-hover:
    backgroundColor: "{colors.blue-deep}"
    textColor: "{colors.on-blue}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 1.4rem"
    height: "3rem"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.blue}"
    rounded: "{rounded.none}"
    padding: "0 1.4rem"
    height: "3rem"
  ref-tab:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.on-blue}"
    typography: "{typography.ref-numeral}"
    rounded: "{rounded.none}"
    width: "3.25rem"
  callout-marker:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.on-blue}"
    typography: "{typography.ref-numeral}"
    rounded: "{rounded.none}"
    size: "2rem"
  callout-marker-active:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.blue}"
  plate-mount:
    backgroundColor: "{colors.paper-2}"
    rounded: "{rounded.none}"
    padding: "{spacing.mount}"
  contact-option:
    backgroundColor: "transparent"
    textColor: "{colors.on-blue}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1rem"
    height: "3.5rem"
  contact-option-checked:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.blue}"
---

# Design System: Nicolás Ferreira — Portfolio

## Overview

**Creative North Star: "Catálogo de importadora"**

El portfolio se lee como el catálogo impreso de una importadora de herramientas: cada trabajo es una ficha con número de referencia, una captura real montada como placa, una tabla de especificaciones y llamadas numeradas que señalan qué se construyó. Papel mate frío, tinta casi negra y un único azul de proceso que marca todo lo que es índice, referencia o acción. Nada flota: la jerarquía sale de filetes, escala tipográfica y ancho variable de Archivo.

La densidad es de catálogo, no de landing: tablas regladas, etiquetas condensadas en mayúsculas, cifras tabulares, y al lado un titular expandido enorme. El contraste entre palabra gigante y etiqueta mínima es el gesto principal. Las capturas siempre son reales y siempre aparecen montadas sobre gris de catálogo con un filete de tinta, como una lámina pegada en la página.

Rechazos confirmados por el build: grilla de tarjetas iguales con imagen + título + tags, esquinas redondeadas, sombras de elevación y gradientes decorativos.

**Key Characteristics:**
- Papel mate frío + tinta + un azul de proceso; sin segundo acento de marca.
- Archivo variable usado por ancho: 62 % para números REF, 75 % para etiquetas, 112–125 % para titulares.
- Filetes de 1 px (tinta al 16 %) y de 2 px en tinta plena como cabecera de cada tabla o ficha.
- Esquinas rectas en todo, sin excepción.
- Capturas reales montadas en placas sobre `paper-2`, con llamadas numeradas interactivas.

## Colors

Una paleta de imprenta: papel, tinta en tres pesos y un azul de proceso saturado que carga todo el significado de "referencia" y "acción".

### Primary
- **Azul de proceso** (`blue`): pestañas del índice, cuadro REF de cada ficha, marcadores y números de llamadas, botón principal, banda de contacto, color de selección y anillo de foco. Es el único color de marca.
- **Azul de proceso profundo** (`blue-deep`): hover del botón azul. Sólo estado.
- **Lavado azul** (`blue-wash`): tinte claro disponible en tokens; uso marginal.
- **Papel sobre azul** (`on-blue`) y **azul pálido sobre azul** (`on-blue-2`): texto y etiquetas secundarias dentro de superficies azules (cuadro REF, banda de contacto).

### Neutral
- **Papel mate frío** (`paper`): fondo de página, header translúcido y texto de botones tinta.
- **Gris de catálogo** (`paper-2`): fondo de montaje de toda placa o figura de captura.
- **Papel claro** (`surface`): superficie más clara disponible; uso marginal.
- **Tinta** (`ink` / `line-strong`): texto principal, filetes de cabecera de 2 px, contorno de placas, botón tinta y caption móvil de llamadas.
- **Tinta media** (`ink-2`): bajadas, descripciones y texto de apoyo.
- **Tinta suave** (`ink-3`): `dt` de tablas, cabeceras de columna, captions de figuras.
- **Filete** (`line`): divisores de fila de 1 px en tablas, índice y header.

### Estados (semánticos)
- **Verde operativo** (`ok`): estado "Online". Oscurecido para cumplir AA sobre papel.
- **Ámbar de taller** (`warn`): estado "En desarrollo".
- Los estados "Listo para publicar" y "Prototipo" usan `blue` e `ink-3`.

### Named Rules
**The Process Blue Rule.** El azul sólo marca referencia, llamada o acción (REF, número de llamada, CTA, contacto, foco). Nunca es decoración ni fondo de sección fuera de la banda de contacto.

**The Real Status Rule.** Todo proyecto muestra su estado real con un punto de color + etiqueta; el color del estado nunca se usa para otra cosa.

## Typography

**Display Font:** Archivo Variable (con Archivo, system-ui, sans-serif)
**Body Font:** Archivo Variable, la misma familia
**Label/Mono Font:** Archivo Variable a ancho condensado; no hay monoespaciada

**Character:** Una sola familia grotesca que cambia de voz por el eje de ancho: expandida y pesada para nombrar, condensada y en mayúsculas para catalogar. Cifras tabulares en todo el cuerpo.

### Hierarchy
- **Display** (760, ancho 125 %, `clamp(2.125rem → 6rem)`, interlínea 0.92, tracking −0.04em): titular de portada, nombre del proyecto en cada ficha y título de contacto. Por debajo de 30rem el ancho baja a 104 % (`--display-stretch`) para que las palabras largas entren.
- **Headline** (720, ancho 112 %, `clamp(1.875rem → 3rem)`, interlínea 1, −0.03em, `text-wrap: balance`): títulos de sección.
- **Title** (700–720, ancho 105–112 %, 1.1875–1.625rem): nombres en índice, servicios, pasos del método, menú móvil.
- **Lead** (400, `clamp(1.125rem → 1.375rem)`, 1.45, máx. 46–52ch): bajadas de portada y ficha.
- **Body** (400, 1.0625rem, 1.55, máx. ~60ch): texto corrido.
- **Small** (400, 0.9375rem): detalles de llamadas, specs, footer, botones.
- **Label** (620, ancho 75 %, 0.8125rem, +0.04em, MAYÚSCULAS): cabeceras de columna, `dt`, captions "Fig." y "Anexo", estados, tira de edición.
- **Numeral REF** (760–780, ancho 62 %, 1.125rem en marcadores hasta 4.25rem en el cuadro REF): números de referencia, llamadas y pasos.

### Named Rules
**The Width Axis Rule.** La jerarquía se arma con el eje de ancho, no con familias nuevas: 62 % números, 75 % etiquetas, 100 % cuerpo, 112 % títulos, 125 % display.

**The Giant/Tiny Rule.** El display siempre convive con etiquetas mínimas condensadas; no hay tamaños intermedios decorativos entre ambos extremos.

## Layout

Contenedor único de 90rem máx. con gutter fluido (`clamp(1rem → 2.5rem)`). Grilla de 12 columnas implícita desde 64rem: portada 6/6, ficha 8/4 (placa + aside sticky bajo el header), contacto 6/4/2.5, método en cuatro columnas regladas 3/4/2.5/2.5. Breakpoints observados: 30rem (móvil chico), 48rem (nav completa), 64rem (layouts de columnas).

Ritmo vertical: secciones separadas por `clamp(5rem → 10rem)`; fichas por `clamp(4rem → 8rem)`. Dentro de tablas, filas de 0.7–1.5rem de padding vertical. Header sticky de 3.5rem con `scroll-padding-top` acompañando.

En móvil las filas de placas y figuras se convierten en carriles horizontales con scroll-snap (`min(64vw, 18rem)` a `min(78vw, 20rem)` por ítem); en desktop vuelven a grilla de 4. Las tablas apilan columnas y muestran la clave de cada celda como etiqueta.

## Elevation & Depth

Sistema plano. La profundidad se comunica por montaje (gris de catálogo detrás de la captura), por contorno de tinta de 1 px y por filetes. No hay sombras de elevación.

La única `box-shadow` del sistema es funcional: el velo que oscurece la captura alrededor de la zona señalada al activar una llamada.

### Shadow Vocabulary
- **Velo de llamada** (`box-shadow: 0 0 0 200vmax rgb(17 17 17 / 0.55)`): aísla la región de la captura que corresponde a la llamada activa. Sólo en placas, sólo como estado.

### Named Rules
**The Mounted Plate Rule.** Toda captura real va montada: fondo `paper-2`, contorno de tinta de 1 px y caption en etiqueta debajo. Nunca una captura suelta sobre el papel.

**The Ruled Table Rule.** Toda lista de datos abre con un filete de tinta de 2 px y separa filas con filetes de 1 px al 16 %. Las tablas no llevan fondos de fila ni cajas.

## Shapes

Esquinas rectas en todo (radio 0): botones, pestañas, marcadores, placas, opciones de contacto. La única forma redonda es el punto de estado (0.5rem). Los cuadrados son la silueta recurrente: cuadro REF de la ficha (relación 1:1, 4.25–7rem), marcadores de llamada de 2rem, pestaña de "siguiente trabajo". Los bordes son contornos de 1 px (`outline`) o filetes; nunca bordes gruesos decorativos.

## Components

### Buttons
Rectangulares, firmes, sin adornos.
- **Shape:** esquinas rectas (0), alto mínimo 3rem, padding horizontal 1.4rem, ancho de letra 92 %, peso 640.
- **Primary (azul):** fondo azul de proceso, texto papel. Hover: azul profundo.
- **Line:** contorno de tinta de 1 px sobre transparente; hover invierte a tinta plena con texto papel.
- **Paper:** fondo papel, texto azul; para usar sobre la banda azul.
- **Ink:** fondo tinta, texto papel (variante disponible).
- **Hover / Focus / Active:** transición de color 160ms; `:active` escala 0.97; foco con contorno azul de 2 px separado 3 px (en contacto, contorno papel). Hovers sólo con puntero fino.

### Chips (estado)
- **Style:** punto de 0.5rem en `currentColor` + etiqueta condensada en mayúsculas, sin fondo ni borde.
- **State:** online (verde), listo (azul), desarrollo (ámbar), prototipo (tinta suave).

### Cards / Containers
No hay tarjetas. Los contenedores son tablas regladas (spec, trayectoria, datos del caso, método) y placas montadas.
- **Corner Style:** recto.
- **Background:** papel; placas sobre `paper-2`.
- **Shadow Strategy:** ninguna (ver Elevation & Depth).
- **Border:** filete superior de 2 px tinta, filas con filete de 1 px.
- **Internal Padding:** montaje 0.6rem (placa de ficha fluida hasta 1.75rem).

### Inputs / Fields
- **Style:** el único formulario es la elección de tipo de proyecto en contacto: opciones radio como bloques rectos de 3.5rem con contorno papel al 50 % sobre azul.
- **Focus:** contorno papel de 2 px separado 3 px.
- **Checked:** se invierte a fondo papel con texto azul.

### Navigation
- **Header:** sticky, papel al 94 % con blur de 8px y filete inferior. Nombre en 760 / ancho 80 %. Enlaces en small 520, tinta media; hover pasa a tinta y dibuja un subrayado de 1 px que crece de izquierda a derecha (220ms). CTA azul compacto de 2.5rem.
- **Móvil (<48rem):** toggle cuadrado de 2.75rem con contorno de filete; abre una hoja con filas regladas de 3.5rem, texto 1.5rem ancho 112 % y flecha azul.

### Índice REF (signature)
Lista numerada con cabecera de columnas en etiqueta (Ref. / Trabajo / Estado), filete de 2 px arriba y filas de 4rem. Cada fila abre con una pestaña azul que ocupa todo el alto con el número REF condensado; hover la vuelve tinta y subraya el nombre.

### Cabecera de ficha (signature)
Filete de 2 px tinta, cuadro REF azul 1:1 con "Ref." en azul pálido y número gigante condensado, nombre del proyecto en display y a la derecha una tabla de metadatos de 2×2 (4 columnas en tablet).

### Placa con llamadas (signature)
Captura real montada en `paper-2` con contorno de tinta. Marcadores cuadrados azules numerados sobre la imagen; al activarlos (o su fila en la lista de llamadas) la región se aísla con el velo y el marcador se invierte a papel/azul. En móvil una caption de tinta sube desde abajo (240ms) con el texto de la llamada. Debajo, fila "Fig. NN.0" en etiqueta, con la indicación de interacción en azul. La lista de llamadas al costado usa números con contorno azul que se rellenan al activarse.

### Banda de contacto
Única superficie azul de sección: display en papel, opciones de tipo de proyecto, botón papel de ancho completo y enlaces alternativos con filetes papel al 35 %.

## Do's and Don'ts

### Do:
- **Do** montar toda captura real sobre `paper-2` con contorno de tinta de 1 px y caption "Fig." en etiqueta.
- **Do** abrir cada tabla, índice o ficha con un filete de tinta de 2 px y separar filas con filetes `line` de 1 px.
- **Do** usar el eje de ancho de Archivo para jerarquía: 62 % números REF, 75 % etiquetas, 112–125 % titulares.
- **Do** reservar el azul de proceso para referencia, llamada, acción y foco.
- **Do** mostrar el estado real de cada proyecto con punto + etiqueta en su color semántico.
- **Do** mantener hovers detrás de `(hover: hover) and (pointer: fine)` y respetar `prefers-reduced-motion`.
- **Do** bajar el ancho del display a 104 % por debajo de 30rem.

### Don't:
- **Don't** usar grillas de tarjetas iguales con imagen + título + tags.
- **Don't** redondear esquinas; el único círculo es el punto de estado.
- **Don't** usar sombras de elevación ni gradientes decorativos; el velo de llamada es la única sombra y es un estado.
- **Don't** sumar un segundo color de acento ni usar `ok`/`warn` fuera de los estados.
- **Don't** poner etiquetas tipo kicker o eyebrow encima de los títulos; la etiqueta vive en cabeceras de columna, `dt` y captions.
- **Don't** mostrar capturas sin montar ni usar imágenes que no sean del trabajo real.
