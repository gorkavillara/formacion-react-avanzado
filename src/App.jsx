import "./App.css"
import { useState } from "react"
import { ChangeName } from "./components/ChangeName"

function App() {
    const [name, setName] = useState("Gorka Villar")
    return (
        <div
            style={{ height: "100vh", display: "grid", placeContent: "center" }}
        >
            <ChangeName currentName={name} onUpdateName={setName} />
        </div>
    )
}

export default App
