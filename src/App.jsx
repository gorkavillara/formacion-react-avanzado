import { useState, useTransition } from "react"
import Lista from "./components/Lista"
import "./App.css"
import Tareas from "./components/Tareas/Tareas"

function App() {
    const [isPending, startTransition] = useTransition()
    const [contador, setContador] = useState(0)
    const sumaContador = () => {
        let suma = 0
        for (let i = 0; i < 1234567890; i++) {
            suma++ //eslint-disable-line
        }
        setContador((prev) => prev + 1)
    }
    return (
        <div>
            <button onClick={() => startTransition(() => sumaContador())}>
                {contador}
            </button>
            <Tareas />
        </div>
    )
}

export default App
