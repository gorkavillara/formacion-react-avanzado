/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LayoutPrincipal from "./layouts/LayoutPrincipal"
// import Home from "./views/Home"
// import Contacto from "./views/Contacto"
// import Login from "./views/Login"

const Home = lazy(() => import("./views/Home"))
const Contacto = lazy(() => import("./views/Contacto"))
const Login = lazy(() => import("./views/Login"))

const routes = [
    {
        path: "/",
        element: <LayoutPrincipal />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "contacto",
                element: <Contacto />
            },
            {
                path: "login",
                element: <Login />
            }
        ]
    }
]
const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
)
