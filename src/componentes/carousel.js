import React from 'react';
import IconPrev from './../img/icons/back.svg';
import IconNext from './../img/icons/next.svg';
import Web from './../img/bg/web.jpg';
import Business from './../img/bg/business.jpg';
import Blue from './../img/bg/blue.jpeg';

export default function Carousel(props) 
{
    return (
        <div className="carousel slide bg-dark" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>

            </ol>
            <div className="carousel-inner">
                <div className="carousel-item  active">
                    <img src={Blue} className="d-block w-100" alt=""></img>
                </div>
                <div className="carousel-item">
                    <img src={Web} className="d-block w-100" alt=""></img>
                </div>
                <div className="carousel-item">
                    <img src={props.img} className="d-block w-100" alt=""></img>
                </div>
            </div>

            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span>
                    <img className="w-100" src={IconPrev}></img>
                </span>
            </a>

            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span>
                    <img className="w-100"  src={IconNext}></img>
                </span>
            </a>
        </div>
    );
}

{/* <img src={props.imgs[1]} width="400" height="400"></img> */}