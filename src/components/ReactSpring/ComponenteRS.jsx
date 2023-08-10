import { useSpring, animated } from "@react-spring/web"

const ComponenteRS = () => {
    const [styles, api] = useSpring(() => ({ transform: "scale(1)" }))

    const handleClick = () => {
        api.start({
            to: {
                transform:
                    styles.transform.get() === "scale(2)"
                        ? "scale(1)"
                        : "scale(2)"
            }
        })
    }

    return (
        <animated.div
            onClick={handleClick}
            style={{ cursor: "pointer", fontSize: "2rem", ...styles }}
        >
            ⚛️
        </animated.div>
    )
}

// const ComponenteRS = () => {
//     const valores = useSpring({
//         from: { opacity: 0 },
//         to: { opacity: 1 }
//     })
//     return <animated.div style={{ ...valores }}>ComponenteRS</animated.div>
// }

export default ComponenteRS
