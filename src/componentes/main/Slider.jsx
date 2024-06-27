import React from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import toribanortebcasa2 from "./fotos/toribanortebcasa2.jpg";
import toribanortebcasa3 from "./fotos/toribanortebcasa3.jpg";
import toribanortebcasa4 from "./fotos/toribanortebcasa4.jpg";
import toribanortebcasa5 from "./fotos/toribanortebcasa5.jpg";
import foto13 from "./fotos/foto13.jpg";
import foto9 from "./fotos/foto9.jpg";
import toribanortebcasa8 from "./fotos/toribanortebcasa8.jpg";
import toribanortebcasa7 from "./fotos/toribanortebcasa7.jpg";
import toribanortebcasa10 from "./fotos/toribanortebcasa10.jpg";

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll:3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <img src={toribanortebcasa2} className="icon-home" alt="Logo Casas Felicitas"  />
        </div>
        <div>
        <img src={toribanortebcasa3} className="icon-home" alt="Logo Casas Felicitas"  />
        </div>
        <div>
        <img src={toribanortebcasa4} className="icon-home" alt="Logo Casas Felicitas"  />
        </div>
        <div>
        <img src={toribanortebcasa5} className="icon-home" alt="Logo Casas Felicitas" />
        </div>
        <div>
        <img src={foto13} className="icon-home" alt="Logo Casas Felicitas"  />
        </div>
        <div>
        <img src={foto9} className="icon-home" alt="Logo Casas Felicitas"  />
        </div>
        <div>
        <img src={toribanortebcasa7} className="icon-home" alt="Logo Casas Felicitas"  />
        </div>
        <div>
        <img src={toribanortebcasa10} className="icon-home" alt="Logo Casas Felicitas" />
        </div>
        <div>
        <img src={toribanortebcasa8} className="icon-home" alt="Logo Casas Felicitas" />
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
