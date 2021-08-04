import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Card(props)
{
    const [mouseEnter, setMouseEnter] = useState(false);

    return(
        <div className="card my-2 mx-auto" style={{ width: 18 + 'rem' }}>

            <img className="card-img-top" onMouseEnter={() => setMouseEnter(true)} src={props.img}></img>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-text">{props.text}</p>
                <Link className="btn btn-dark w-100 h4" style={{ backgroundColor: "#000" }} 
                    to={props.btnLink}>{props.btnTxt}</Link>
            </div>
        </div>
    );
}
