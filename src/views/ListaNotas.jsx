import { useState } from "react"
import { useTransition, animated } from "@react-spring/web"
import Nota from "../components/Nota"
import BotonTransicion from "../components/BotonTransicion"

const notaInicial = {
    id: 0,
    texto: "Sacar la basura"
}

const ListaNotas = () => {
    const [nuevoTexto, setNuevoTexto] = useState("")
    const [notas, setNotas] = useState([notaInicial])
    const transitions = useTransition(notas, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    })
    const eliminarNota = (nota) =>
        setNotas((prevNotas) => prevNotas.filter((n) => n.id !== nota.id))

    const nuevaNota = () => {
        setNotas((prevNotas) => [
            ...prevNotas,
            { id: notas.at(-1).id + 1, texto: nuevoTexto }
        ])
        setNuevoTexto("")
    }
    return (
        <div className="lista-notas">
            <div className="input-nota">
                <input
                    type="text"
                    value={nuevoTexto}
                    onChange={(e) => setNuevoTexto(e.target.value)}
                />
                <BotonTransicion onClick={nuevaNota}>➕</BotonTransicion>
            </div>
            {transitions((style, item) => (
                <animated.div style={style}>
                    <Nota nota={item} eliminarNota={() => eliminarNota(item)} />
                </animated.div>
            ))}
        </div>
    )
}

export default ListaNotas
