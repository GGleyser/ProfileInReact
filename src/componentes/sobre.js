import React from 'react';
import Icons from './icons';
import g2 from './../img/eu.jpeg';

export default function Sobre()
{
    return(
    <div className="sobre container" id="sobre">
        <div className="row my-5">

            <div className="col-12 col-md-4">
                <img className="rounded-circle img-thumbnail perfil" src={g2}></img>
            </div>

            <article className="col col-md-8">
                <h2 className="sobre_titulo text-left"><strong>Sobre</strong></h2>
                    <p className="sobre_texto text-left my-3">
                    Gabriel Gleyser Análista Desenvolvedor de Sistemas, 5 anos de experiência em fazer os bagulhos funcionarem 
                    e desbugando sistemas;
                    Já desenvolvi sites, jogos pra pc e um monte de poha que não coloquei no meu portfólio, esse sou eu. 
                    Organização é minha maior qualidade.  
                    </p>
                <Icons class="sobre_icones text-left" />
            </article>
        </div>
    </div>
    )

}