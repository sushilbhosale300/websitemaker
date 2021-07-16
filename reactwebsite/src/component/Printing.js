import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { PrintImgData } from './SliderData';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import { Button, Link } from '@material-ui/core';



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

const Printing = () => {
    return (
            <div style={{ marginTop:"10px", marginBottom:"12px"}}>
                <div>
                <div style={{ padding: "8px", backgroundColor:"white", marginLeft:"10px", marginRight:"10px" }}>
                    <h3>Best Offeres in Printing </h3> 
                    <Button variant="outlined" color="primary" style={{marginTop: "-35px", float:"right"}}>
                        <Link href="/printing" style={{ textDecoration: "none" }}>
                            View All
                        </Link>
                    </Button>
                    <hr />
              
            <Slider
            slidesToShow={3}
            slidesToScroll={3}
            infinite={false}
            prevArrow ={<PreviousBtn />}
            nextArrow = {<NextBtn />}
            >
                {
                    PrintImgData.map(item => (
                        <div>
                            <Card item = { item }/>
                        </div>
                    ))
                }
                
            </Slider>
        </div>
        </div>
        </div>
        
    )
}

const Card= ( {item , title, price} )=>{
    return(
        <div style={{backgroundColor: "white", textAlign:"center" , padding: "10px", zIndex: "1"}}>
            <div>
            <img src={item} alt="" style={{ width: '100%' , height: "200px", objectFit:'contain' }}  />
            <p style={{ fontSize: "16px", padding: "5px",  color:"#3e3f40", fontWeight:"bold" }}>{title}</p>
            <p style={{ fontSize: "14px", padding: "1px", color: "green" }}> ₹ {price}</p>
            </div>
        </div>
    )
}


export default Printing;