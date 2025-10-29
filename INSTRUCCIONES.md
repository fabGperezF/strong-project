# 🏋️ Guía de Configuración - Sitio Web Fitness

Este documento contiene todas las instrucciones necesarias para personalizar y poner en marcha tu sitio web de fitness profesional.

---

## 📦 Instalación del Proyecto

### Requisitos Previos
- **Node.js** (versión 18 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** o **bun** (gestor de paquetes)

### Pasos de Instalación

1. **Clona el repositorio** (si aún no lo has hecho):
```bash
git clone [URL-DEL-REPOSITORIO]
cd [NOMBRE-DEL-PROYECTO]
```

2. **Instala las dependencias**:
```bash
npm install
```
O si usas bun:
```bash
bun install
```

3. **Inicia el servidor de desarrollo**:
```bash
npm run dev
```
O con bun:
```bash
bun run dev
```

4. **Abre tu navegador** en: `http://localhost:8080`

---

## ✏️ Personalización del Contenido

### 1. Logo y Marca

**Archivo:** `src/components/Navbar.tsx`
- **Línea 43**: Reemplaza `[TU LOGO AQUÍ]` con tu nombre o marca
- También en `src/components/Footer.tsx` línea 21

### 2. Hero Section (Página Principal)

**Archivo:** `src/pages/Index.tsx`

- **Líneas 29-34**: 
  - `[TU TÍTULO HERO]` - Tu título principal (ej: "TRANSFORMA TU CUERPO")
  - `[TU SUBTÍTULO MOTIVACIONAL]` - Tu frase motivacional

### 3. Testimonios

**Archivo:** `src/pages/Index.tsx`
- **Línea 42**: Inserta un testimonio poderoso de un cliente
- **Línea 44-45**: Nombre del cliente y programa

### 4. Productos/Programas

**Archivo:** `src/pages/Index.tsx` (líneas 56-78)

Para cada programa (hay 3), reemplaza:
- `[NOMBRE PROGRAMA X]` - Nombre de tu programa
- `[DESCRIPCIÓN BREVE DEL PROGRAMA...]` - Descripción y beneficios

### 5. Transformaciones

**Archivo:** `src/pages/Index.tsx` (líneas 91-109)

Para cada transformación:
- `[NOMBRE ALUMNO X]` - Nombre del alumno
- `[DURACIÓN - ej: 12 semanas]` - Tiempo de transformación

**Imágenes:** Reemplaza las imágenes en `src/assets/`:
- `transformation-before.jpg`
- `transformation-after.jpg`

### 6. Redes Sociales

**Archivo:** `src/pages/Index.tsx` (líneas 10-16)

Reemplaza los usuarios de Instagram y TikTok:
```typescript
const urls = {
  instagram: "https://instagram.com/TU_USUARIO_INSTAGRAM",
  tiktok: "https://tiktok.com/@TU_USUARIO_TIKTOK",
};
```

También en:
- `src/components/Footer.tsx` (líneas 12-17)
- `src/pages/Index.tsx` (líneas 130 y 142) - Reemplaza `@[TU_USUARIO]`

---

## 📱 Configuración de WhatsApp

**Archivo:** `src/components/WhatsAppButton.tsx`

- **Línea 9**: Reemplaza `REEMPLAZA_CON_TU_NUMERO` con tu número de WhatsApp
  - Formato: código de país + número (sin espacios, guiones ni símbolos)
  - Ejemplo Chile: `"56912345678"`
  - Ejemplo México: `"5215512345678"`

---

## 👤 Página About (Sobre Mí)

**Archivo:** `src/pages/About.tsx`

### Contenido a Reemplazar:

1. **Título Hero** (línea 18):
   - `[TU FRASE DE PRESENTACIÓN PRINCIPAL]`

2. **Estadísticas** (líneas 43-44):
   - `[XXX+]` - Número de clientes transformados
   - `[XX]` - Años de experiencia

3. **Tu Historia** (líneas 56-71):
   - Tres párrafos sobre tu historia, formación y filosofía

4. **Tu Misión** (líneas 75-79):
   - Describe tu misión y objetivos

5. **Certificaciones** (líneas 83-95):
   - Lista tus certificaciones reales

6. **Valores** (líneas 104-124):
   - Define 3 valores fundamentales con descripciones

7. **Foto Profesional** (línea 32):
   - Reemplaza el placeholder con tu foto (800x800px recomendado)

---

## 💼 Página Sponsors

**Archivo:** `src/pages/Sponsors.tsx`

### Video de YouTube:

**Líneas 31-46**: Para insertar tu video de YouTube:

```html
<iframe 
  width="100%" 
  height="100%" 
  src="https://www.youtube.com/embed/TU_VIDEO_ID" 
  frameBorder="0" 
  allowFullScreen
  className="aspect-video"
></iframe>
```

Para obtener el VIDEO_ID:
- URL de YouTube: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- VIDEO_ID sería: `dQw4w9WgXcQ`

### Logos de Sponsors:

**Líneas 52-63**: Reemplaza los 6 placeholders con logos reales de tus patrocinadores

---

## 📧 Página de Contacto

**Archivo:** `src/pages/Contact.tsx`

### Información de Contacto:

1. **Email** (línea 127):
   - `[TU_EMAIL@ejemplo.com]`

2. **Teléfono** (línea 141):
   - `[+56 9 XXXX XXXX]`

3. **Ubicación** (línea 155):
   - `[Ciudad, País]`

4. **Horario** (líneas 164-177):
   - Personaliza tus horarios de atención

5. **Preguntas Frecuentes** (líneas 190-214):
   - Agrega 3 preguntas frecuentes con sus respuestas

### Integración de Email:

Para que el formulario envíe emails reales, necesitas configurar un servicio:

#### Opción 1: EmailJS (Recomendado - Gratis)

1. Regístrate en [EmailJS](https://www.emailjs.com/)
2. Crea un servicio de email
3. Instala EmailJS:
```bash
npm install @emailjs/browser
```

4. En `src/pages/Contact.tsx`, reemplaza el `handleSubmit`:

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  emailjs.send(
    'TU_SERVICE_ID',
    'TU_TEMPLATE_ID',
    {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    },
    'TU_PUBLIC_KEY'
  ).then(() => {
    toast({
      title: "Mensaje enviado",
      description: "Te responderemos lo antes posible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  });
};
```

---

## 🎨 Personalización de Colores

**Archivo:** `src/index.css` (líneas 9-30)

El sitio usa una paleta blanco/negro. Si quieres ajustar:

```css
:root {
  --primary: 0 0% 5%;        /* Negro principal */
  --background: 0 0% 100%;    /* Blanco fondo */
  /* ... más variables ... */
}
```

Los valores HSL se pueden ajustar:
- Primer número: Matiz (0-360)
- Segundo: Saturación (0-100%)
- Tercer: Luminosidad (0-100%)

---

## 📸 Reemplazar Imágenes

### Ubicación de Imágenes:
`src/assets/`

### Imágenes a Reemplazar:

1. **hero-image.jpg** (1920x1080px)
   - Imagen principal del hero
   - Debe ser impactante y profesional

2. **transformation-before.jpg** (800x800px)
   - Fotos "antes" de transformaciones

3. **transformation-after.jpg** (800x800px)
   - Fotos "después" de transformaciones

4. **product-placeholder.jpg** (800x800px)
   - Portadas de tus programas

### Cómo Agregar Imágenes:

1. Coloca tu imagen en `src/assets/`
2. Importa en tu componente:
```typescript
import miImagen from "@/assets/mi-imagen.jpg";
```
3. Usa en el componente:
```tsx
<img src={miImagen} alt="Descripción" />
```

---

## 🚀 Deploy / Publicación

### Opción 1: Lovable (Recomendado)

1. Click en el botón **"Publish"** en la parte superior derecha
2. Sigue las instrucciones para publicar

### Opción 2: Vercel

1. Regístrate en [Vercel](https://vercel.com/)
2. Conecta tu repositorio de GitHub
3. Deploy automático

### Opción 3: Netlify

1. Regístrate en [Netlify](https://www.netlify.com/)
2. Arrastra la carpeta del proyecto compilado (`npm run build`)
3. Deploy instantáneo

---

## 📱 SEO y Metadatos

**Archivo:** `index.html`

Ya configurado con:
- Título optimizado
- Meta descripción
- Open Graph tags para redes sociales

Puedes personalizar más en las líneas 6-17.

---

## 🆘 Soporte y Ayuda

Si necesitas ayuda adicional:

1. **Documentación de Lovable**: [docs.lovable.dev](https://docs.lovable.dev/)
2. **React Docs**: [react.dev](https://react.dev/)
3. **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com/)

---

## ✅ Checklist de Personalización

- [ ] Logo/marca en navbar y footer
- [ ] Título y subtítulo del hero
- [ ] Información de programas (3)
- [ ] Testimonios de clientes
- [ ] Transformaciones (nombres y duraciones)
- [ ] URLs de Instagram y TikTok
- [ ] Número de WhatsApp
- [ ] Página About completa
- [ ] Video de YouTube en Sponsors
- [ ] Información de contacto
- [ ] Horarios de atención
- [ ] Integración de email
- [ ] Todas las imágenes reemplazadas
- [ ] Preguntas frecuentes
- [ ] Valores y certificaciones

---

¡Tu sitio está listo para transformar vidas! 💪
