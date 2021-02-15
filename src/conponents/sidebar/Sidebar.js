import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"

function Sidebar( ) {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return(
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="data:image/jpeg;base64,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"
                 alt =""/>
                <Avatar className="sidebar__avatar"/>
                <h2>Abhijit Majumder</h2>
                <h4>abhijitmajumder2021@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who Viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Who Viewed you</p>
                    <p className="sidebar__statNumber">2,678</p>
                </div>
            </div>
            <div className="sidebar__botton">
                    <p>Recent</p>
                    {recentItem('reactjs')}
                    {recentItem('pogramming')}
                    {recentItem('software')}
                    {recentItem('software engeeneering')}
                    {recentItem('design')}
                    {recentItem('developer')}
            </div>
        </div>
    );
}

export default Sidebar;