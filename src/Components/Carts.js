import React, { useContext } from 'react';
import { CartsContext } from '../contexts/CartsContext';
import './Carts.css';

const Carts = () => {
  const { cart = [], removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useContext(CartsContext);

  // Calculate total price
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div id="sy">
      <div className="carts-container">
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
                  <th>Quantity</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img
                        src={product.images?.[0] || 'placeholder.png'}
                        alt={product.title}
                        className="cart-product-image"
                      />
                    </td>
                    <td>{product.title}</td>
                    <td>₹{product.price * product.quantity}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => decreaseQuantity(product.id)}
                          disabled={product.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="mx-3">{product.quantity}</span>
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => increaseQuantity(product.id)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn-remove"
                        onClick={() => removeFromCart(product.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2" className="text-right">
                    <strong>Total:</strong>
                  </td>
                  <td>
                    <strong>₹{totalPrice}</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
            <button className="btn-clear" onClick={clearCart}>
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carts;
