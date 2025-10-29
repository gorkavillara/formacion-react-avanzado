import styles from "./Card.module.css"

const Card = ({ colorTexto, textoPrimario, textoSecundario, isSecond }) => {
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

export default Card 
