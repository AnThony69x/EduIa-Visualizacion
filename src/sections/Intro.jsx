import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/intro.css";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const seccionRef = useRef(null);
  const tituloRef = useRef(null);
  const subtituloRef = useRef(null);
  const textoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de entrada del título
      gsap.from(tituloRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
      });

      // Animación del subtítulo con delay
      gsap.from(subtituloRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      // Animación del texto descriptivo
      gsap.from(textoRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out",
      });

      // Animación al hacer scroll
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
        </div>
      </div>
    </section>
  );
};

export default Intro;
