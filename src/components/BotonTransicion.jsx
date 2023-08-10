import "./BotonTransicion.css"

// eslint-disable-next-line react/prop-types
const BotonTransicion = ({ children, ...rest }) => (
    <button {...rest} className="boton">
        {children}
    </button>
)

export default BotonTransicion
