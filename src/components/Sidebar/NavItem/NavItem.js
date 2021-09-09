import React from 'react'
import "./NavItem.css"

function NavItem() {
    return (
        
        <div className="nav-item-container">
            <div className="nav-link-container mt-2">
                <a href="#" className="nav-link nav-link-active">
                    <i className="nav-link-icon-library"/>
                    <div className="nav-link-text ">Content Library</div>
                </a>
            </div>
            <div className="nav-link-container mt-2">
                <a href="#" className="nav-link">
                    <i className="nav-link-icon-calendar"/>
                    <div className="nav-link-text ">Calendar</div>
                </a>
            </div>
            <div className="nav-link-container mt-2">
                <a href="#" className="nav-link">
                    <i className="nav-link-icon-insights"/>
                    <div className="nav-link-text ">Insights</div>
                </a>
            </div>
            <div className="nav-link-container mt-2">
                <a href="#" className="nav-link">
                    <i className="nav-link-icon-settings"/>
                    <div className="nav-link-text ">Settings</div>
                </a>
            </div>
             <div className="nav-link-container mt-2">
                <a href="#" className="nav-link">
                    <i className="nav-link-icon-resources"/>
                    <div className="nav-link-text ">Instagram Accounts</div>
                </a>
            </div>
            <div className="nav-link-container mt-2">
                <a href="#" className="nav-link">
                    <i className="nav-link-icon-inbox"/>
                    <div className="nav-link-text ">Inbox</div>
                </a>
            </div>

        </div> 
       
       
    )
}

export default NavItem
