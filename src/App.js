import React from 'react';
import logo from './logo.svg';
import Mina from './img/bg/mina.jpg';
import './App.css';

import Nav from './componentes/menu/nav';
import Portfolio from './componentes/portfolio';
import Sobre from './componentes/sobre';
import Footer from './componentes/footer';
import Depoimento from './componentes/depoimento';
import Orcamento from './componentes/orcamento';
import { render } from '@testing-library/react';


// const Titulo = (props)=>
// {
//   return(
//     <h1 className={props.stl}>
//       <strong>{props.txt}</strong>
//     </h1>
//     );
// };


function pp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default function App()
{
  // let bla = [Mountain, logo];
  return(
    <div className="App">
      <div>
        <Nav />
      </div>

      {/* <MyCarousel height={400} 
      caption=
      {
        ["bla", "ble", "bli"]
      } 
        img={WEBDEV} active="0" /> */}

      <Sobre />


      <Portfolio />


      <Depoimento img={Mina} txt="Ótimo profissional, muito prestativo e atencioso. Fez exatamente o que eu imaginava"/>

      <Orcamento />

      <Footer /> 

    </div>
  )
}
