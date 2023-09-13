import { useState, useEffect } from "react"
import ReactDOM from "react-dom/client"
import { PlasmicRootProvider, PlasmicComponent } from "@plasmicapp/loader-react"
import { PLASMIC } from "./plasmic-init"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Componentes from "./Componentes"

ReactDOM.createRoot(document.getElementById("root")).render(
    <PlasmicRootProvider loader={PLASMIC}>
        <Router>
            <Routes>
                <Route path="/" element={<CatchAllPage />} />
                <Route path="/contacto" element={<CatchAllPage />} />
                <Route path="/componentes" element={<Componentes />} />
            </Routes>
        </Router>
    </PlasmicRootProvider>
)

export function CatchAllPage() {
    const [loading, setLoading] = useState(true)
    const [pageData, setPageData] = useState(null)

    useEffect(() => {
        async function load() {
            const pageData = await PLASMIC.maybeFetchComponentData(
                location.pathname
            )
            setPageData(pageData)
            setLoading(false)
        }
        load()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    if (!pageData) {
        return <div>Not found</div>
    }

    console.log("pathname", location.pathname)
    return <PlasmicComponent component={location.pathname} />
}
