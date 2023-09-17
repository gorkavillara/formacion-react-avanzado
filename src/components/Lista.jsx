import { memo } from "react"
import { obtenElementos } from "../assets/functions"

const Lista = () => {
    const elementos = obtenElementos()
    return (
        <ul>
            {elementos.map((el, ind) => (
                <li key={ind}>{el}</li>
            ))}
        </ul>
    )
}

export default memo(Lista)
