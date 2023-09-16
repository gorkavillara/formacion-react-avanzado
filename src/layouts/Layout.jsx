import { Suspense } from "react"
import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <nav style={{ display: "flex", gap: "1rem" }}>
                <Link to="/">Home</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/login">Login</Link>
            </nav>
            <Suspense fallback={<h3>Loading...</h3>}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default Layout
