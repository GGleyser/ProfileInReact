import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './componentes/menu/nav';
import { render } from '@testing-library/react';

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
  return(
    <div className="App">
      <header>
        <Nav />
      </header>

      
      <div className="bg-dark">
        <img src={logo} width="400" height="400"></img>
      </div>

      <div className="container">
        <div className="row">
          <img src={logo} width="400" height="400"></img>
          <article>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu elit ultrices,
            auctor sem id, vestibulum nibh. Aenean tempor magna et eros aliquam, vel interdum lorem fermentum.
            In et eros quis velit vulputate lobortis quis sed odio. Morbi lacus diam, scelerisque eu lacinia non,
            placerat quis diam. Integer diam magna, tempus sit amet eros non, pulvinar feugiat mauris.
          </article>
        </div>
      </div>

      <div className="bg-dark p-5">
        <article className="container">
          <div className="row">
            <div className="text-white col-8">
              <h4 className="text-left">Faça um orçamento agora mesmo!</h4>
              <p className="text-left">
                Nam eu ligula ut sapien sodales interdum vel sit amet urna. 
                Nam lectus eros, malesuada a efficitur id, condimentum ut magna.
              </p>
            </div>

            <div className="col">
              <a className="btn btn-light" href="#orcamento"><strong>Orçamento</strong></a>
            </div>
          </div>
        </article>
      </div>
      
      <footer>
        <div className="container">
          <div className="row p-3">
            <span className="size-3">GGleyser 2020, todos os direitos reservados</span>
            <span>face insta, tweeter</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
