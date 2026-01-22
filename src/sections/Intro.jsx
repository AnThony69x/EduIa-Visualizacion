import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagen1 from "../assets/images/imagen1.png";
import "../styles/intro.css";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const seccionRef = useRef(null);
  const tituloRef = useRef(null);
  const subtituloRef = useRef(null);
  const textoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación cinematográfica de entrada del título con blur y scale
      gsap.from(tituloRef.current, {
        opacity: 0,
        y: 150,
        scale: 0.8,
        filter: "blur(20px)",
        duration: 1.5,
        ease: "power4.out",
      });

      // Efecto de glitch en el título
      gsap.to(tituloRef.current, {
        skewX: 2,
        duration: 0.1,
        repeat: 3,
        yoyo: true,
        delay: 1.5,
        ease: "power1.inOut",
      });

      // Animación del subtítulo con efecto cinematográfico
      gsap.from(subtituloRef.current, {
        opacity: 0,
        y: 80,
        filter: "blur(10px)",
        duration: 1.2,
        delay: 0.4,
        ease: "power4.out",
      });

      // Animación del texto descriptivo con fade-in y blur
      gsap.from(textoRef.current.children, {
        opacity: 0,
        y: 50,
        filter: "blur(8px)",
        stagger: 0.15,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      });

      // Efecto paralaje al hacer scroll - elementos se mueven a diferentes velocidades
      gsap.to(tituloRef.current, {
        scrollTrigger: {
          trigger: seccionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: -150,
        opacity: 0.3,
        scale: 0.9,
        ease: "none",
      });

      gsap.to(subtituloRef.current, {
        scrollTrigger: {
          trigger: seccionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: -100,
        opacity: 0.2,
        ease: "none",
      });

      gsap.to(textoRef.current, {
        scrollTrigger: {
          trigger: seccionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: -50,
        opacity: 0,
        ease: "none",
      });

      // Animación de fondo al hacer scroll
      gsap.to(seccionRef.current, {
        scrollTrigger: {
          trigger: seccionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        opacity: 0,
        y: -100,
      });
    }, seccionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={seccionRef} className="seccion-intro">
      <div className="contenido-intro">
        <h1 ref={tituloRef} className="titulo-principal">
          EduIA
        </h1>
        <h2 ref={subtituloRef} className="subtitulo">
          La Revolución Silenciosa de la Inteligencia Artificial en las Aulas
        </h2>
        <div ref={textoRef} className="texto-intro">
          <p className="parrafo-destacado">
            Imagina un estudiante a las 2 AM, luchando con un proyecto...
          </p>
          <p>
            Ya no está solo. Junto a él, una inteligencia artificial le ayuda a 
            estructurar ideas, depurar código y pulir su escritura. Esta es la 
            nueva realidad de millones de estudiantes en 2025.
          </p>
          <p>
            Pero, ¿qué significa realmente este cambio? ¿Están los estudiantes 
            encontrando valor real, o es solo una moda pasajera? A través de datos 
            reales de cientos de sesiones, desentrañaremos esta historia.
          </p>
          <p className="cita-intro">
            "La pregunta no es si la IA está en las aulas, sino cómo está 
            transformando la forma en que aprendemos"
          </p>
          <div className="indicador-scroll">
            <span>↓</span>
            <p>Desliza para descubrir la historia</p>
          </div>
          <img src={imagen1} alt="Introducción a EduIA" className="imagen-intro" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
