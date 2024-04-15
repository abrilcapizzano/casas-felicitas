import React from "react";
import Slider from "react-slick";
import "./slider.css";
import toribanortebcasa2 from "./fotos/toribanortebcasa2.jpg";
import toribanortebcasa3 from "./fotos/toribanortebcasa3.jpg";
import toribanortebcasa4 from "./fotos/toribanortebcasa4.jpg";
import toribanortebcasa5 from "./fotos/toribanortebcasa5.jpg";
import toribanortebcasa6 from "./fotos/toribanortebcasa6.jpg";
import toribanortebcasa7 from "./fotos/toribanortebcasa7.jpg";



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
          <img src={toribanortebcasa2} className="icon-home" alt="Logo Casas Felicitas" style={{ maxWidth: "100%", height: "auto" }} />
          <p className="text-slider">Área externa</p>
        </div>
        <div className="slide-container">
          <img src={toribanortebcasa3} className="icon-home" alt="Logo Casas Felicitas" style={{ maxWidth: "100%", height: "auto" }} />
          <p className="text-slider">Dormitório</p>
        </div>
        <div className="slide-container">
          <img src={toribanortebcasa4} className="icon-home" alt="Logo Casas Felicitas" style={{ maxWidth: "100%", height: "auto" }} />
          <p className="text-slider">Sala de Estar</p>
        </div>

        <div className="slide-container">
          <img src={toribanortebcasa5} className="icon-home" alt="Logo Casas Felicitas" style={{ maxWidth: "100%", height: "auto" }} />
          <p className="text-slider">Cozinha</p>
        </div>
        <div className="slide-container">
          <img src={toribanortebcasa6} className="icon-home" alt="Logo Casas Felicitas" style={{ maxWidth: "100%", height: "auto" }} />
          <p className="text-slider">Área da Piscina</p>
        </div>
        <div className="slide-container">
          <img src={toribanortebcasa7} className="icon-home" alt="Logo Casas Felicitas" style={{ maxWidth: "100%", height: "auto" }} />
          <p className="text-slider">Área Gourmet</p>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;


