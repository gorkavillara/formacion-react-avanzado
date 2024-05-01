import { useContador } from "../hooks/useContador"

const ContadorConHook = () => {
    const { contador, incrementa } = useContador()
    return (
        <div>
            <h3>Contador con Hook</h3>
            <button onClick={incrementa}>{contador}</button>
        </div>
    )
}

export default ContadorConHook
