import React, { Component } from 'react'
import { Carousel } from "react-responsive-carousel"
import shipship1 from "./images/shipship1.png"
import shipship2 from "./images/shipship2.png"
import shipship3 from "./images/shipship3.png"
import shipship4 from "./images/shipship4.png"

class Shipship extends Component {
  render() {
    return (
      <Carousel autoPlay className="carousel-2">
        <div>
          <img src={shipship1} alt="shipship" />
          <p className="legend">Landing</p>
        </div>
        <div>
          <img src={shipship2} alt="shipship" />
          <p className="legend"> Three.js/WebGL Interactive Cube </p>
        </div>
        <div>
        <img src={shipship3} alt="shipship" />
        <p className="legend">React components getting information from Easypost api </p>
        </div>
        <div>
          <img src={shipship4} alt="shipship" />
          <p className="legend">Print label from Easypost API</p>
        </div>
      </Carousel>
    )
  }
}


export default Shipship;