import { useState } from "react"
import DisplayContador from "./DisplayContador"

const Contador = () => {
    const [contador, setContador] = useState(0)

    console.log("Renderizando Contador")

    const decrementa = () => setContador((prev) => prev - 1)
    const incrementa = () => setContador((prev) => prev + 1)

    return (
        <div>
            <DisplayContador contador={contador} />
            <button onClick={decrementa}>Menos</button>
            <button onClick={incrementa}>Más</button>
        </div>
    )
}

export default Contador
