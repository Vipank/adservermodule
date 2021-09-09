import React from 'react'
import "./Searchbox.css"

function Searchbox() {
    return (
        <div className="searchbox-container">
            <div className="searchicon-container">
                <div className="search-icon"></div>
            </div>
             {/* <div className="inputbox-container mr-2"> */}
                <input className="search-inputbox" type="txt" placeholder="Search ..."  mr-2/>
            {/* </div> */}
            
        </div>
    )
}

export default Searchbox
