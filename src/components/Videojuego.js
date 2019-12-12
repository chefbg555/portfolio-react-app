import { Carousel } from "react-responsive-carousel"
import React, { Component } from 'react'
import game1 from "./images/game1.png"
import game2 from "./images/game2.png" 
import game3 from "./images/game3.png" 
import game4 from "./images/game4.png"
import game5 from "./images/game5.png"

class Videojuego extends Component {
  render() {
    return (
      <div className="game-container">
        <div>
          <h2>VideoJuego</h2>
        </div>
          <Carousel autoPlay transitionTime={600} className="game-carousel">
            <div>
              <img src={game1} alt="VideoJuego" />
              <p className="legend">Landing</p>
            </div>
            <div>
              <img src={game2} alt="VideoJuego" />
              <p className="legend"> Three.js/WebGL Interactive Cube </p>
            </div>
            <div>
            <img src={game3} alt="VideoJuego" />
            <p className="legend">React components getting information from Easypost api </p>
            </div>
            <div>
              <img src={game4} alt="VideoJuego" />
              <p className="legend">Print label from Easypost API</p>
            </div>
            <div>
              <img src={game5} alt="VideoJuego" />
              <p className="legend">Print label from Easypost API</p>
            </div>
          </Carousel>
      </div>
    )
  }
}


export default Videojuego