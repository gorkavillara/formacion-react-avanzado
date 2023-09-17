import { useId } from "react"

const Formulario = () => {
    const id = useId()
    return (
        <>
            <label htmlFor={`${id}-nombre`}>Nombre</label>
            <input type="text" id={`${id}-nombre`} />
            <label htmlFor={`${id}-email`}>Email</label>
            <input type="text" id={`${id}-email`} />
        </>
    )
}

export default Formulario
