import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Asegúrate de que esta importación esté presente
import CartWidget from './CartWidget';

function NavBar() {
      return (
        <nav>
          <Link to="/">Todos los productos</Link>
          <Link to="/category/electronics">Electrónica</Link>
          <Link to="/category/jewelery">Joyería</Link>
          <Link to="/category/men's clothing">Ropa para hombres</Link>
          <Link to="/category/women's clothing">Ropa para mujeres</Link>
          <CartWidget/>
        </nav>
      );
    }
    
    export default NavBar;
    