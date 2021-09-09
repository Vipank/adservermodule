import logo from "./logo.svg";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Banner from "./components/Banner/Banner";
import SideBar from "./components/Sidebar/SideBar"
import Card from "./components/Card/Card"
import { Container, Row, Col } from "reactstrap";
import Emblem from "./components/Pages/Emblem/Emblem";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Footer from "./components/Footer/Footer";
import About from "./components/Pages/About/About";
import CircularprogressCustom from "./components/CircularprogressCustom/CircularprogressCustom"

function App() {
  return (
    <div className="app-container">
      {/* <CircularprogressCustom/> */}
        <div className="header-container">
          <Header />
        </div>
        <div className="body-container">
          <div className="left-side-bar-container">
              <SideBar/>
          </div>
          <div className="right-container">
            <div className="path-container">
                <b>Welcome To Task Manager</b>
            </div>
            <div className="content-container">
              <Card/>
            </div>
            
          </div>
        </div>
       
        {/* <div className="footer mt-2">
           <Footer/> 
        </div> */}
    </div>
  );
}

export default App;
