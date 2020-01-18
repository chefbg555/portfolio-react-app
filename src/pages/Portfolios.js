import React, { Component } from 'react'
import Videojuego from '../components/Videojuego'
import Shipship from '../components/Shipship'
import Canvas from '../components/Canvas'
import FreeLance from '../components/FreeLance'
 




class Portfolios extends Component {
  render() {
    setTimeout(function(){
      window.location.reload(1);
    }, 22000)
    
    return (
      <>
        <Canvas/>
        <Videojuego/>
        <FreeLance/>
        <Shipship/>
        
      </>

    )
  }
}


export default Portfolios;