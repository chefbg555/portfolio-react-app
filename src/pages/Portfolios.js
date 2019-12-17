import React, { Component } from 'react'
import Videojuego from '../components/Videojuego'
import Shipship from '../components/Shipship'
import Canvas from '../components/Canvas'
 




class Portfolios extends Component {
  render() {
    setTimeout(function(){
      window.location.reload(1);
    }, 15000)
    
    return (
      <>
        <Canvas/>
        <Videojuego/>
        <Shipship/>
      </>

    )
  }
}


export default Portfolios;