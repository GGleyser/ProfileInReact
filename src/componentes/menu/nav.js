import React from 'react';

export default function Nav()
{
    return(
        <div className="container">
            <nav className="navbar navbar-white bg-white">
                <a className="navbar-brand" href="#/inicio">LOGO</a>

                <div className="">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active" >
                            <a className="nav-link" href="#/inicio">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/sobre">Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/orcamento">Orçamento</a>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    );
}