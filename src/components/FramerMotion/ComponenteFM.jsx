import { motion } from "framer-motion"
import { useState } from "react"

const ComponenteFM = () => {
    const [escala, setEscala] = useState(1)
    return (
        <>
            <motion.div
                animate={{ scale: escala }}
                transition={{ type: "spring" }}
            >
                ⚛️
            </motion.div>
            <input
                style={{ marginTop: "10rem"}}
                type="range"
                min={0.1}
                step={0.1}
                max={10}
                value={escala}
                onChange={(e) => setEscala(Number(e.target.value))}
            />
            <span>{escala}</span>
        </>
    )
}

export default ComponenteFM
