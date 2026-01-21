import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagen8 from "../assets/images/imagen8.png";
import "../styles/conslucion.css";

gsap.registerPlugin(ScrollTrigger);

const Conclusiones = () => {
  const seccionRef = useRef(null);
  const tituloRef = useRef(null);
  const puntosRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del título
      gsap.from(tituloRef.current, {
        scrollTrigger: {
          trigger: seccionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      // Animación de los puntos con stagger
      gsap.from(puntosRef.current.children, {
        scrollTrigger: {
          trigger: puntosRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: -50,
        stagger: 0.3,
        duration: 0.8,
        ease: "power2.out",
      });
    }, seccionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={seccionRef} className="seccion-conclusiones">
      <div className="contenido-conclusiones">
        <h2 ref={tituloRef} className="titulo-conclusiones">
          El Final de una Historia, El Comienzo de una Era
        </h2>

        <div className="introduccion-conclusiones">
          <p>
            Hemos viajado a través de cientos de sesiones, miles de interacciones, 
            y un patrón emergente que no puede ser ignorado. La IA en la educación 
            no es el futuro — es el presente. Y los datos cuentan una historia clara.
          </p>
          <img src={imagen8} alt="El comienzo de una era" className="imagen-intro-conclusiones" />
        </div>

        <div ref={puntosRef} className="lista-conclusiones">
          <div className="punto-conclusion">
            <div className="icono-conclusion">📚</div>
            <div className="texto-punto">
              <h3>Capítulo 1: La Adopción Es Real</h3>
              <p>
                Ya no estamos hablando de experimentos o casos aislados. Los estudiantes 
                de pregrado han abrazado la IA como una herramienta esencial, usándola 
                para todo, desde estudiar hasta programar. Es tan común como Google, 
                tan natural como tomar apuntes. La revolución silenciosa ya sucedió.
              </p>
            </div>
          </div>

          <div className="punto-conclusion">
            <div className="icono-conclusion">💡</div>
            <div className="texto-punto">
              <h3>Capítulo 2: La Calidad Sobre la Cantidad</h3>
              <p>
                Una lección contraintuitiva: pasar más tiempo no significa mejores 
                resultados. Los estudiantes más satisfechos tienen sesiones enfocadas 
                y efectivas. La IA que verdaderamente ayuda no necesita horas de tu 
                tiempo, necesita entender lo que necesitas. Es la diferencia entre 
                un tutor que divaga y uno que va directo al punto.
              </p>
            </div>
          </div>

          <div className="punto-conclusion">
            <div className="icono-conclusion">⭐</div>
            <div className="texto-punto">
              <h3>Capítulo 3: Resultados &gt; Satisfacción</h3>
              <p>
                Un descubrimiento contraintuitivo: la satisfacción subjetiva no predice 
                la reutilización tan fuertemente como esperábamos. Los estudiantes vuelven 
                cuando la IA les ayuda a <strong>lograr resultados concretos</strong>, no 
                solo cuando "se sienten bien". Esto cambia todo: la efectividad medible 
                supera a la experiencia agradable. Los estudiantes son pragmáticos, no 
                sentimentales.
              </p>
            </div>
          </div>

          <div className="punto-conclusion">
            <div className="icono-conclusion">🎯</div>
            <div className="texto-punto">
              <h3>Capítulo 4: El Éxito Es Contagioso</h3>
              <p>
                Cuando un estudiante logra completar su tarea con ayuda de la IA, 
                algo cambia. No solo está satisfecho, está convencido. El éxito 
                tangible construye confianza, y la confianza construye lealtad. 
                Hemos visto el patrón una y otra vez: éxito lleva a más uso, 
                más uso lleva a más éxito. Un círculo virtuoso imparable.
              </p>
            </div>
          </div>

          <div className="punto-conclusion">
            <div className="icono-conclusion">🚀</div>
            <div className="texto-punto">
              <h3>Epílogo: La Nueva Normalidad</h3>
              <p>
                Si hay algo que estos datos dejan absolutamente claro es esto: 
                la integración de la IA en la educación no es reversible. Los 
                estudiantes que la han probado y ha funcionado para ellos no 
                retrocederán. Hemos cruzado un umbral. La pregunta ya no es 
                "¿debemos usar IA?" sino "¿cómo la usamos mejor?"
              </p>
            </div>
          </div>
        </div>

        <div className="mensaje-final">
          <h3 className="titulo-mensaje-final">La Historia Continúa...</h3>
          <p>
            Los datos nos han enseñado lecciones valiosas, algunas esperadas y otras 
            sorprendentes. La adopción es real, la calidad importa más que la cantidad, 
            y —contra nuestra intuición— los resultados concretos importan más que los 
            sentimientos abstractos.
          </p>
          <p>
            Este análisis demuestra algo fundamental sobre el data storytelling: debemos 
            dejar que los datos cuenten su propia historia, incluso cuando desafía nuestras 
            expectativas. Los estudiantes nos están diciendo que la IA educativa debe 
            enfocarse en <strong>resolver problemas reales de manera efectiva</strong>, 
            no solo en crear experiencias agradables.
          </p>
          <p className="firma">
            <strong>EduIA</strong>
            <br />
            <strong>Donde los datos revelan verdades incómodas</strong>
            <span className="fecha-firma">2026</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Conclusiones;
