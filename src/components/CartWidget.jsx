import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Iconos de FontAwesome
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; // Icono de carrito de compras

const CartWidget = () => {
  return (
    <div className='cart'>
      <FontAwesomeIcon icon={faCartShopping} /> <span>0</span>
    </div>
  );
};

export default CartWidget;

