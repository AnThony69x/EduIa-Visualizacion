# EduIA – Visualización de Datos con Data Storytelling

Proyecto académico que transforma datos sobre el uso de la Inteligencia Artificial 
en la vida estudiantil en una **narrativa visual interactiva** inspirada en técnicas 
cinematográficas y de videojuegos.

---

## 🎬 La Historia que Contamos

Este no es solo un dashboard de visualización. Es una **historia de transformación** 
contada a través de datos reales:

### **Acto I: El Planteamiento**
Un estudiante a las 2 AM, una IA que lo ayuda. Esta escena se repite miles de veces 
al día. Pero, ¿qué significa realmente?

### **Acto II: El Desarrollo** 
Descubrimos quién usa la IA, para qué la usan, y el hallazgo contraintuitivo: 
más tiempo no significa mejor resultado.

### **Acto III: El Clímax**
La pregunta definitiva: ¿volverían a usarla? Los datos revelan un círculo virtuoso: 
satisfacción + éxito = lealtad.

### **Resolución**
Una transformación irreversible está en marcha. Los datos lo confirman.

---

## 🎯 Objetivo

Explorar cómo los estudiantes utilizan asistentes de IA mediante **data storytelling**: 
combinando visualización interactiva, narrativa emocional y descubrimientos basados en datos.

---

## 🛠️ Tecnologías Utilizadas

- **React 19** + **Vite** - Framework moderno
- **D3.js** - Visualizaciones de datos interactivas
- **GSAP + ScrollTrigger** - Animaciones cinemáticas al scroll
- **Lenis** - Scroll suave tipo Apple
- **CSS moderno** - Glassmorphism, gradientes, animaciones

---

## 📖 Características de Storytelling

### **1. Narrativa Progresiva**
Los gráficos aparecen cuando haces scroll, revelando la historia paso a paso como una película.

### **2. Transiciones Narrativas**
Entre cada sección, textos que conectan los descubrimientos y preparan para el siguiente.

### **3. Estadísticas Destacadas**
Números grandes e impactantes que dan peso a la historia.

### **4. Lenguaje Emocional**
No solo "los datos muestran", sino "los datos revelan una verdad fundamental".

### **5. Giros Contraintuitivos**
Subvierte expectativas: "El mito del 'más es mejor'"

### **6. Visualizaciones que Hablan**
Cada gráfico cuenta parte de la historia con colores, animaciones y tooltips.

---

## 🎨 Experiencia Visual

### **Animaciones al Scroll**
- ✨ Fade in elegante para nuevas secciones
- 📊 Barras que crecen con efecto bounce
- 🌀 Parallax suave en transiciones
- ⚡ Números que animan al entrar al viewport

### **Paleta de Colores Narrativa**
- **Cyan (#00d9ff)**: Tecnología, claridad, futuro
- **Verde Neón (#00ff9f)**: Éxito, crecimiento
- **Magenta (#ff00ff)**: Innovación, transformación  
- **Naranja (#ffaa00)**: Energía, acción

### **Glassmorphism**
Contenedores semitransparentes con blur que dan sensación de profundidad y modernidad.

---

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Abrir en navegador
http://localhost:5173
```

---

## 📊 Dataset

El proyecto analiza sesiones reales de estudiantes usando IA:

- **Variables clave**: Nivel educativo, tipo de tarea, duración, satisfacción, reutilización
- **Fuente**: `datos_limpios.csv` con datos procesados y normalizados
- **Tamaño**: Cientos de sesiones reales analizadas

---

## 🎯 Estructura del Proyecto

```
src/
├── sections/           # Secciones principales de la historia
│   ├── Intro.jsx       # Planteamiento y gancho emocional
│   ├── ObjetivoUso.jsx # Primer descubrimiento: quiénes y para qué
│   ├── ObjetivoSatisfaccion.jsx  # Giro contraintuitivo
│   ├── ObjetivoReutilizacion.jsx # Clímax: la prueba de fuego
│   └── Conclusiones.jsx # Resolución en 5 capítulos
├── components/        # Elementos de storytelling
│   ├── TransicionNarrativa.jsx   # Puentes narrativos
│   └── EstadisticaDestacada.jsx  # Stats impactantes
├── styles/           # Estilos temáticos
└── services/         # Carga de datos
```

---

## 💡 Principios de Data Storytelling

### **1. Humanizar los Datos**
Empezar con personas, no con números. "Un estudiante a las 2 AM..."

### **2. Arco Narrativo**
Planteamiento → Desarrollo → Clímax → Resolución

### **3. Show, Don't Tell**
Los gráficos muestran la historia, no solo ilustran números.

### **4. Sorpresa y Contradicción**
Desafiar expectativas para mantener el engagement.

### **5. Significado Sobre Datos**
Terminar con insights, no con "Fin del análisis".

---

## 📚 Guías Complementarias

- 📖 [GUIA_STORYTELLING.md](GUIA_STORYTELLING.md) - Análisis profundo de técnicas narrativas
- 📊 [GUIA_VISUALIZACION.md](GUIA_VISUALIZACION.md) - Detalles técnicos de implementación

---

## 🎓 Aprendizajes Clave

### **Data Storytelling**
- Transformar datos en narrativas memorables
- Usar emociones para conectar con la audiencia
- Estructurar descubrimientos como actos dramáticos

### **Visualización Interactiva**
- Animaciones que revelan progresivamente
- Scroll como mecanismo narrativo
- Colores y formas que comunican significado

### **Desarrollo Frontend**
- React hooks para animaciones complejas
- GSAP ScrollTrigger para experiencias cinemáticas
- D3.js para gráficos interactivos controlados

---

## 🌟 Inspiración

Este proyecto se inspira en:
- 📺 **Documentales de Netflix** - Narrativa visual envolvente
- 🎮 **GTA Statistics** - Presentación dinámica de datos
- 📰 **The Pudding** - Data journalism narrativo
- 🎨 **Apple Keynotes** - Revelación progresiva elegante

---

## 👨‍💻 Desarrollo

Proyecto desarrollado con enfoque en:
- ✨ Experiencia de usuario inmersiva
- 📖 Narrativa basada en datos reales
- 🎨 Diseño visual impactante
- ⚡ Performance y animaciones fluidas

---

## 📄 Licencia

Ver [LICENSE](LICENSE)

---

**"Donde los datos cuentan historias"** 📊✨

Desarrollado con 💙 para transformar números en narrativas que importan.
