import React from 'react';

export default function Card(props)
{
    return(
        <div className="card m-auto" style={{ width: 18 + 'rem' }}>
            <img className="card-img-top" src={props.img}></img>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-text">{props.text}</p>
                <a className="btn btn-dark" href={props.btnLink}>{props.btnTxt}</a>
            </div>
        </div>
    );
}
