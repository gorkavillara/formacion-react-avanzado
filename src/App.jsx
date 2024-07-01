import "./App.css"
import { BlogPost } from "./components/BlogPost"

function App() {
    return (
        <div
            style={{ height: "100vh", display: "grid", placeContent: "center" }}
        >
            <BlogPost post={{ title: "título del post", keywords: "formación react 19 avanzado" }} />
        </div>
    )
}

export default App
