# Nhexos — SaaS & AI Hub

Landing page estática, editable y adaptable a móvil. Sin instalación, dependencias externas ni compilación.

## Abrir

1. Extrae todo el ZIP.
2. Abre `nhexos-landing/index.html` en Chrome, Edge, Firefox o Safari.
3. Mantén `index.html`, `styles.css`, `script.js` y `favicon.svg` en la misma carpeta.

## Publicar en tu hosting

Sube esos cuatro archivos al directorio público del hosting. Para un servicio de publicación estática, selecciona la carpeta que contiene `index.html`. La conexión de `nhexos.tech` depende del proveedor elegido; usa únicamente los registros DNS que ese proveedor indique y conserva los registros MX/TXT del enrutamiento de correo.

## Editar

- Textos y secciones: `index.html`.
- Colores, tipografía y responsive: `styles.css`.
- Interacciones y dirección de contacto: `script.js` (`CONTACT_EMAIL`).
- Si cambias el correo, actualiza también los enlaces del HTML.

## Qué funciona

- Navegación a servicios, producto, precios y FAQ.
- Tres vistas del diagrama de servicios.
- Recorrido interactivo de los hitos del proyecto.
- FAQ desplegable accesible mediante teclado.
- Formulario que prepara un correo: el visitante debe enviarlo desde su aplicación de correo. No hay backend, base de datos ni envío automático. No se almacenan solicitudes.

## Contenido a confirmar antes de hacerlo público

Se conservaron los textos solicitados sobre Claude 3.5 Sonnet, MCP y modelos de Anthropic. Estas menciones describen la oferta; este paquete es una landing y no incorpora una integración de IA. Confirma que los modelos, integraciones y servicios descritos corresponden al producto real antes de publicarlo. El texto no implica asociación, certificación o aprobación de Anthropic.

La dirección `contact@nhexos.tech` se usa como punto de partida; confirma que es tu dirección activa.

No se incluyeron logos de clientes, testimonios, fotos ni métricas inventadas. La franja muestra tecnologías, no clientes. El área de confianza explica el proceso de trabajo, no casos de éxito. Sustituye o amplía estas áreas cuando tengas evidencia real y permiso de uso.

Los precios son cotizaciones por alcance: no se inventaron tarifas, garantías, plazos, políticas de cancelación ni acuerdos de soporte. Confirma estas condiciones para tu negocio.

La vista de producto es una interfaz conceptual, claramente marcada como ilustrativa. No representa un producto desplegado ni una captura de una aplicación existente.

## Validación

Se verificaron sintaxis JavaScript, referencias a archivos locales, navegación interna, textos pedidos e integridad del ZIP. No se realizó prueba visual en navegador.
