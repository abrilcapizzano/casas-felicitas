import React from "react";
import Slider from "react-slick";
import "./cards.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "./images.json"; // Ajusta la ruta de importación según tu estructura de archivos

const CasaSlider = () => {
  const casaFerradurinha = images["casa-ferradurinha"];
  const casaCaravelas = images["casa-caravelas"];
  const casaGeriba = images["casa-geriba"];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
      <div className="casa-section">
        <h3>Casa Na Ferradurinha com vista para o mar</h3>
        <p className="descripcion">{casaFerradurinha.descripcion}</p>
        <Slider {...settings}>
          {casaFerradurinha.imagenes.map((src, index) => (
            <div key={index} className="card">
              <img src={src} alt={`Casa Ferradurinha ${index}`} className="centralized-image"/>
            </div>
          ))}
        </Slider>
      </div>
      <div className="casa-section">
        <h3>Casa Na Caravelas</h3>
        <p className="descripcion">{casaCaravelas.descripcion}</p>
        <Slider {...settings}>
          {casaCaravelas.imagenes.map((src, index) => (
            <div key={index} className="card">
              <img src={src} alt={`Casa Caravelas ${index}`} className="centralized-image" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="casa-section">
        <h3>Casa em Geriba de Frente para a Praia</h3>
        <p className="descripcion">{casaGeriba.descripcion}</p>
        <Slider {...settings}>
          {casaGeriba.imagenes.map((src, index) => (
            <div key={index} className="card">
              <img src={src} alt={`Casa Geriba ${index}`} className="centralized-image"/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CasaSlider;
