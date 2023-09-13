import { PlasmicComponent } from "@plasmicapp/loader-react"

function Componentes() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <h1>Vista creada en React</h1>
            <PlasmicComponent component="Mi Componente" />
        </div>
    )
}

export default Componentes
