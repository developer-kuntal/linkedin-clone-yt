import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt=""/>
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text"/>

                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon}  title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon}  title="Jobs"/>
                <HeaderOption Icon={ChatIcon}  title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon}  title="Notification"/>
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4E03AQEQpMotS3EXew/profile-displayphoto-shrink_100_100/0/1516765697319?e=1619049600&v=beta&t=WUscAeX02NomrHoUv1bdrpBjuiGr9bcdki_UQifX55g"/>
            </div>
        </div>
    )
}

export default Header
