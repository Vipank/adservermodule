import React from 'react'
import "./Emblem.css"
import logo_image from '../../../images/logo_big.png'
import {
    Card, CardText
  } from 'reactstrap';
import {topQuote,belowParaAfterLink, belowParaBeforeLink} from "./content"
function Emblem() {
    return (
        <>
            <div className="sub-container">
                <div className="heading mt-2">
                    <u>Emblem Of Ramakrishna Order</u> 
                </div>
                <div className="emblem-image-container">
                    <img className="emblem-image img-fluid" src={logo_image} alt="Emblem Image"/>
                </div>
                <Card className="mt-3">
                    <CardText>
                       <i>{topQuote}</i>

                   </CardText>
                </Card>
                <div className="content mt-3">
                    <p>{belowParaBeforeLink} <a href="/"><b>Swami Vivekananda</b></a>{belowParaAfterLink}</p>
                </div>
            </div>
        </>
    )
}

export default Emblem
