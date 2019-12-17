import React from 'react'
import Canvas from "../components/Canvas"




const Landing = props =>{
  const redirectToProjects = () => props.history.push('/portfolios')
  const redirectToAbout =  () => props.history.push('/about')
  const redirectToContact = () => props.history.push('/contact')
  setTimeout(function(){
    window.location.reload(1);
  }, 13000)

  return(
  <>  
  <Canvas/>
    <div className="landing-buttons">
      <button
      id="project"
      type="button"
      style={{position:"absolute",
      top:"20vh",
      left:"35vw",
      background:"none",
      border:"none",
      margin:"0",
      padding:"0",
      cursor:"pointer",
      fontSize: "8rem",
      textAlign:"center"
      }}
      >
      Projects
      </button> 
        
      <button
        id="project"
        type="button"
        onClick={redirectToProjects}
        style={{position:"absolute",
        top:"20vh",
        left:"35vw",
        background:"none",
        border:"none",
        margin:"0",
        padding:"0",
        cursor:"pointer",
        fontSize: "8rem",
        textAlign:"center"
      }}
      >
      Projects 
      </button>

      <button
      id="About-me"
      type="button"
      style={{position:"absolute",
      top:"45vh",
      left:"32vw",
      background:"none",
      border:"none",
      margin:"0",
      padding:"0",
      cursor:"pointer",
      fontSize: "8rem",
      textAlign:"center"
      }}
      >
      About Me
      </button> 
        
      <button
        id="project"
        type="button"
        onClick={redirectToAbout}
        style={{position:"absolute",
        top:"45vh",
        left:"32vw",
        background:"none",
        border:"none",
        margin:"0",
        padding:"0",
        cursor:"pointer",
        fontSize: "8rem",
        textAlign:"center"
      }}
      >
      About Me
      </button>
      <button
      id="About-me"
      type="button"
      style={{position:"absolute",
      top:"70vh",
      left:"34.5vw",
      background:"none",
      border:"none",
      margin:"0",
      padding:"0",
      cursor:"pointer",
      fontSize: "8rem",
      textAlign:"center"
      }}
      >
      Contact 
      </button> 
        
      <button
        id="project"
        type="button"
        onClick={redirectToContact}
        style={{position:"absolute",
        top:"70vh",
        left:"34.5vw",
        background:"none",
        border:"none",
        margin:"0",
        padding:"0",
        cursor:"pointer",
        fontSize: "8rem",
        textAlign:"center"

      }}
      >
      Contact
      </button>
    </div>
  </>
  )
}

export default Landing