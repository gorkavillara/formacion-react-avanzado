import { tareas } from "./Tareas"

const ListaTareas = () => {
    return (
        <ul>
            {tareas.value.map((tarea, ind) => (
                <li key={ind}>{tarea}</li>
            ))}
        </ul>
    )
}

export default ListaTareas
