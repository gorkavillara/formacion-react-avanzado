/* eslint-disable react-refresh/only-export-components */
import React, { lazy } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layouts/Layout"
// import Home from "./views/Home"
// import Contacto from "./views/Contacto"
// import Login from "./views/Login"

const Home = lazy(() => import("./views/Home"))
const Contacto = lazy(() => import("./views/Contacto"))
const Login = lazy(() => import("./views/Login"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
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
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
