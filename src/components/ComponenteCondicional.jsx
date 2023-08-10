import { useState } from "react";
import "./ComponenteCondicional.css";

const ComponenteCondicional = () => {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <button onClick={() => setDisplay((prev) => !prev)}>
        {display ? "Ocultar" : "Mostrar"}
      </button>
      {display && <div className="contenido">Contenido</div>}
    </div>
  );
};

export default ComponenteCondicional;
