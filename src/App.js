
import React, { Component } from 'react'
import './App.css';
import Shipship from './components/Shipship'
import "react-responsive-carousel/lib/styles/carousel.min.css"

class App extends Component{
  render(){
    return (
      <div className="App">
        <div className="c2-container">
          <Shipship/>
        </div>
      </div>
    )
      
  }
}

export default App;
