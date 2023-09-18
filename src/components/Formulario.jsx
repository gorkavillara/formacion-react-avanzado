import { useId } from "react"

const Formulario = () => {
    const id = useId()
    return (
        <div>
            <label htmlFor={`nombre-${id}`}>Nombre</label>
            <input id={`nombre-${id}`} type="text" />
            <label htmlFor={`email-${id}`}>Email</label>
            <input id={`email-${id}`} type="email" />
            <label htmlFor={`password-${id}`}>Contraseña</label>
            <input id={`password-${id}`} type="password" />
        </div>
    )
}

export default Formulario
