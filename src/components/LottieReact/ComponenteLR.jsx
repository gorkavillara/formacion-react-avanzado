import { useLottie } from "lottie-react"
import animation from "../../assets/animation_lottie.json"

const ComponenteLR = () => {
    const options = {
        animationData: animation,
        loop: true
    }

    const { View } = useLottie(options)
    return <div>{View}</div>
}

export default ComponenteLR
