import { useId, useRef } from "react"
import { signal } from "@preact/signals-react"
import ListaTareas from "./ListaTareas"

export const tareas = signal(["Sacar al perro"])

const Tareas = () => {
    const id = useId()
    const inputRef = useRef()
    const addNewTask = () => {
        tareas.value = [...tareas.value, inputRef.current.value]
    }
    return (
        <div>
            <label htmlFor={`tarea-${id}`}>Tarea</label>
            <input ref={inputRef} type="text" id={`tarea-${id}`} />
            <button onClick={addNewTask}>Añadir nueva tarea</button>
            <ListaTareas />
        </div>
    )
}

export default Tareas
