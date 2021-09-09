import React from 'react'
import "./Card.css"
import Dropdown from "../../components/Dropdown/Dropdown"
import Searchbox from "../../components/Searchbox/Searchbox"
import CodeSnippet from '../CodeSnippet/CodeSnippet'

function Card() {
    return (
        <div className="card-container">
            <div className="custom-card">
                <div className="card-header">
                    <div className="card-nav-item">
                        <button className="btn btn-content">All Tasks</button>
                    </div>
                    <div className="card-nav-item active">
                        <button className="btn btn-content">Today</button>
                    </div>
                    <div className="card-nav-item">
                        <button className="btn btn-content">Yesterday</button>
                    </div>
                    <div className="card-nav-item">
                        <button className="btn btn-content">Tomorrow</button>
                    </div>
                    <div className="card-nav-item">
                        <button className="btn btn-content">Carousel</button>
                    </div>
                    <div className="card-nav-item">
                        <button className="btn btn-content">IGTV</button>
                    </div>
                </div>
                <div className="card-body">
                    {/* <Dropdown/>
                    <Searchbox/>
                    <CodeSnippet/> */}
                </div>
            </div>
        </div>
    )
}

export default Card
