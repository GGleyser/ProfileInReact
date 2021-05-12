import React from 'react';
import icon_face from './../img/icons/001-facebook.svg';
import icon_insta from './../img/icons/002-instagram.svg';
import icon_twt from './../img/icons/003-twitter.svg';

export default function Icons(props)
{
    
    return(
        <div className={props.class}>
            <a href="http://facebook.com/gabriel.gleyserdasilva/" target="_blank"><span className="m-2"><img src={icon_face} width="30"></img></span></a>
            <a href="http://instagram.com/ggleyser" target="_blank"><span className="m-2"><img src={icon_insta} width="30"></img></span></a>
            <a href="https://twitter.com/GleyserGabriel" target="_blank"><span className="m-2"><img src={icon_twt} width="30"></img></span></a>
        </div>
    )
}