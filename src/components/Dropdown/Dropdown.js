import React from 'react'
import "./Dropdown.css"

function Dropdown() {
    return (
        <div className="dropdown-container">
            <div className="identifier-container mr-2">
                <div className="identifier"/>
            </div>
            <div className="dropdown-text-container">
                <div className="dropdown-text">
                    <div className="mr-1 ">Task Status:</div>
                    <div className="dropdown-text-right-text">Progress</div>
                </div>
            </div>
            <div className="dropdown-icon-container">
                <div className="dropdown-icon">
                    <i class="fas fa-caret-down" style={{fontSize:"20px",color:"black"}}></i>
                </div>
            </div>
        </div>
    )
}

export default Dropdown
