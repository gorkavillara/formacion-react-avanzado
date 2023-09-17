// import { useState } from "react"
import { signal } from "@preact/signals-react"

const ContadorSignals = () => {
    // const [contador, setContador] = useState(0)
    const contador = signal(0)

    console.log("Renderizando Contador")

    // const decrementa = () => setContador((prev) => prev - 1)
    const decrementa = () => contador.value--
    // const incrementa = () => setContador((prev) => prev + 1)
    const incrementa = () => contador.value++

    return (
        <div>
            <h3>Contador: {contador}</h3>
            <button onClick={decrementa}>Menos</button>
            <button onClick={incrementa}>Más</button>
        </div>
    )
}

export default ContadorSignals
