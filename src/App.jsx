import "./App.css"

function App() {
    const data = { name: "John Doe" }

    return (
        <div
            style={{ height: "100vh", display: "grid", placeContent: "center" }}
        >
            <custom-element data={JSON.stringify(data)}></custom-element>
        </div>
    )
}

export default App
