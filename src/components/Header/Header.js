import React,{useState} from 'react'
import "./Header.css"
import profile from "../../images/gurus.jpeg"

function Header() {
   

    return (
      <>
        <div className="header-left">
          <i class="fas fa-clipboard-list" color="blue" style={{fontSize:"30px",color:"#1A77F2"}}></i>
          <div className="brand-name">
            Task Manager
          </div>
        </div>
        <div className="header-right">
            <div style={{display:"flex",justifyContent: "center",alignItems:"center"}}>
              <div className="profile-pic-container mr-2">
                <img src={profile} height="28" width="28" className="profile-pic"/>
              </div>
              <div className="header-notification-container mr-2">
                {/* <i class="fas fa-user-alt" color="blue" style={{fontSize:"20px"}}></i> */}
                <i class="header-icon-notification"></i>
              </div>
              <div className="header-help-container mr-2">
                {/* <i class="fas fa-user-alt" color="blue" style={{fontSize:"20px"}}></i> */}
                <i class="header-icon-help"></i>
              </div>
              <div className="header-dropdown-container mr-2">
                {/* <i class="fas fa-user-alt" color="blue" style={{fontSize:"20px"}}></i> */}
                <i class="header-icon-dropdown"></i>
              </div>

             
              


            </div>
          </div>
      </>
         
    )
}

export default Header
