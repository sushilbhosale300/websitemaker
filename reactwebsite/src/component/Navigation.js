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
// import AutomationTooltip from '../tooltips/AutomationTooltip'





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
                content={<PrintingTooltip> </PrintingTooltip>}
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
                content={<PackagingTooltip> </PackagingTooltip>}
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
                content={<IndustrialTooltip> </IndustrialTooltip>}
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
                content={<ServicesTooltip> </ServicesTooltip>}
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
                content={<OfferZoneTooltip> </OfferZoneTooltip>}
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

// Tooltip for Automation

const AutomationTooltip = () => {
    return (
        <div className="moretooltip">
            <div className="more__in">
                {/* <span><NotificationsIcon /></span> */}
                <p>Conveyor</p>
            </div>
            <hr />
            <div className="more__in">
                {/* <span><BusinessCenterIcon /></span> */}
                <p>2 & 3 Axis Robots</p>
            </div>
            <hr />
            <div className="more__in">
                {/* <span><LiveHelpIcon /></span> */}
                <p>Winder-Rewinder</p>        
            </div>
            <hr />
            <div className="more__in">
                {/* <span><TrendingUpIcon /></span> */}
                <p>Robots</p>
            </div>
            {/* <hr />
            <div className="more__in">
                <span><GetAppIcon /></span>
                <p> Download App </p>
            </div> */}
           
            
        </div>
    )
}

// Tooltip for Printing

const PrintingTooltip = () => {
    return (
        <div className="moretooltip">
            <div className="more__in">
                {/* <span><NotificationsIcon /></span> */}
                <p>Labels & Stickers</p>
            </div>
            <hr />
            <div className="more__in">
                {/* <span><BusinessCenterIcon /></span> */}
                <p>Ribbons & Printers</p>
            </div>
            <hr />
            <div className="more__in">
                {/* <span><LiveHelpIcon /></span> */}
                <p>Paper, Films & Tapes</p>        
            </div>
            <hr />
            <div className="more__in">
                {/* <span><TrendingUpIcon /></span> */}
                <p>Inks & Solvents</p>
            </div>    
        </div>
    )
}

// Tooltip for Packaging

const PackagingTooltip = () => {
    return (
        <div className="moretooltip">
            <div className="more__in">
                {/* <span><NotificationsIcon /></span> */}
                <p>Labelling</p>
            </div>
            <hr />
            <div className="more__in">
                {/* <span><BusinessCenterIcon /></span> */}
                <p>Case Packing</p>
            </div>
            <hr />
            <div className="more__in">
                {/* <span><LiveHelpIcon /></span> */}
                <p>Palletizing</p>        
            </div>
            <hr />
            <div className="more__in">
                {/* <span><TrendingUpIcon /></span> */}
                <p>Warehousing</p>
            </div>    
        </div>
    )
}

// Tooltip for Industrial

const IndustrialTooltip = () => {
    return (
        <div className="moretooltip">
            <div className="more__in">
                {/* <span><NotificationsIcon /></span> */}
                <p>Machine Equipments</p>
            </div>
            <hr />
            <div className="more__in">
                {/* <span><BusinessCenterIcon /></span> */}
                <p>Tools & Accessories</p>
            </div>
            <hr />
            <div className="more__in">
                {/* <span><LiveHelpIcon /></span> */}
                <p>Tools & Equipment's</p>        
            </div>
            <hr />
            <div className="more__in">
                {/* <span><TrendingUpIcon /></span> */}
                <p>Hardware's & Consumables</p>
            </div>    
        </div>
    )
}

// Tooltip for Services

const ServicesTooltip = () => {
    return (
        <div className="moretooltip">
            <div className="more__in">
                {/* <span><NotificationsIcon /></span> */}
                <p>Job-Works & Projects</p>
            </div>
            <hr />
            <div className="more__in">
                {/* <span><BusinessCenterIcon /></span> */}
                <p>Rental & Refurbished</p>
            </div>
            <hr />
            <div className="more__in">
                {/* <span><LiveHelpIcon /></span> */}
                <p>Jobs & Career</p>        
            </div>
            <hr />
            <div className="more__in">
                {/* <span><TrendingUpIcon /></span> */}
                <p>Social Service</p>
            </div>    
        </div>
    )
}



// Tooltip for OfferZone

const OfferZoneTooltip = () => {
    return (
        <div className="moretooltip">
            <div className="more__in">
                {/* <span><NotificationsIcon /></span> */}
                <p>January Offer</p>
            </div>
            <hr />
            <div className="more__in">
                {/* <span><BusinessCenterIcon /></span> */}
                <p>February Offer</p>
            </div>
            <hr />
            <div className="more__in">
                {/* <span><LiveHelpIcon /></span> */}
                <p>March Offer</p>        
            </div>
            <hr />
            <div className="more__in">
                {/* <span><TrendingUpIcon /></span> */}
                <p>April Offer</p>
            </div>
            <hr />
            <div className="more__in">
                {/* <span><LiveHelpIcon /></span> */}
                <p>May Offer</p>        
            </div>
            <hr />    
        </div>
    )
}



export default Navigation;