
import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {Helmet} from "react-helmet"
import './App.css';
import Landing from './pages/Landing'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Portfolios from './pages/Portfolios'
import Header from './components/Header'
import AboutMe from "./pages/AboutMe"
import ContactMe from "./pages/ContactMe"
import HomeButton from './components/HomeButton';


class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>
          <Helmet>
            <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js"></script>
            <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js"></script>
            <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js"></script>
          </Helmet>
        </div>
                <Switch>
                  <Route exact path="/" component={Landing}/>
                  <Route path="/portfolios" component={Portfolios}/> 
                  <Route path="/about" component={AboutMe}/>
                  <Route path="/contact" component={ContactMe}/>
                </Switch>
              <Header/> 
              <HomeButton/> 
      </BrowserRouter>
    
    )

  }
}


export default App;
