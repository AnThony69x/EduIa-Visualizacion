import { use, useEffect } from "react";
import { cargarDatos } from "./services/servicioDatos";

const App = () => {
  useEffect(() => {
    cargarDatos().then(data => {
      console.log("Datos cargados correcamente:", data);
    });
  }, []);
  
  return <h1>EduIA</h1>;
}

export default App;
