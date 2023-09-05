import { motion } from "framer-motion"

const Ejercicio02 = () => {
    return (
        <div>
            <motion.button
                whileHover={{ scale: 2 }}
                transition={{ duration: 0.5 }}
            >
                Ejercicio02
            </motion.button>
        </div>
    )
}

export default Ejercicio02
