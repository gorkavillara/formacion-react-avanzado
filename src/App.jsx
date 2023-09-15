import { lazy, Suspense, useState } from "react"
import "./App.css"

const MiVista = lazy(() => import("./views/MiVista"))

function App() {
    const [muestraVista, setMuestraVista] = useState(false)

    if (muestraVista)
        return (
            <Suspense fallback={<h3>Loading...</h3>}>
                <MiVista />
            </Suspense>
        )
    return (
        <div>
            <h2>Cargando...</h2>
            <button onClick={() => setMuestraVista(true)}>Mostrar vista</button>
        </div>
    )
}

export default App
