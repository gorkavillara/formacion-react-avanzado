import { Suspense } from "react"
import { Link, Outlet } from "react-router-dom"

const LayoutPrincipal = () => {
    return (
        <div>
            <nav style={{ display: "flex", gap: 16 }}>
                <Link to="/">Home</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/login">Login</Link>
            </nav>
            <Suspense fallback={<h4>Cargando vista...</h4>}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default LayoutPrincipal
