# 🎯 EduIA - Visualización Interactiva con Scroll

## ✨ ¿Qué Muestra el Proyecto?

Este proyecto es una **visualización de datos narrativa e interactiva tipo GTA**, donde la historia se construye a medida que el usuario hace scroll. Analiza el uso de la Inteligencia Artificial en la vida estudiantil.

## 🎬 Estructura de la Narrativa

### 1. **Introducción (Sección Hero)**
- Título impactante con gradientes animados
- Presentación del tema
- Indicador animado de scroll
- **Animación**: El contenido se desvanece al hacer scroll hacia abajo

### 2. **Primer Objetivo: Patrones de Uso**
- **Título**: "Cómo usan la Inteligencia Artificial los estudiantes"
- **Gráfico de Barras Animado**: 
  - Muestra el uso por nivel académico (Pregrado, Posgrado, Secundaria)
  - Las barras crecen con efecto bounce al entrar en viewport
  - Colores cyan vibrantes (#00d9ff)
- **Gráfico Donut Animado**:
  - Distribución de tipos de tareas (Estudio, Redacción, Programación, etc.)
  - Cada sector se anima individualmente
  - Efecto hover que agranda los sectores
  - Leyenda interactiva
- **Conclusión**: Resumen de hallazgos sobre adopción estudiantil

### 3. **Segundo Objetivo: Factores de Satisfacción**
- **Título**: "Factores que influyen en la satisfacción estudiantil"
- **Gráfico de Dispersión (Scatter)**:
  - Duración de sesión vs. nivel de satisfacción
  - Puntos interactivos con tooltips
  - Cada punto representa un estudiante
  - Animación de aparición progresiva
- **Gráfico de Barras**:
  - Nivel de asistencia de la IA vs. satisfacción promedio
  - Barras magenta (#ff00ff) con efecto bounce
- **Conclusión**: Insights sobre calidad vs. cantidad

### 4. **Tercer Objetivo: Predicción de Reutilización**
- **Título**: "¿Qué predice que los estudiantes vuelvan a usar la IA?"
- **Gráfico de Barras con Gradiente**:
  - Satisfacción vs. porcentaje de reutilización
  - Animación elástica tipo resorte
  - Gradiente de naranja a rojo
- **Gráfico de Barras Comparativo**:
  - Resultado final vs. reutilización
  - Colores que varían según el porcentaje
  - Verde cyan para resultados exitosos
- **Conclusión**: Factores clave de fidelización

### 5. **Conclusiones Finales**
- 5 puntos clave con iconos emoji
- Cada punto se anima al entrar en el viewport
- Efecto de deslizamiento lateral al hacer hover
- Mensaje final destacado con gradientes
- Firma del proyecto

## 🎨 Características Visuales

### Animaciones GSAP
- **Scroll Trigger**: Los gráficos se crean solo cuando entran en el viewport
- **Efectos de entrada**: Fade, slide, scale, bounce
- **Stagger animations**: Elementos que aparecen secuencialmente
- **Parallax suave**: Secciones que se desvanecen al hacer scroll

### Estilos
- **Tema oscuro futurista**: Fondo #0a0e27 con gradientes
- **Colores vibrantes**:
  - Cyan: #00d9ff
  - Verde neón: #00ff9f
  - Magenta: #ff00ff
  - Naranja: #ffaa00
- **Glassmorphism**: Contenedores con blur y transparencias
- **Hover effects**: Transformaciones y sombras brillantes
- **Scrollbar personalizada**: Con gradientes de colores

### Interactividad D3.js
- **Tooltips**: Información detallada al pasar el mouse
- **Transiciones suaves**: Animaciones de 1-2 segundos
- **Efectos hover**: Barras y sectores que se agrandan
- **Colores dinámicos**: Escalas de color basadas en datos

## 🚀 Cómo Ejecutar

```bash
# Instalar dependencias (si no están instaladas)
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Abrir en el navegador
http://localhost:5173 (o el puerto que indique)
```

## 📊 Datos Utilizados

El proyecto carga `datos_limpios.csv` que contiene:
- **idSesion**: Identificador único
- **nivelEducativo**: Pregrado, Posgrado, Secundaria
- **disciplina**: Área de estudio
- **duracionMinutos**: Tiempo de la sesión
- **tipoTarea**: Tipo de actividad (Estudio, Redacción, Programación, etc.)
- **nivelAsistenciaIA**: Del 1 al 5
- **resultadoFinal**: Resultado de la sesión
- **usoPosterior**: Sí/No (reutilización)
- **satisfaccion**: Nivel de satisfacción (0-5)

## 🎯 Experiencia de Usuario

1. **Scroll Suave (Lenis)**: Navegación fluida y natural
2. **Carga Progresiva**: Los gráficos se crean solo cuando son visibles
3. **Historia Lineal**: La información se revela gradualmente
4. **Visual Impactante**: Colores vibrantes y animaciones tipo videojuego
5. **Responsive**: Se adapta a diferentes tamaños de pantalla

## 🛠️ Tecnologías

- **React 19**: Framework de UI
- **Vite**: Build tool ultrarrápido
- **D3.js**: Visualización de datos
- **GSAP + ScrollTrigger**: Animaciones al scroll
- **Lenis**: Scroll suave
- **CSS moderno**: Gradientes, blur, animaciones

## 💡 Inspiración GTA

Al igual que los juegos de GTA con sus estadísticas y gráficos animados, este proyecto presenta los datos de forma cinemática y progresiva, creando una experiencia inmersiva donde cada scroll revela una nueva parte de la historia.

---

**Desarrollado con 💙 para la visualización de datos educativos**
