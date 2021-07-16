import React from 'react'
import {Container, Row, Col} from "reactstrap"
import { FooterImgData } from './SliderData';
import {  Link } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Footer = () => {
    return (
        <Container 
        style={{ backgroundColor:"#172337", fontSize:"12px", marginBottom:"9px", boxSizing:"border-box" }}
        fluid
        tag="footer"
        className="text-left text-white p-5" 
        >
        <Row>
            <Col sm={4}>
                <h6 style={{ color:"#878787"}}>CONTACT US</h6>
                {/* <LocationOnIcon /> */}
                <p>Kshivo Industries A101, 
                    Parmar Industrial Mall, 
                    Gokhiware Village Road, 
                    Near Range Office, Vasai (East), Mumbai - 401208
                </p>
                <p>
                1234567890
                </p>
                <Link 
                style={{color:"white"}}
                href="#">
                    sales@kshivo.com
                </Link>
            
            </Col>
            <Col sm={3}>
            <h6 style={{ color:"#878787"}}>INFORMATION</h6>
            <p>
            <Link 
            style={{color:"white"}}
            href="#">
            Terms & Conditions
            </Link>
            </p>
            <p>
            <Link 
            style={{color:"white"}}
            href="#">
            Privacy Policy
            </Link>
            </p>
            <p>
            <Link 
            style={{color:"white"}}
            href="#">
            Refund & Cancellation Policy
            </Link>
            </p>
            </Col>
            <Col sm={3}>
            <h6 style={{ color:"#878787"}}>QUICK LINKS</h6>
            <Link 
            style={{color:"white"}}
            href="#">
                 About Us
            </Link>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col sm={3}>
            <div style={{ padding: "2px", display:"flex" }}>
                    <img src="../assets/paypal.png"  alt="paypal"  height="auto" />
                    <span style={{ marginLeft: "2px"}}>
                        <img src="../assets/visa.png"  alt="visa"  height="auto" />
                    </span>
            </div>
            </Col>
            <Col sm={9}>
            <div style={{ padding: "2px", display:"flex", textAlign:"right" , float:"right"}}>
                    <img src="../assets/discover.png"  alt="paypal"  height="auto" />
                    <span style={{ marginLeft: "2px"}}>
                        <img src="../assets/maestro.png"  alt="visa"  height="auto" />
                    </span>
                    <span style={{ marginLeft: "2px"}}>
                        <img src="../assets/visa.png"  alt="visa"  height="auto" />
                    </span>
                    <span style={{ marginLeft: "2px"}}>
                        <img src="../assets/paypal.png"  alt="visa"  height="auto" />
                    </span>
                    
            </div>
            </Col>
        </Row>
        </Container>
    )
}

export default Footer
