import MiVista from "./views/MiVista"
import "./App.css"
import { useState } from "react"

function App() {
    const [muestraVista, setMuestraVista] = useState(false)

    if (muestraVista) return <MiVista />
    return (
        <div>
            <h2>Cargando...</h2>
            <button onClick={() => setMuestraVista(true)}>Mostrar vista</button>
        </div>
    )
}

export default App
