# Portfolio — Pablo Cumbrera Gómez

Sitio estático. No necesita compilación ni dependencias: se sube tal cual.

## Publicar en GitHub Pages

1. Crea un repositorio **público** llamado exactamente `pablocumbrera.github.io`
   (ese nombre exacto es lo que hace que la web quede en la raíz del dominio).
2. Sube **el contenido de esta carpeta**, no la carpeta en sí. En la raíz del
   repositorio tienen que quedar `index.html`, `assets/`, `og/`, etc.
3. Settings → Pages → Source: `Deploy from a branch`, rama `main`, carpeta `/ (root)`.
4. En 1-2 minutos está en https://kumbrera.github.io/pablocumbrera

## Si el repositorio se llama de otra forma

La web funciona igual (las rutas internas son relativas), pero las etiquetas
`og:url`, `og:image` y `canonical` apuntarán a la dirección equivocada y las
vistas previas de LinkedIn saldrán rotas. Busca y reemplaza en los cuatro
`index.html`:

    https://kumbrera.github.io/pablocumbrera   →   tu URL real

## Estructura

    index.html              portada
    step/                   caso STEP Xperience
    marketsnap/             caso MarketSnap
    prospector/             caso Sales Intelligence Platform
    assets/site.css         estilos
    assets/app.js           idioma + nav
    assets/img/             capturas y GIFs
    og/                     imágenes de vista previa para redes (1200x630)
    cv-pablo-cumbrera.pdf   CV descargable
    informe-step-portfolio.pdf  informe completo del caso STEP
    sitemap.xml, robots.txt, .nojekyll

## Cuando pongas dominio propio

Añade un archivo `CNAME` en la raíz con una sola línea (`pablocumbrera.com`),
configúralo en Settings → Pages → Custom domain, y haz el reemplazo de URL
de arriba.
