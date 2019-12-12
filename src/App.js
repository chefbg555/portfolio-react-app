
import React, { Component } from 'react'
import {Helmet} from "react-helmet"
import './App.css';
import Shipship from './components/Shipship'
import Videojuego from './components/Videojuego'
import "react-responsive-carousel/lib/styles/carousel.min.css"


const canvasStyle = {
  position: "fixed",
  top:0,
  left:0
}

class App extends Component{
  render(){
    return (
      <div className="container demo">
        <Helmet>
          <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js"></script>
          <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js"></script>
          <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js"></script>
        </Helmet>
          <div className="the-container">
            <div className="content">
              <div id="large-header" className="large-header">
                <canvas id="demo-canvas" style={canvasStyle}></canvas>
                  <h1 className="main-title"><span className="thin">Brendan Guralsky's  </span>Portfolio</h1>
                  <a className="handle" href="https://github.com/chefbg555"><span className="thin">@</span>chefbg555</a>
                    <div className="carousels-container">
                        <div className="carousels">
                          <Videojuego/>
                        </div>
                        <div>
                          <Shipship/>
                        </div>
                    </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}



export default App;
