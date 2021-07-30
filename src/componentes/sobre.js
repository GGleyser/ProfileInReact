import React from 'react';
import Icons from './icons';
import g2 from './../img/eu.jpeg';

export default function Sobre()
{
    return(
    <div className="container" id="sobre">
        <div className="d-inline-flex my-5 bg-dark rounded">

            <div className="col-12 col-md-4 p-2">
                <img className="rounded-circle img-thumbnail perfil" src={g2}></img>
            </div>

            <article className="col p-2 rounded bg-light">
                <h2 className="sobre_titulo text-left"><strong>Sobre mim</strong></h2>
    
                    <p className="sobre_texto text-left my-3">
                        Olá você! Vou contar um pouco sobre mim.
                    </p>

                    <p className="sobre_texto text-left my-3">
                        Talvez a palavra que me defina seja prático, pois eu dou um jeito de fazer as coisas 
                            funcionarem.
                    </p>
                    <p className="sobre_texto text-left my-3">
                        Sou apaixonado com assuntos de Eletrônica e programação são os assuntos 
                            que mais me atraem e estou sempre aprendendo um pouco sobre elas.
                        A idéia de criar meus próprios robôs é bem empolgante.
                    </p>
                    <p className="sobre_texto text-left my-3">
                        Também gosto de jogar e de desenvolver jogos.
                        Descobrir o fundamento do funcionamento das coisas também me fascina.
                    </p>
                    <p className="sobre_texto text-left my-3">
                        É isso, agora você me conhece um pouco melhor. 
                    </p>


                <Icons class="sobre_icones text-left" />
            </article>
        </div>
    </div>
    )

}