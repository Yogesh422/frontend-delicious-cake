import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './Cart.css'; // Link to the CSS file

const Cart = () => {
  const { cart = [], removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                  </td>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>
                    <button
                      className="btn-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn-clear" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
