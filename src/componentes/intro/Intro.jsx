import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./intro.css";
import Main from "../main/Main.jsx";
import logoblack from "./logo-black.svg";

function Intro() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navegador">
          <Container fluid className='navegador'>
            <Navbar.Brand href="#"><img className='logo-black' src={logoblack} alt="logo casas felicitas" /> <p className='logo-title'>Casas Felicitas</p></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menú
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="container-links flex-grow-1 pe-3 justify-content-end">
                  <Nav.Link className='link-nav' href="#sobre">Sobre</Nav.Link>
                  <Nav.Link className='link-nav'  target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=5522997635085&text&type=phone_number&app_absent=0">Contato</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
          <h1 className='titulo-principal'>Aluguel e Venda de Casas</h1>
       <Main />
    </>
  );
}

export default Intro;
