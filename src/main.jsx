import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

customElements.define(
    "custom-element",
    class extends HTMLElement {
        connectedCallback() {
            this.render()
        }

        render() {
            const data = JSON.parse(this.getAttribute("data"))
            this.innerHTML = `<div>${data.name}</div>`
        }
    }
)

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
