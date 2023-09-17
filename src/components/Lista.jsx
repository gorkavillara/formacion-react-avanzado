import { useDeferredValue } from "react"
import { useMemo } from "react"

const creaLista = texto => {
    const lista = []
    const numElementos = 50000
    for (let i = 0; i < numElementos; i++) {
        lista.push(texto)
    }
    return lista
}

const Lista = ({ input }) => { // eslint-disable-line react/prop-types
    const deferredInput = useDeferredValue(input)
    const elementos = useMemo(() => creaLista(deferredInput), [deferredInput])
    return (
        <ul>
            {elementos.map((el, ind) => (
                <li key={ind}>{el}</li>
            ))}
        </ul>
    )
}

export default Lista
