import { useContador } from "../hooks/useContador"

const OtroContador = () => {
    const { contador, incrementa, dobleContador } = useContador(12)
    return (
        <div>
            <p>Valor del contador = {contador}</p>
            <p>Doble del contador = {dobleContador}</p>
            <button onClick={incrementa}>Incrementar</button>
        </div>
    )
}

export default OtroContador
