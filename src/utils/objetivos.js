export const OBJETIVOS_ANALITICOS = [
  {
    id: 1,
    titulo: "Cómo usan la Inteligencia Artificial los estudiantes",
    descripcion:
      "Analizar los patrones de uso de la IA según el nivel académico y el tipo de tarea realizada.",

    graficos: [
      {
        id: "uso-por-nivel",
        tipo: "barras",
        titulo: "Uso de IA por nivel académico",
      },
      {
        id: "uso-por-tarea",
        tipo: "donut",
        titulo: "Distribución de tipos de tareas",
      },
    ],

    conclusion:
      "La IA es utilizada principalmente por estudiantes de pregrado, especialmente para tareas de estudio y escritura, lo que evidencia su adopción como apoyo académico cotidiano.",
  },

  {
    id: 2,
    titulo: "Factores que influyen en la satisfacción estudiantil",
    descripcion:
      "Explorar la relación entre la duración de la sesión, el nivel de asistencia de la IA y la satisfacción del estudiante.",

    graficos: [
      {
        id: "satisfaccion-vs-duracion",
        tipo: "scatter",
        titulo: "Duración de sesión vs satisfacción",
      },
      {
        id: "asistencia-vs-satisfaccion",
        tipo: "barras",
        titulo: "Nivel de asistencia de la IA y satisfacción",
      },
    ],

    conclusion:
      "Una mayor percepción de utilidad de la IA se asocia con niveles más altos de satisfacción, mientras que sesiones excesivamente largas no garantizan una mejor experiencia.",
  },

  {
    id: 3,
    titulo: "¿Qué predice que los estudiantes vuelvan a usar la IA?",
    descripcion:
      "Identificar los factores clave que influyen en la decisión de reutilizar un asistente de IA.",

    graficos: [
      {
        id: "reutilizacion-vs-satisfaccion",
        tipo: "barras",
        titulo: "Satisfacción y reutilización de la IA",
      },
      {
        id: "reutilizacion-vs-resultado",
        tipo: "barras",
        titulo: "Resultado final y reutilización",
      },
    ],

    conclusion:
      "La satisfacción y el logro de un resultado exitoso son los principales predictores de que un estudiante decida reutilizar la IA.",
  },
];
