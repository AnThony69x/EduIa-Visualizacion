import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { cargarDatos } from "./services/servicioDatos";
import Intro from "./sections/Intro";
import TransicionNarrativa from "./components/TransicionNarrativa";
import EstadisticaDestacada from "./components/EstadisticaDestacada";
import ObjetivoUso from "./sections/ObjetivoUso";
import ObjetivoSatisfaccion from "./sections/ObjetivoSatisfaccion";
import ObjetivoReutilizacion from "./sections/ObjetivoReutilizacion";
import Conclusiones from "./sections/Conclusiones";
import "./styles/global.css";

const App = () => {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [estadisticasGenerales, setEstadisticasGenerales] = useState(null);

  useEffect(() => {
    // Configurar scroll suave con Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cargar datos
    const inicializar = async () => {
      try {
        const datosCSV = await cargarDatos();
        setDatos(datosCSV);
        
        // Calcular estadísticas generales
        const stats = calcularEstadisticasGenerales(datosCSV);
        setEstadisticasGenerales(stats);
        
        setCargando(false);
      } catch (error) {
        console.error("Error al cargar datos:", error);
        setCargando(false);
      }
    };

    inicializar();

    return () => {
      lenis.destroy();
    };
  }, []);

  const calcularEstadisticasGenerales = (datos) => {
    const totalSesiones = datos.length;
    const satisfaccionPromedio = (
      datos.reduce((sum, d) => sum + (d.satisfaccion || 0), 0) / totalSesiones
    ).toFixed(1);
    const duracionPromedio = (
      datos.reduce((sum, d) => sum + (d.duracionMinutos || 0), 0) / totalSesiones
    ).toFixed(0);
    const porcentajeReutilizacion = (
      (datos.filter((d) => d.usoPosterior === "Sí").length / totalSesiones) * 100
    ).toFixed(0);

    return {
      totalSesiones,
      satisfaccionPromedio,
      duracionPromedio,
      porcentajeReutilizacion,
    };
  };

  if (cargando) {
    return (
      <div className="cargando">
        <div className="spinner"></div>
        <p>Cargando la historia de los datos...</p>
      </div>
    );
  }

  return (
    <div className="contenedor-principal">
      <Intro />

      {/* Contexto inicial con estadísticas */}
      {estadisticasGenerales && (
        <EstadisticaDestacada
          items={[
            {
              icono: "👥",
              numero: estadisticasGenerales.totalSesiones,
              etiqueta: "Sesiones Analizadas",
              descripcion: "Estudiantes reales compartiendo su experiencia",
            },
            {
              icono: "⏱️",
              numero: `${estadisticasGenerales.duracionPromedio} min`,
              etiqueta: "Duración Promedio",
              descripcion: "Tiempo invertido por sesión",
            },
            {
              icono: "⭐",
              numero: `${estadisticasGenerales.satisfaccionPromedio}/5`,
              etiqueta: "Satisfacción Media",
              descripcion: "Nivel general de satisfacción",
            },
            {
              icono: "🔄",
              numero: `${estadisticasGenerales.porcentajeReutilizacion}%`,
              etiqueta: "Volverían a Usar",
              descripcion: "Estudiantes que confían en la IA",
            },
          ]}
        />
      )}

      {/* Transición narrativa al primer objetivo */}
      <TransicionNarrativa
        texto="Pero estas cifras solo rascan la superficie. La verdadera historia está en los patrones: ¿quiénes usan la IA y para qué?"
        estadistica={{
          numero: "3 niveles",
          descripcion: "Secundaria, Pregrado y Posgrado explorando la IA",
        }}
      />

      <ObjetivoUso datos={datos} />

      {/* Transición al segundo objetivo */}
      <TransicionNarrativa
        texto="Ahora sabemos quiénes y para qué. Pero hay una pregunta crucial: ¿están realmente satisfechos con la experiencia?"
        contexto="La satisfacción no es solo un número, es la diferencia entre una herramienta útil y una frustración más."
      />

      <ObjetivoSatisfaccion datos={datos} />

      {/* Transición al tercer objetivo */}
      <TransicionNarrativa
        estadistica={{
          numero: `${estadisticasGenerales.porcentajeReutilizacion}%`,
          descripcion: "de estudiantes volverían a usar la IA",
        }}
        texto="La verdadera prueba de fuego: ¿volverían a usar la IA? Pero más importante aún: ¿qué hace que un estudiante vuelva?"
      />

      <ObjetivoReutilizacion datos={datos} />

      {/* Transición a conclusiones */}
      <TransicionNarrativa
        texto="Los datos han hablado. Ahora es momento de conectar los puntos y entender el panorama completo."
      />

      <Conclusiones />
    </div>
  );
};

export default App;
