
import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { ImageData } from './SliderData';
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

const Automation = () => {

    return (

        <div >
            <div>
                <div style={{ padding: "8px", backgroundColor:"white", marginLeft:"10px", marginRight:"10px" }}>
                    <h3>Automation BestSellers</h3> 
                    <Button variant="outlined" color="primary" style={{marginTop: "-35px", float:"right"}}>
                        <Link href="/automation" style={{ textDecoration: "none" }}>
                            View All
                        </Link>
                    </Button>
                    <hr />
                    <Slider
                    prevArrow ={<PreviousBtn />}
                    nextArrow = {<NextBtn />}
                    slidesToShow={3}
                    slidesToScroll={3}
                    infinite={false}
                    >
                        { 
                            ImageData.map(item => (
                                <Card item = { item }/>
                            ))
                        }    
                    </Slider>
                </div>   
            </div>
        </div>   
    );
};


const Card= ( {item , title, price} )=>{
    return(

        <div style={{backgroundColor: "white", textAlign:"center" , padding: "8px", zIndex: "1"}}>
            <img src={item} alt="" style={{ width: '100%' , height: "180px", objectFit:'contain' }}  />
            <p style={{ fontSize: "16px", padding: "5px",  color:"#3e3f40", fontWeight:"bold" }}>Belt Conveyor</p>
            <p style={{ fontSize: "14px", padding: "1px", color: "green" }}> ₹ 68000</p>
        </div>
    );
};



export default Automation;