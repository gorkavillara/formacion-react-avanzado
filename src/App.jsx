import { useState, lazy, Suspense } from "react"
// import { suma } from "./assets/functions"
import "./App.css"
// import MiVista from "./views/MiVista"

const MiVista = lazy(() => import("./views/MiVista"))

const App = () => {
    // const handleClick = async () => {
    //     const { suma } = await import("./assets/functions")
    //     alert(suma(4, 8))
    // }
    // const handleClick = () => {
    //     import("./assets/functions").then(({ suma }) => {
    //         alert(suma(4, 8))
    //     })
    // }
    const [mostrarVista, setMostrarVista] = useState(false)
    return (
        <div>
            <button onClick={() => setMostrarVista(true)}>Mostrar vista</button>
            <Suspense fallback={<h3>Cargando...</h3>}>
                {mostrarVista && <MiVista />}
            </Suspense>
            {/* <button onClick={handleClick}>Haz clic</button> */}
        </div>
    )
}

export default App
