import { useActionState } from "react"

const sendFormWithError = async () =>
    new Promise((res, reject) => {
        setTimeout(() => {
            reject("El error que devuelve la API")
        }, 2000)
    })

const Form_con_action = () => {
    const [error, submitAction, isPending] = useActionState(async () => {
        try {
            await sendFormWithError()
        } catch (error) {
            return error
        }
    })

    return (
        <form action={submitAction}>
            <input type="text" name="nombre" disabled={isPending} />
            <button type="submit" disabled={isPending}>
                {isPending ? "Enviando" : "Enviar"}
            </button>
            {isPending && <p>Enviando datos...</p>}
            {error && <p>Error: {error}</p>}
        </form>
    )
}

export default Form_con_action
