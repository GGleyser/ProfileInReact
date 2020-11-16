import React, { Children } from 'react';
import Card from '../componentes/card';
import Mountain from '../img/mountain.jpeg';

export default function Portfolio(props)
{
 
    return(
    <div className="portfolio pt-5" style={{ backgroundColor: "rgb(218 218 218)"}}>
        <div className="container">
          <h2 className="text-center pb-5">Portfólio</h2>

          {/* cards */}
          <div className="row">
            <Card 
              img={Mountain} OnFocus={()=> {alert("focus1")}} btnTxt="Acessar" btnLink="#test" title="Projeto" 
              text="RSVestuário. Loja de roupas unisex."
            />
            <Card
              img={Mountain} OnFocus={()=> {alert("focus2")}} btnTxt="Acessar" btnLink="#test" title="Projeto"
              text="CTe. Aplicação de controle de notas fiscais."
            />
            <Card
              img={Mountain} OnFocus={()=> {alert("focus3")}} btnTxt="Acessar" btnLink="#test" title="Projeto"
              text="Syschool, projeto de uma instituição de ensino."
            />
          </div>
          {/* cards */}


          <div className="row py-5 m-auto" style={{ width: 18 + 'rem' }}>
            <a className="w-100 h4 p-1 btn text-white" style={{backgroundColor: "#000"}} href="#projetos/">Ver todos</a>
          </div>

        </div>
      </div>
    )
}