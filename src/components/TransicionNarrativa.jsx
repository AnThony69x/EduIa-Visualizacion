import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/transicion.css";

gsap.registerPlugin(ScrollTrigger);

const TransicionNarrativa = ({ texto, estadistica, contexto }) => {
  const seccionRef = useRef(null);
  const estadisticaRef = useRef(null);
  const textoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de la estadística destacada
      gsap.from(estadisticaRef.current, {
        scrollTrigger: {
          trigger: seccionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Animación del texto narrativo
      gsap.from(textoRef.current, {
        scrollTrigger: {
          trigger: textoRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });
    }, seccionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={seccionRef} className="transicion-narrativa">
      <div className="contenido-transicion">
        {estadistica && (
          <div ref={estadisticaRef} className="estadistica-destacada">
            <div className="numero-grande">{estadistica.numero}</div>
            <div className="descripcion-estadistica">{estadistica.descripcion}</div>
          </div>
        )}
        {texto && (
          <div ref={textoRef} className="texto-narrativo">
            <p className="parrafo-principal">{texto}</p>
            {contexto && <p className="contexto-adicional">{contexto}</p>}
          </div>
        )}
      </div>
    </section>
  );
};

export default TransicionNarrativa;
