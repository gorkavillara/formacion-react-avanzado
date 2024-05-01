
import { useState } from "react"

const BotonContador = () => {
    const [contador, setContador] = useState(0)

    const incrementa = () => setContador((prev) => prev + 1)
    return <button onClick={incrementa}>{ contador }</button>
}

export default BotonContador
