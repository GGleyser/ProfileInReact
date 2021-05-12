import React from 'react';

export default function Nav()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-light py-3" style={{ backgroundColor: "rgb(218 218 218)"}}>
            <div className="container">

                <a className="navbar-brand h1" href="#inicio">
                    <text>GGleyser_dev</text>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active" >
                            <a className="nav-link h5" href="#inicio">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link h5" href="#sobre">Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn h5" style={{backgroundColor: "#000", color: "#fff"}} href="#orcamento">Orçamento</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link h5" href="#contato">Contato</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}