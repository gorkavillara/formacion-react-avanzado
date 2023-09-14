import PropTypes from "prop-types"
import styles from "./Card.module.css"

const Card = ({ colorTexto, textoPrimario, textoSecundario }) => {
    return (
        <div className={styles.card} style={{ color: colorTexto }}>
            <div className={styles["first-content"]}>
                <span>{textoPrimario}</span>
            </div>
            <div className={styles["second-content"]}>
                <span>{textoSecundario}</span>
            </div>
        </div>
    )
}

Card.propTypes = {
    textoPrimario: PropTypes.string,
    textoSecundario: PropTypes.string,
    colorTexto: PropTypes.string
}

export default Card 
