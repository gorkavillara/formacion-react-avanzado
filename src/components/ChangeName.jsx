import { useOptimistic } from "react"

async function updateName(newName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(newName)
        }, 1000)
    })
}

export const ChangeName = ({ currentName, onUpdateName }) => {
    const [optimisticName, setOptimisticName] = useOptimistic(currentName)

    const submitAction = async (formData) => {
        const newName = formData.get("name")
        setOptimisticName(newName)
        const updatedName = await updateName(newName)
        onUpdateName(updatedName)
    }

    return (
        <form action={submitAction}>
            <p>Tu nombre es: {optimisticName}</p>
            <p>
                <label>Cambiar Nombre:</label>
                <input
                    type="text"
                    name="name"
                    disabled={currentName !== optimisticName}
                />
                <button type="submit">Cambiar</button>
            </p>
        </form>
    )
}
