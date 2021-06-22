import React, { useState } from 'react'
import {
    Container,
    Nav, 
    Navbar, 
    NavDropdown, 
    NavbarBrand, 
    NavItem,
    Form,
    FormControl,
    Button,
    Input

} from 'react-bootstrap'

import { FaAlignCenter, FaSearch } from 'react-icons/fa'

  import Automation from './Automation'
  import Industrial from './Industrial'
  import Printing from './Printing'
  import Offerzone from './Offerzone';
  import Services from './Services'
  import { SliderData } from './SliderData';

import NotificationsIcon from '@material-ui/icons/Notifications';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import GetAppIcon from '@material-ui/icons/GetApp';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/themes/light.css'
import MoreTooltip from './MoreTooltip';
import AutomationTooltip from '../tooltips/AutomationTooltip'





const Navigation = ( { title } ) => {

    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }


    return(
        <div>
            <Navbar bg="light" variant="light">
               <Container>
               <Navbar.Brand href="#home"></Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/automation">
                    <div style={{ padding: "10px"}}>
                    <img src="../assets/1.png"  alt="i1" width="50px" height="auto"/>
                    </div>
                <Tippy
                theme="light"
                // visible="true"
                content={<AutomationTooltip> </AutomationTooltip>}
                interactive="true">
                <span>Automation</span>
                </Tippy>
                <ExpandMoreIcon />
                </Nav.Link>
                <Nav.Link href="/printing">
                <div style={{ padding: "10px"}}>
                    <img src="../assets/2.png"  alt="i1" width="50px" height="auto"/>
                </div>
                <Tippy 
                theme="light"
                // visible="true"
                content={<MoreTooltip> </MoreTooltip>}
                interactive="true">
                <span>Printing</span>
                </Tippy>
                <ExpandMoreIcon />
                </Nav.Link>
                <Nav.Link href="/packaging">
                <div style={{ padding: "10px"}}>
                    <img src="../assets/3.png"  alt="i1" width="50px" height="auto"/>
                </div>
                <Tippy 
                theme="light"
                // visible="true"
                content={<MoreTooltip> </MoreTooltip>}
                interactive="true">
                <span>Packaging</span>
                </Tippy>
                <ExpandMoreIcon />
                </Nav.Link>
                <Nav.Link href="/industrial">
                <div style={{ padding: "10px"}}>
                    <img src="../assets/1.png"  alt="i1" width="50px" height="auto"/>
                </div>
                <Tippy 
                theme="light"
                // visible="true"
                content={<MoreTooltip> </MoreTooltip>}
                interactive="true">
                <span>Industrial</span>
                </Tippy>
                <ExpandMoreIcon />
                </Nav.Link>
                <Nav.Link href="/services">
                <div style={{ padding: "10px"}}>
                    <img src="../assets/2.png"  alt="i1" width="50px" height="auto"/>
                </div>
                <Tippy 
                theme="light"
                // visible="true"
                content={<MoreTooltip> </MoreTooltip>}
                interactive="true">
                <span>Services</span>
                </Tippy>
                <ExpandMoreIcon />
                </Nav.Link>
                <Nav.Link href="/offerzone">
                <div style={{ padding: "10px"}}>
                    <img src="../assets/3.png"  alt="i1" width="50px" height="auto"/>
                </div>
                <Tippy 
                theme="light"
                // visible="true"
                content={<MoreTooltip> </MoreTooltip>}
                interactive="true">
                <span>Offer Zone</span>
                </Tippy>
                <ExpandMoreIcon />
                </Nav.Link>
                </Nav>  
               </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;