import { useActionState } from "react"

const sendForm = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("El error de la API")
        }, 2000)
    })
}

const Form_con_action = () => {
    const [error, formAction, isPending] = useActionState(async (estadoAnterior, formData) => {
        console.log(estadoAnterior)
        console.log(formData)
        console.log("El nombre que hemos enviado es:", formData.get("nombre"))
        try {
            await sendForm()
        } catch(error) {
            return error
        }
        return null
    })

    return (
        <form action={formAction}>
            <p>Formulario con useActionState</p>
            <input type="text" name="nombre" disabled={isPending} />
            <button type="submit" disabled={isPending}>
                {isPending ? "Enviando" : "Enviar"}
            </button>
            {isPending && <p>Enviando datos...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    )
}

export default Form_con_action
