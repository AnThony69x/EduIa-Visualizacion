import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import {
  Home,
  Users,
  Heart,
  RotateCw,
  BookOpen,
  Cpu,
  Volume2,
  VolumeX,
  BarChart3,
} from "lucide-react";
import "../styles/menu-interactivo.css";

const MenuInteractivo = () => {
  const [musicaActiva, setMusicaActiva] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState("intro");
  const navRef = useRef(null);
  const audioRef = useRef(null);
  const logoRef = useRef(null);

  const secciones = [
    { id: "intro", nombre: "Inicio", icono: Home, color: "#00d9ff" },
    { id: "estadisticas", nombre: "Stats", icono: BarChart3, color: "#00ff9f" },
    { id: "objetivo-uso", nombre: "Uso IA", icono: Users, color: "#ffaa00" },
    { id: "objetivo-satisfaccion", nombre: "Satisfacción", icono: Heart, color: "#ff6b6b" },
    { id: "objetivo-reutilizacion", nombre: "Reutilización", icono: RotateCw, color: "#a855f7" },
    { id: "conclusiones", nombre: "Conclusiones", icono: BookOpen, color: "#ff00ff" },
    { id: "tecnologias", nombre: "Tech", icono: Cpu, color: "#00d9ff" },
  ];

  // Inicializar audio
  useEffect(() => {
    audioRef.current = new Audio("/audio/musica-fondo.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Detectar scroll para detectar sección activa
  useEffect(() => {
    const handleScroll = () => {
      // Detectar sección activa
      const secciones = document.querySelectorAll("[data-seccion]");
      secciones.forEach((seccion) => {
        const rect = seccion.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setSeccionActiva(seccion.getAttribute("data-seccion"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animación inicial del nav lateral
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.5 }
    );

    // Animar logo
    gsap.fromTo(
      logoRef.current,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 0.8, ease: "elastic.out(1, 0.5)", delay: 0.3 }
    );
  }, []);

  // Toggle música
  const toggleMusica = () => {
    if (audioRef.current) {
      if (musicaActiva) {
        gsap.to(audioRef.current, {
          volume: 0,
          duration: 0.5,
          onComplete: () => audioRef.current.pause(),
        });
      } else {
        audioRef.current.play();
        gsap.fromTo(audioRef.current, { volume: 0 }, { volume: 0.3, duration: 0.5 });
      }
      setMusicaActiva(!musicaActiva);
    }
  };

  // Navegar a sección
  const navegarASeccion = (seccionId) => {
    const seccion = document.querySelector(`[data-seccion="${seccionId}"]`);
    if (seccion) {
      seccion.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Logo superior */}
      <div className="logo-flotante">
        <div ref={logoRef} className="logo-navbar" onClick={() => navegarASeccion("intro")}>
          <span className="logo-edu">Edu</span>
          <span className="logo-ia">IA</span>
          <div className="logo-brillo"></div>
        </div>

        {/* Botón de música */}
        <button
          className={`boton-musica ${musicaActiva ? "activo" : ""}`}
          onClick={toggleMusica}
          aria-label={musicaActiva ? "Pausar música" : "Reproducir música"}
        >
          {musicaActiva ? <Volume2 size={20} /> : <VolumeX size={20} />}
          {musicaActiva && (
            <div className="ondas-sonido">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </button>
      </div>

      {/* Menú lateral con puntos */}
      <nav ref={navRef} className="menu-lateral">
        <ul className="nav-lista-lateral">
          {secciones.map((seccion) => {
            const Icono = seccion.icono;
            const esActivo = seccionActiva === seccion.id;
            return (
              <li
                key={seccion.id}
                className={`item-nav-lateral ${esActivo ? "activo" : ""}`}
                onClick={() => navegarASeccion(seccion.id)}
                style={{ "--item-color": seccion.color }}
                title={seccion.nombre}
              >
                <div className="punto-nav"></div>
                <div className="etiqueta-nav">
                  <Icono size={16} className="icono-nav" />
                  <span className="nombre-nav">{seccion.nombre}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default MenuInteractivo;
