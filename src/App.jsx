import { useState, useEffect } from "react"
import "./App.css"
import { PLASMIC } from "./plasmic-init"
import { PlasmicRootProvider, PlasmicComponent } from "@plasmicapp/loader-react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Components from "./views/Components"

const App = () => {
    return (
        <PlasmicRootProvider loader={PLASMIC}>
            <Router>
                <Routes>
                    <Route path="/" element={CatchAllPage()} />
                    <Route path="/contacto" element={CatchAllPage()} />
                    <Route path="/componentes" element={<Components />} />
                </Routes>
            </Router>
        </PlasmicRootProvider>
    )
}

export default App

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
    // The page will already be cached from the `load` call above.
    return <PlasmicComponent component={location.pathname} />
}
