import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/themes/light.css'
import { Row, Col } from "reactstrap";
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import Popup from './Popup';

import MoreTooltip from './MoreTooltip'


const Header = () => {

    

    return (
        <div className="header">
            <div className="head_logo">
                <img src="./assets/KLogo.png" height="30px" width="180px"/>
            </div>
            <div className="head_search">
                <input type="text"
                placeholder="Search for Products, brands and more"
                />
                <SearchIcon />
            </div>
            <div className="head_login">
                <Tippy
                theme="light"
                // visible="true"
                interactive="true"
                content={<LoginTooltip></LoginTooltip>}>
                <button>Login</button>
                </Tippy>
                  
            </div>
            <div className="head_more">
                <Tippy 
                theme="light"
                // visible="true"
                content={<MoreTooltip> </MoreTooltip>}
                interactive="true">
                <span>More</span>
                </Tippy>
                <ExpandMoreIcon />
            </div>
            <div className="head_cart">
                <ShoppingCartIcon />
                Cart
            </div>
        </div>
        
    )
}

// Tooltip for login

const LoginTooltip = () => {
    const [ buttonPopup, setButtonPopup] = useState(false)
    return (
        <div style={{ marginTop:"px" }}>
             <Row className="logintooltip"> 
                <Col xs={6} className="">
                New Customer?
                {/* <button onClick={() => setButtonPopup(true)}>Sign Up</button> */}
                <Link href="/signup">
                    Sign Up?
                </Link>
                {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h1>POPUP </h1>
                </Popup> */}
                </Col>
                <Col xs={6} className="">
                Already an User?
                <Link href="/signin">
                    Sign In
                </Link>
                </Col>
            </Row>
              
        </div>
    )
}

export default Header;

