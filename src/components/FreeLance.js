import React, {Component} from 'react'
import { Carousel } from "react-responsive-carousel"
import link4 from  './images/linkvsrargh00004.png'
import link3 from  './images/linkvsrargh00003.png'
import link2 from  './images/linkvsrargh00002.png'
import link1 from  './images/linkvsrargh00001.png'



class FreeLance extends Component {
  render() {
    return (
      <div className="linkvsrargh-container">
        <a href="http://linkvsrargh.com">
        <div>
          <h2>LINKVSRARGH</h2>
        </div>  
          <Carousel autoPlay transitionTime={600} className="linkvsrargh-carousel">
            <div>
              <img src={link4} alt="linkvsrargh" />
              <p className="legend">FIRST FREELANCE OPPORTUNITY</p>
            </div>
            <div>
              <img src={link3} alt="linkvsrargh" />
              <p className="legend">Youtube api V3 for each respective channel</p>
            </div>
            <div>
            <img src={link2} alt="LinkvsRargh" />
            <p className="legend">Latest 25 videos </p>
            </div>
            <div>
              <img src={link1} alt="Linkvsrargh" />
              <p className="legend">Working on channel information</p>
            </div>
          </Carousel>
        </a>
      </div>
    )
  }
}


export default FreeLance;