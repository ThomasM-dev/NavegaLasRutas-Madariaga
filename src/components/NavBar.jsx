import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../assets/logo.jfif'

function NavBar() {
  return (
        <Nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <Nav>
                {/* el logo dirige a la pagina principal */}
              <Link to="/">
              <img src = {logo} alt="Logo" className="logo" />
              </Link>
              <div className='menu'>
                <Nav.Link as={Link} to="/">Todos los productos</Nav.Link>
                <Nav.Link as={Link} to="/category/electronics">Electrónica</Nav.Link>
                <Nav.Link as={Link} to="/category/jewelery">Joyería</Nav.Link>
                <Nav.Link as={Link} to="/category/men's clothing">Ropa para hombres</Nav.Link>
                <Nav.Link as={Link} to="/category/women's clothing">Ropa para mujeres</Nav.Link>
                </div>
              </Nav>
              </div>
              <CartWidget/>
            </div>
        </Nav>
        )
    }
    
    export default NavBar;
    

    