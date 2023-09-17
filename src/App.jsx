import { useState, useTransition } from "react"
import Lista from "./components/Lista"
import "./App.css"

function App() {
    const [isPending, startTransition] = useTransition()
    const [contador, setContador] = useState(0)
    const [mostrarLista, setMostrarLista] = useState(false)
    return (
        <div>
            <button onClick={() => setContador((prev) => prev + 1)}>
                {contador}
            </button>
            <button
                onClick={() =>
                    startTransition(() => setMostrarLista((prev) => !prev))
                }
            >
                {mostrarLista ? "Ocultar" : "Mostrar"} lista
            </button>
            {mostrarLista && <Lista />}
        </div>
    )
}

export default App
