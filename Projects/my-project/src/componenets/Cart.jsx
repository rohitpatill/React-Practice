// Cart.jsx
import React from 'react';

function Cart({ cartItems }) {
  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item) => (
            <li key={item.id} className="list-group-item">
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
