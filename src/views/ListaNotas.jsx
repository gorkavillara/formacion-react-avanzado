import { useState } from "react";
import { useTransition, animated } from "@react-spring/web";

const notaEjemplo = {
  id: 0,
  texto: "Aprender React",
};

const ListaNotas = () => {
  const [notas, setNotas] = useState([notaEjemplo]);
  const [nuevoTexto, setNuevoTexto] = useState("");

  const transitions = useTransition(notas, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const nuevaNota = () => {
    const nota = {
      id: notas.at(-1).id + 1,
      texto: nuevoTexto,
    };
    setNotas((prev) => [...prev, nota]);
  };

  const eliminarNota = (id) =>
    setNotas((prev) => prev.filter((nota) => nota.id !== id));

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Nueva nota"
          value={nuevoTexto}
          onChange={(e) => setNuevoTexto(e.target.value)}
        />
        <button onClick={nuevaNota}>➕</button>
      </div>
      <div>
        {/* {notas.map((nota) => (
          <p key={nota.id}>
            {nota.texto}
            <button onClick={() => eliminarNota(nota.id)}>🗑️</button>
          </p>
        ))} */}
        {transitions((style, nota) => (
          <animated.p style={style}>
            {nota.texto}
            <button onClick={() => eliminarNota(nota.id)}>🗑️</button>
          </animated.p>
        ))}
      </div>
    </div>
  );
};

export default ListaNotas;
