import React, {useEffect, useState}from 'react';
import { render } from '@testing-library/react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect
} from "react-router-dom";

import Video from './../src/video/video.mp4';
import Mina from './img/bg/mina.jpg';
import logo from './logo.svg';

import Nav from './componentes/menu/nav';
import Portfolio from './componentes/portfolio';
import Sobre from './componentes/sobre';
import Info from './componentes/info';
import Footer from './componentes/footer';
import Carousel from './componentes/carousel';
import Orcamento from './componentes/orcamento';
import Contato from './componentes/contato';
import Projetos from './componentes/projetos';

export default function App()
{
  const Home = ()=>{
    return(
      <div className="home"> 
        <video className="" src={Video} autoPlay={true} loop={true} muted={true} 
          style={{zIndex: "-1", position: "fixed", top: "0", left: "0"}}></video>

        <Info />
        <Sobre />
        <Portfolio />
        <Carousel caption={["bla", "blew", "blum"]} img={Mina}/>
        <Orcamento />
        <Footer /> 
      </div>
    );
  }  
  return(
    <div className="App">
      <Router>
        <div>
          <Nav />
        </div>

        <Switch>

            <Route exact path="/">
              <Home />
            </Route>
            
            <Route path="/contato">
              <Contato />
              <Footer /> 
            </Route>

            <Route path="/projetos/:nome" component={Projetos}>
              <Footer /> 
            </Route>

            <Route path="/projetos/" component={Projetos}>
              <Footer /> 
            </Route>

            <Route path="*">
              <Redirect to={{pathname: "/"}}/>
            </Route>

        </Switch>
      </Router>
    </div>
  )
}