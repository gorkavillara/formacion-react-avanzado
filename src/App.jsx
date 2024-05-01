import "./App.css"
import BotonContador from "./components/BotonContador"
import Contador from "./components/Contador"
import ContadorConHook from "./components/ContadorConHook"
import OtroContador from "./components/OtroContador"

function App() {
    return (
        <>
            <Contador />
            <BotonContador />
            <ContadorConHook />
            <OtroContador />
        </>
    )
}

export default App
