import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { SliderData } from './SliderData';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';



const PreviousBtn = (props) =>{
    const {className, onClick} = props
    return(
        <div className={className} onClick={onClick}>
            <ArrowBackIos />
        </div>
    )
}

const NextBtn = (props) =>{
    const {className, onClick} = props
    return(
        <div className={className} onClick={onClick}>
            <ArrowForwardIos />
        </div>
    )
}

const ImageSlider = () => {
    return (
            <div style={{ padding: "12px" }}>
            <Slider
            // autoplay 
            // autoplaySpeed={}
            // infinite
            prevArrow ={<PreviousBtn />}
            nextArrow = {<NextBtn />}
            >
                {
                    SliderData.map(item => (
                        <div>
                            <img src={item} alt="img__4" style={{ width: "100%", height: "280px" }}/>
                        </div>
                    ))
                }
                
            </Slider>
        </div>
        
        
    )
}

export default ImageSlider
