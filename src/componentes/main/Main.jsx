import React from 'react';
import "./main.css"
import home1 from "./home-1.svg";
import home2 from "./home-2.svg";
import Slider from "./Slider.jsx"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function HeroImage() {
  return (
    <div>
    <div className='main-container'>
<div className='contenedor-slider'>
         <Slider />
         </div>
<div id='sobre' className='homeContainer'>
  <div className='container-text-home'><img src={home1} className="icon-home" alt="Logo Casas Felicitas" />
  <div className='text-container'>
  <p className='text-icons'>Na Casas Felicitas, entendemos que uma casa não é apenas um espaço físico, mas sim um lugar onde memórias são criadas, famílias se reúnem e sonhos se realizam. É por isso que nos dedicamos a encontrar não apenas propriedades, mas sim o lugar perfeito para você chamar de lar.</p></div>
  </div>

  <div className='container-text-home'><img src={home2} className="icon-home" alt="Logo Casas Felicitas" />
  <div className='text-container'>
  <p className='text-icons'>Na Casas Felicitas, a sua felicidade é a nossa prioridade número um. Entre em contato hoje mesmo e deixe-nos ajudá-lo a encontrar a casa perfeita para você. Afinal, quando se trata de encontrar o seu lar, escolher a Casas Felicitas é escolher a felicidade.</p></div>
  </div>
  </div>
</div>
</div>
  );
}