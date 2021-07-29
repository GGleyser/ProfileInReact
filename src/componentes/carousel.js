import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Mina from '../img/bg/mina.jpg';
import Depoimento from './depoimento';
import IconPrev from './../img/icons/back.svg';
import IconNext from './../img/icons/next.svg';
import Web from './../img/bg/web.jpg';
import Business from './../img/bg/business.jpg';
import Blue from './../img/bg/blue.jpeg';

export default function MyCarousel(props) 
{
    return (
       <div className="carousel slide bg-dark" data-ride="carousel">
            <Carousel variant="dark" className="bg-dark" heigth="200">
                <Carousel.Item>
                    <Depoimento img={Mina} txt="Ótimo profissional, muito prestativo e atencioso. Fez exatamente o que eu imaginava"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Depoimento img={Blue} txt="Fez exatamente o que eu imaginava! Muito prestativo e atencioso."/>
                </Carousel.Item>
            </Carousel>
            
        </div>
    );
}