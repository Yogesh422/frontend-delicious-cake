import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // To get the product ID from the URL
import CakeProducts from '../data/CakeProducts'; // Import the products data

const ProductDetail = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product with the matching ID
    const foundProduct = CakeProducts.find((p) => p.id === parseInt(productId));
    setProduct(foundProduct);
  }, [productId]);

  if (!product) {
    return <div className="text-center">Loading...</div>; // Display loading if product is not found
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
            style={{ height: '400px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-8">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p className="lead">Price: ₹{product.price}</p>
          <button className="btn btn-primary" onClick={() => alert('Added to Cart')}>
            Add to Cart
          </button>
          <br />
          <Link to={`/order/${product.id}`} className="btn btn-success mt-3">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
