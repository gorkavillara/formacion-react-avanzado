import "./App.css"
import Card from "./components/Card/Card"

function App() {
    return (
        <div style={{ display: "grid", placeContent: "center" }}>
            <Card
                textoPrimario="Primero"
                textoSecundario="Segundo"
                colorTexto="rgb(50, 50, 50)"
            />
        </div>
    )
}

export default App
