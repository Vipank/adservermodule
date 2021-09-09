import React from 'react'
import { Container, Row, Col, Card } from 'reactstrap'
import "./Footer.css"
function Footer() {
    return (
    <>
        <Container className="footer-container">
            <Row style={{padding:0,borderTop:"1px solid black"}}>
                <Col xs={12} md={4} className="mt-2">
                    <i style={{width:"100%"}} className="fas fa-file-contract mb-4"><a href="/"> Content Policy</a> </i>
                    {/* <i style={{width:"100%"}} className="fas fa-file-contract"><a href="/">About Vedanta Society</a> </i> */}
                </Col>
                <Col xs={12} md = {4} className="mt-2">
                    <i className ="fas fa-copyright"> 2018 Vedanta Society Of New York</i>
                    <h6>34 West 71st Street,  New York, NY 10023, USA.</h6>
                    <h6>Phone +1 (212) 877 9197</h6>
                    <h6 style={{color:"green"}}>Thank You For Visiting Us!</h6>
                </Col>
                <Col xs={12} md={4} className="mt-2"  style={{alignItems:"center"}}>
                    <Card style={{maxWidth:"40%",marginLeft:"30%",marginRight:"30%"}}>
                        <button  className="btn btn-primary">SUBSCRIBE</button>
                        <p><b>Newsletter</b></p>
                    </Card>
                   
                </Col>
            </Row>
            
        </Container>
    </>
    )
}

export default Footer
