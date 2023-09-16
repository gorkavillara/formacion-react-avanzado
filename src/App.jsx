// import { suma } from "./assets/functions"
import "./App.css"

function App() {
    return (
        <button
            onClick={() => {
                import("./assets/functions").then((functions) =>
                    alert(functions.suma(2, 3))
                )
            }}
        >
            Haz clic
        </button>
    )
}
// function App() {
//     return (
//         <button
//             onClick={async () => {
//                 const { suma } = await import("./assets/functions")
//                 alert(suma(2, 3))
//             }}
//         >
//             Haz clic
//         </button>
//     )
// }

export default App
