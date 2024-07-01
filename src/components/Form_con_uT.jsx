import { useTransition } from "react"

const Form_con_uT = () => {
    const [isPending, startTransition] = useTransition()

    const formAction = () => {
        startTransition(async () => {
            // Aquí simulamos el envío de datos al servidor
            return new Promise((res) => {
                setTimeout(() => {
                    res()
                }, 2000)
            })
        })
    }
    return (
        <form action={formAction}>
            <span>Formulario con useTransition</span>
            <br />
            <input type="text" name="nombre" disabled={isPending} />
            <button type="submit" disabled={isPending}>
                {isPending ? "Enviando" : "Enviar"}
            </button>
            {isPending && <p>Enviando datos...</p>}
        </form>
    )
}

export default Form_con_uT
