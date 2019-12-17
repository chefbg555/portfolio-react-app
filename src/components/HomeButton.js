import React from 'react'
import {Link} from 'react-router-dom'



const HomeButton = props =>{
  return(
    <>
      <div className='home-button'>
        <Link to="/">
          <button
            id="home-button "
            type="button"
            style={{position:"absolute",
            top:"8vh",
            left:"4vw",
            background:"none",
            border:"none",
            margin:"0",
            padding:"0",
            cursor:"pointer",
            fontSize: "2rem",
            outline:"none"
            }}
            >
            Back to Home
          </button> 
          <button
            id="home-button"
            type="button"
            style={{position:"absolute",
            top:"8vh",
            left:"4vw",
            background:"none",
            border:"none",
            margin:"0",
            padding:"0",
            cursor:"pointer",
            fontSize: "2rem",
            outline:"none"
            }}
            >
            Back to Home
          </button>
        </Link>
      </div>
    </>
  )
}
export default HomeButton