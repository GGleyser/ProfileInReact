import React from 'react';

export default function Depoimento(props)
{
    return(
        <div className="container">
            <div className="my-5 py-5">
                <img className="d-block m-auto rounded-circle" src={props.img} width="200" height="200"></img>
                <article className="h4 mx-auto mt-5">
                    <i className="text-center text-white">
                        {"\""+props.txt+"\""}
                    </i>
                </article>
            </div>
        </div>
    );
}