import React, { Component } from 'react'
import { Carousel } from "react-responsive-carousel"
import game1 from "./images/game1.png"
import game2 from "./images/game2.png" 
import game3 from "./images/game3.png" 
import game4 from "./images/game4.png"


class Videojuego extends Component {
  render() {
    return (
      <div className="game-container">
        <a href="http://videojuego.herokuapp.com">       
          <div>
            <h2>VideoJuego</h2>
          </div>
        </a>
          <Carousel autoPlay transitionTime={600} className="game-carousel">
            <div>
              <img src={game1} alt="VideoJuego" />
              <p className="legend"> Search for a game or random game</p>
            </div>
            <div>
              <img src={game2} alt="VideoJuego" />
              <p className="legend"> Game Search </p>
            </div>
            <div>
            <img src={game3} alt="VideoJuego" />
            <p className="legend">Found your game</p>
            </div>
            <div>
              <img src={game4} alt="VideoJuego" />
              <p className="legend">Game description</p>
            </div>
          </Carousel>
      </div>
    )
  }
}


export default Videojuego;