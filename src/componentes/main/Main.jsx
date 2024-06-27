import React from 'react';
import "./main.css"
import home1 from "./home-1.svg";
import home2 from "./home-2.svg";
import Slider from "./Slider.jsx"
import Cards from "../cards/Cards.jsx"
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
  <h3 className='sub-titulo'>Um pouco sobre nós</h3>
  <div className='container-text-home'><img src={home1} className="icon-home" alt="Logo Casas Felicitas" />
  <div className='text-container'>
  <p className='text-icons'>Na Casas Felicitas, entendemos que uma casa não é apenas um espaço físico, mas sim um lugar onde memórias são criadas, famílias se reúnem e sonhos se realizam. É por isso que nos dedicamos a encontrar não apenas propriedades, mas sim o lugar perfeito para você chamar de lar.</p></div>
  </div>

  <div className='container-text-home'><img src={home2} className="icon-home" alt="Logo Casas Felicitas" />
  <div className='text-container'>
  <p className='text-icons'>Te ajudamos a encontrar a sua casa ideal na Região dos Lagos, para alugar ou comprar.</p></div>
  </div>
  </div>
</div>
<h4 className='sub-titulo'>Algumas de nossas casas disponíveis para compra</h4>
<div id='casas' className='contenedor-slider'>
<Cards />
</div>
</div>
  );
}