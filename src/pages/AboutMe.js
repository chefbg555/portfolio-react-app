import React, { Component } from 'react'
import instagram from "../components/images/chefbg.png"
import Canvas from "../components/Canvas"
import Typist from "react-typist"






class AboutMe extends Component {
  render() {
    setTimeout(function(){
      window.location.reload(1);
    }, 230000)
    return (
      <div className="brendan">
        <Canvas/>
        <a className="instagram" href="https://www.instagram.com/brendanguralsky5/"><img src={instagram} alt="instagram"></img></a>
        <div className="typist-container">
        <Typist cursor={{hideWhenDone: true}}>
             Hi I'm Brendan Guralsky, I really enjoy working with React and Node.js!!! I'm open to
          working with any framework. I understand the fundamentals of working with a database  I love to learn new things, and am READY for any opportunity presented
          to me!!!
          </Typist>
        </div>
      </div>
    )
  }
}
export default AboutMe
