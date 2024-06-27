import React from "react";
import "./footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo-verde.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import whatsapp from "./whatsapp.svg";



function Footer() {
  return (
<div>
<footer>
<img src={logo} className="logo" alt="Logo Casas Felicitas" />
<div>
        <p className="p-footer-title">Felicitas Casas</p>
        <p className="p-footer-creci">CRECI 01 087.946</p>
        </div>
<div className="redes">
<p className="p-footer-redes">Contatos:</p>
        <article className="redes-icons">
       <a target="_blank" rel="noreferrer" href="https://www.instagram.com/consultoria.casasfelicitas/"> <img src={instagram} className="icon-redes" alt="Instagram Icon" /></a>
       <a className="a-redes" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61555834042352"> <img src={facebook} className="icon-redes" alt="Facebook Icon" /> </a>
       <a href="https://api.whatsapp.com/send/?phone=5522997635085&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer"> <img src={whatsapp} className="icon-redes" alt="Facebook Icon" /> </a>
        </article>
        </div>       
</footer>
</div>
  );
}

export default Footer;