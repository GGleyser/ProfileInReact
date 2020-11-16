import React from 'react';

export default function Depoimento(props)
{
    return(
        <div className="container">
            <div className="row my-5 py-5">
                <img className="m-auto rounded-circle" src={props.img} width="200" height="200"></img>
                <article className="h4 mx-auto mt-5">
                    <i className="text-center">
                        {"\""+props.txt+"\""}
                    </i>
                </article>
            </div>
        </div>
    );
}