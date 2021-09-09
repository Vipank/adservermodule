import React from 'react'
import "./CircularprogressCustom.css"
import circle from "../../images/circle.png"

function CircularprogressCustom() {
    return (
        <div className="circularprogresscustom-container">
            <div className = "flex-container">
                <img src={circle} className="circle-animation" height={20} width={20}/>
            </div>
            
        </div>
    )
}

export default CircularprogressCustom
