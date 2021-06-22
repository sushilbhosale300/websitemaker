import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/themes/light.css'

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
                content="logintooltip">
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

export default Header;

