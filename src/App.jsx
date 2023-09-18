import { useState } from "react"
import Lista from "./components/Lista"
import Lista_sin_uDV from "./components/Lista_sin_uDV"
import "./App.css"

function App() {
    const [input, setInput] = useState("")
    return (
        <div>
            <input type="text" onChange={e => setInput(e.target.value)} />
            <Lista input={input} />
        </div>
    )
}

export default App
