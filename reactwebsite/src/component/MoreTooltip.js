import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import GetAppIcon from '@material-ui/icons/GetApp';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';



const MoreTooltip = () => {
    return (
        <div className="moretooltip">
            <div className="more__in">
                <span><NotificationsIcon /></span>
                <p>Notification Preferences</p>
            </div>
            <hr />
            <div className="more__in">
                <span><BusinessCenterIcon /></span>
                <p>Sell on Flipcart</p>
            </div>
            <hr />
            <div className="more__in">
                <span><LiveHelpIcon /></span>
                <p>24*7 Customer Service</p>        
            </div>
            <hr />
            <div className="more__in">
                <span><TrendingUpIcon /></span>
                <p>Advertise</p>
            </div>
            <hr />
            <div className="more__in">
                <span><GetAppIcon /></span>
                <p> Download App </p>
            </div>
           
            
        </div>
    )
}

export default MoreTooltip
