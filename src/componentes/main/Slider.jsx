import React from "react";
import Slider from "react-slick";
import "./slider.css";
import toribanortebcasa2 from "./fotos/toribanortebcasa2.jpg";
import toribanortebcasa3 from "./fotos/toribanortebcasa3.jpg";
import toribanortebcasa4 from "./fotos/toribanortebcasa4.jpg";
import toribanortebcasa5 from "./fotos/toribanortebcasa5.jpg";
import toribanortebcasa6 from "./fotos/toribanortebcasa6.jpg";
import toribanortebcasa7 from "./fotos/toribanortebcasa7.jpg";
import toribanortebcasa8 from "./fotos/foto8.jpg";
import toribanortebcasa9 from "./fotos/foto9.jpg";
import foto11 from "./fotos/foto11.jpeg";
import foto10 from "./fotos/foto10.jpeg";
import foto12 from "./fotos/foto12.jpeg";
import foto13 from "./fotos/foto13.jpg";

import "./slider.css"

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };


  return (
    <div className="div-slider">
      <Slider {...settings}>
        <div className="slide-container">
          <img src={toribanortebcasa2} className="icon-home" alt="Logo Casas Felicitas"  />

        </div>
        <div className="slide-container">
          <img src={toribanortebcasa3} className="icon-home" alt="Logo Casas Felicitas"  />

        </div>
        <div className="slide-container">
          <img src={toribanortebcasa4} className="icon-home" alt="Logo Casas Felicitas"  />

        </div>

        <div className="slide-container">
          <img src={toribanortebcasa5} className="icon-home" alt="Logo Casas Felicitas" />

        </div>
        <div className="slide-container">
          <img src={toribanortebcasa6} className="icon-home" alt="Logo Casas Felicitas"/>

        </div>
        <div className="slide-container">
          <img src={toribanortebcasa7} className="icon-home" alt="Logo Casas Felicitas" />
        </div>
        <div className="slide-container">
          <img src={toribanortebcasa8} className="icon-home" alt="Logo Casas Felicitas" />
        </div>
        <div className="slide-container">
          <img src={toribanortebcasa9} className="icon-home" alt="Logo Casas Felicitas" />
        </div>
        <div className="slide-container">
          <img src={foto10} className="icon-home" alt="Logo Casas Felicitas" />
        </div>
        <div className="slide-container">
          <img src={foto11} className="icon-home" alt="Logo Casas Felicitas" />
        </div>
        <div className="slide-container">
          <img src={foto12} className="icon-home" alt="Logo Casas Felicitas" />
        </div>
        <div className="slide-container">
          <img src={foto13} className="icon-home" alt="Logo Casas Felicitas" />
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;


