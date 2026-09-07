# Wuhu Motors

Landing page del concesionario oficial Chery **Wuhu Motors** (Argentina), inspirada en el
diseño de [chery.com.ar](https://chery.com.ar/) y adaptada al contenido de un concesionario.

## Stack

- React 19 + Vite 8
- CSS puro (sin frameworks), variables CSS para theming
- Sin backend: el formulario de contacto es solo de UI (falta conectar a un servicio de envío)

## Estructura

```
src/
  assets/            logo de Wuhu Motors
  components/         un componente + su CSS por sección
    Header            nav fijo con logo y menú responsive
    Hero               portada
    ModelsCarousel     carrusel de modelos Chery (Tiggo/Arrizo)
    HybridFeature      sección destacada de tecnología híbrida
    Nosotros           info del concesionario (reemplaza "Concesionarios" del sitio oficial)
    Posventa           servicios de posventa
    Contact            formulario + datos de contacto
    Footer
  data/models.js      datos de los modelos (nombre, motor, medidas)
  App.jsx             ensambla todas las secciones en una sola página (home)
  index.css           reset + estilos globales + variables de color
```

## Pendiente / a completar

- Reemplazar los `models.js` con datos reales confirmados por Wuhu Motors si difieren de cherysva.com.ar
- Completar dirección, teléfono y horarios reales (hoy dicen "a confirmar")
- Sumar fotos reales de los vehículos en `src/assets/` (hoy las tarjetas de modelos usan un fondo de color en vez de fotos)
- Conectar el formulario de contacto a un servicio real (email, CRM, WhatsApp, etc.)
- Reemplazar los íconos de redes sociales (hoy son texto FB/IG/YT/IN) por SVGs y linkear las cuentas reales

## Cómo correr el proyecto

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción en /dist
npm run preview  # previsualizar el build
```
