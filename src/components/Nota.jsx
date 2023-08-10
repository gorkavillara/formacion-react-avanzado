import PropTypes from "prop-types"
import BotonTransicion from "./BotonTransicion"

const Nota = ({ nota, eliminarNota }) => {
    
    return (
        <div>
            <span style={{ marginRight: "1rem" }}>{nota.texto}</span>
            <BotonTransicion onClick={eliminarNota}>🗑️</BotonTransicion>
        </div>
    )
}

Nota.propTypes = {
    nota: PropTypes.object,
    eliminarNota: PropTypes.func
}

export default Nota
