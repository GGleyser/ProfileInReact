import React from 'react';
import logo from './logo.svg';
import Mina from './img/bg/mina.jpg';
import './App.css';

import Nav from './componentes/menu/nav';
import Portfolio from './componentes/portfolio';
import Sobre from './componentes/sobre';
import Info from './componentes/info';
import Footer from './componentes/footer';
import Video from './../src/video/video.mp4';
import Carousel from './componentes/carousel';
import Orcamento from './componentes/orcamento';
import { render } from '@testing-library/react';



export default function App()
{
  return(
    <div className="App">
      <div>
        <Nav />
      </div>

      <div style={{height: "500px"}}></div>
      
      <video className="w-100" src={Video} autoPlay="true" loop="true" muted="true" style={{zIndex: "-1", position: "fixed", top: "0", left: "0"}}></video>

      <Info />

      <Sobre />

      <Portfolio />

      <Carousel caption={["bla", "blew", "blum"]} img={Mina}/>
     
      <Orcamento />

      <Footer /> 

    </div>
  )
}
