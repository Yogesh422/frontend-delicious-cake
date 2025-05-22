import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css';
import { CartsContext } from '../contexts/CartsContext';

const ProductDetails = () => {
  const { addToCart } = useContext(CartsContext);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product || !product.title) return <p>Loading product...</p>;

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/carts'); // ✅ Navigate to /cart (not /carts)
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* Product Image Section */}
        <div id="y1" className="col-md-5 mt-5">
          <img
            src={product?.images?.[0]} // ✅ Access the first image using optional chaining
            alt={product?.title}
            className="img-fluid"
          />
        </div>

        {/* Product Details Section */}
        <div className="col-md-6">
          <div className="i1">
            <h2>{product?.title}</h2>
            <p>{product?.description}</p>
            <h6>Price: ${product?.price}</h6>
            <h6>Discount: {product?.discountPercentage}%</h6>
            <h6>Rating: {product?.rating}</h6>
            <h6>Category: {product?.category}</h6>
            <p>
              <b>Return Policy:</b> {product?.returnPolicy || 'No return policy available'}
            </p>
            <p>
              <b>Quantity: </b>{product?.minimumOrderQuantity || 'N/A'}
            </p>
            <p>
              <b>Brand: </b>{product?.brand || 'Unknown'}
            </p>

            {/* ✅ Fix the Add to Cart button */}
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
