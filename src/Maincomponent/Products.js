import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'; // Import CartContext
import CakeProducts from '../data/CakeProducts'; // Ensure the path is correct
import './Products.css';
import { Link } from 'react-router-dom';

const Products = () => {
  const { addToCart } = useContext(CartContext); // Access the addToCart function

  return (
    <div>
      <section id='reports'>
        <h1>Delicious Cakes..!</h1>
        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
          {CakeProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                width: "200px",
                borderRadius: "5px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <h2 style={{ fontSize: "18px", margin: "10px 0" }}>{product.name}</h2>
              <p style={{ fontSize: "14px", color: "#555" }}>{product.description}</p>
              <p style={{ fontWeight: "bold", color: "#333" }}>Price: ₹{product.price}</p>
              <button
                className="btn btn-primary"
                onClick={() => addToCart(product)} // Add the product to the cart
                style={{
                  border: "none",
                  padding: "10px",
                  borderRadius: "3px",
                  alignItems: "center",
                }}
              >
                Add to Cart
              </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
