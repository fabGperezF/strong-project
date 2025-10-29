# 🏋️ Sitio Web Fitness Profesional

Sitio web de presentación profesional para coaches de fitness, basado en el diseño de Jeff Nippard, con esquema de colores blanco/negro elegante.

## 🚀 Inicio Rápido

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en: `http://localhost:8080`

## 📋 Estructura del Proyecto

```
src/
├── assets/           # Imágenes (hero, transformaciones, productos)
├── components/       # Componentes reutilizables
│   ├── ui/          # Componentes de UI base (shadcn)
│   ├── Navbar.tsx   # Navegación principal
│   ├── Footer.tsx   # Pie de página
│   ├── WhatsAppButton.tsx  # Botón flotante WhatsApp
│   ├── ProductCard.tsx     # Tarjetas de productos
│   └── TransformationCard.tsx  # Tarjetas antes/después
├── pages/           # Páginas del sitio
│   ├── Index.tsx    # Página principal
│   ├── About.tsx    # Sobre mí
│   ├── Sponsors.tsx # Patrocinadores
│   └── Contact.tsx  # Contacto
└── index.css        # Estilos globales y sistema de diseño
```

## 📝 Personalización

### ⚠️ IMPORTANTE: Lee el archivo `INSTRUCCIONES.md` para una guía completa

### Configuraciones Rápidas

1. **WhatsApp**: `src/components/WhatsAppButton.tsx` línea 9
2. **Redes Sociales**: `src/pages/Index.tsx` líneas 16-19
3. **Logo/Marca**: `src/components/Navbar.tsx` línea 43
4. **Contenido Hero**: `src/pages/Index.tsx` líneas 38-41

## 🎨 Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Esquema de colores blanco/negro profesional
- ✅ Navegación multi-página (Home, About, Sponsors, Contact)
- ✅ Integración WhatsApp flotante
- ✅ Sección de productos/programas (sin compra directa)
- ✅ Galería de transformaciones antes/después
- ✅ Enlaces a redes sociales (Instagram, TikTok)
- ✅ Formulario de contacto
- ✅ SEO optimizado
- ✅ Animaciones suaves y elegantes

## 📦 Tecnologías

- **React** - Framework de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **shadcn/ui** - Componentes de UI
- **React Router** - Navegación
- **Vite** - Build tool
- **Lucide React** - Iconos

## 📱 Páginas Incluidas

1. **Home** (`/`)
   - Hero section impactante
   - Testimonio destacado
   - Programas/productos destacados
   - Transformaciones de alumnos
   - Enlaces a redes sociales

2. **About** (`/about`)
   - Tu historia y filosofía
   - Certificaciones
   - Valores fundamentales
   - Estadísticas de impacto

3. **Sponsors** (`/sponsors`)
   - Video de YouTube embebido
   - Galería de patrocinadores
   - Call-to-action para colaboraciones

4. **Contact** (`/contact`)
   - Formulario de contacto por email
   - Información de contacto directa
   - Horarios de atención
   - Preguntas frecuentes

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## 📸 Imágenes a Reemplazar

Todas las imágenes están en `src/assets/`:

- `hero-image.jpg` - Imagen principal del hero (1920x1080px)
- `transformation-before.jpg` - Foto "antes" (800x800px)
- `transformation-after.jpg` - Foto "después" (800x800px)  
- `product-placeholder.jpg` - Portada de programas (800x800px)

## 🚀 Deployment

### Opción 1: Lovable (Recomendado)
Click en "Publish" en la esquina superior derecha

### Opción 2: Vercel
```bash
npm run build
# Despliega la carpeta dist/
```

### Opción 3: Netlify
Arrastra la carpeta `dist/` después de `npm run build`

## 📚 Documentación Completa

Para instrucciones detalladas de personalización, consulta:
- **`INSTRUCCIONES.md`** - Guía completa paso a paso
