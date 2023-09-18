import "./App.css"
import Card from "./components/Card/Card"
import Spinner from "./components/Spinner/Spinner"

function App() {
    return (
        <div style={{ display: "grid", placeContent: "center" }}>
            {/* <Card
                textoPrimario="Primero"
                textoSecundario="Segundo"
                colorTexto="rgb(50, 50, 50)"
            /> */}
            <Spinner size="large" />
        </div>
    )
}

export default App
