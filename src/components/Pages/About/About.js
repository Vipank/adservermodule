import React from 'react'
import "./About.css"
import {
    Card, CardText
  } from 'reactstrap';
import {part1,part2,part3} from "./content"
import gurus_big from "../../../images/gurus_big.jpeg"
function About() {
    return (
    <>
        <div className="sub-container">
            <div className="heading mt-2">
                <u>About Vedanta Society New York</u> 
            </div>
            <div className="gurus-image-container">
                 <img className="gurus-image img-fluid" src={gurus_big} alt="Guru Image"/> 
            </div>
            <Card className="mt-3">
                <CardText>
                   {part1}
               </CardText>
            </Card>
            <Card className="">
                <CardText>
                  {part2}
               </CardText>
            </Card>
            <Card className="">
                <CardText>
                  {part3}
               </CardText>
            </Card>
            <Card className="">
                <CardText>
                    The Society is one of the number of Vedanta Centers in the US, and is guided by Swamis (monks) of the Order, who serve as ministers.
               </CardText>
            </Card>
            <div className="heading mt-4">
                <u>History of Vedanta Society New York</u> 
            </div>
            <div className="content mt-3">
                The Vedanta Society of New York (VSNY) is affiliated with the Ramakrishna Math and Ramakrishna Mission. In fact, VSNY is the Order's first Center started by Swami Vivekananda, in 1894. It was an historical event for the Order, for the seed of the world-wide Ramakrishna Movement was sown here in New York over a century ago.
                Swami Vivekananda was the first teacher of Vedanta to come to the West, who drew wide acclaim by his electrifying addresses at the World's Parliament of Religions held in Chicago in 1893. After the conclusion of the Parliament, a group of American students interested to learn more about Vedanta gathered about the Swami, and the first Vedanta Center in the West was started in New York City.
            </div>
        </div>
    </>
    )
}

export default About
