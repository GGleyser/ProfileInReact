import React from 'react';
import Icons from './icons';
import Mountain from './../img/mountain.jpeg';

export default function Sobre()
{
    return(
    <div className="sobre container p-5">
        <div className="row">

            <div className="col">
                <img className="w-100" src={Mountain}></img>
            </div>

            <article className="col col-md-8">
                <h2 className="sobre_titulo text-left"><strong>Sobre</strong></h2>
                <p className="sobre_texto text-left">
                    It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
            </p>
                <Icons class="sobre_icones text-left" />
            </article>
        </div>
    </div>
    )

}