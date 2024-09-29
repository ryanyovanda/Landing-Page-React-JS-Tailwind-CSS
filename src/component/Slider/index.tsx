import { FC } from "react"
import "./Styles.css"


const Slider:FC = () => {
    return(
        <>
        <div className="flex h-80">
            <div className="flex ">
            <div className="slider-image"><img src="./src/assets/image 33.png" alt="" /></div>
            <div className="slider-image"><img src="./src/assets/image 33.png" alt="" /></div>
            <div className="slider-image"><img src="./src/assets/image 33.png" alt="" /></div>
            <div className="slider-image"><img src="./src/assets/image 33.png" alt="" /></div>
            </div>
        </div>
        </>
    )
}

export default Slider;