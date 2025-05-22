import React from 'react';
import Image from 'react-bootstrap/Image';
import img6 from '../assets/images/logo1.png';
import './DashHeader.css';
import { Link } from 'react-router-dom';

const DashHeader = () => {
  return (
    <div className="dashheader">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <Image
              src={img6}
              width="100"
              height="100"
              alt="React Bootstrap logo"
            />
          </Link>

          {/* Navbar links */}
          <div className="collapse navbar-collapse auto">
            <ul className="navbar-nav ms-auto mb-lg-0 p-2">
              {/* Search Box */}
              <li className="nav-item">
                <div className="box">
                  <input
                    type="text"
                    placeholder="Search your fav one..."
                    className="form-control"
                  />
                  <button className="btn btn-search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </li>

              {/* Cart Icon */}
              <li className="nav-item">
                <Link to="/cart">
                  <i id="i1" className="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>

              {/* Location Icon */}
              <li className="nav-item">
                <Link to="/location" className="nav-link">
                  <i id="i2" className="fa-sharp fa-solid fa-map-location-dot"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashHeader;
