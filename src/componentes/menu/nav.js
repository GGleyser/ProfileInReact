import React, {useState} from 'react';
import { Link } from 'react-router-dom';


export default function Nav()
{
    const [Aactive, setstate] = useState("")
    const linkStyle = {backgroundColor: "#000", color: "#fff"};
    return(
        <nav className="navbar navbar-expand-lg navbar-light py-3" style={{ backgroundColor: "rgb(218 218 218)"}}>
            <div className="container">

                <a className="navbar-brand h1" href="#inicio">
                    <span>GGleyser_dev</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item active">
                            <Link className="nav-link btn h5" style={(Aactive == "inicio") ? linkStyle : {} } 
                            onClick={()=>{setstate("inicio")}} to="/">Inicio</Link>
                        </li>
                        
                        <li className="nav-item active">
                            <a className="nav-link btn h5" style={(Aactive == "sobre") ? linkStyle: {} } 
                            onClick={()=>{setstate("sobre")}} href="/#sobre">Sobre</a>
                        </li>
                        
                        <li className="nav-item active">
                            <a className="nav-link btn h5" style={(Aactive == "orcamento") ? linkStyle : {} } 
                            onClick={()=>{setstate("orcamento")}} href="/#orcamento">Orçamento</a>
                        </li>
                        
                        <li className="nav-item active">
                            <Link className="nav-link btn h5" style={(Aactive == "contato") ? linkStyle: {} } 
                            onClick={()=>{setstate("contato")}} to="/contato">Contato</Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}