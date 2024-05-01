import { useEffect, useMemo, useState } from "react"

export const useContador = (valorInicial = 0) => {
    const [contador, setContador] = useState(valorInicial)

    const decrementa = () => setContador((prev) => prev - 1)
    const incrementa = () => setContador((prev) => prev + 1)
    const reset = () => setContador(valorInicial)

    useEffect(() => {
        if (contador > 10) {
            console.log("Contador es mayor que 10")
        }
    }, [contador])

    const dobleContador = useMemo(() => {
        return contador * 2
    }, [contador])

    return { contador, decrementa, incrementa, reset, dobleContador }
}