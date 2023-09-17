import React from "react"
import PropTypes from "prop-types"
import styles from "./Boton.module.css"

const Boton = ({ label, backgroundColor }) => {
    return (
        <button
            className={styles.button}
            style={{ backgroundColor }}
        >
            {label}
        </button>
    )
}

Boton.propTypes = {
    label: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string
}

Boton.defaultProps = {
    label: "Botón",
    backgroundColor: "#2b2b2b"
}

export default Boton
