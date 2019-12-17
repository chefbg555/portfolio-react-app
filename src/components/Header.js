import React, { Component } from 'react'
import github from "./images/github.png"
import linkedin from "./images/linkedin.png"

class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="main-title"><span className="thin">Brendan Guralsky's  </span>Portfolio</h1>
        <a className="handle" href="https://github.com/chefbg555"><img src={github} alt="github"></img></a>
        <a className="linked-in" href="https://www.linkedin.com/in/brendan-guralsky"><img src={linkedin} alt="LinkedIn"></img></a>
        
      </div>
    )
  }
}

export default Header
