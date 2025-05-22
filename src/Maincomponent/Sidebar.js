import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link to="." className="nav-link">
            <i className="fa-solid fa-chart-line"></i> Dashboard Overview
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="orders" className="nav-link">
            <i className="fa-brands fa-shopify"></i> Orders
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="products" className="nav-link">
            <i className="fa-solid fa-cake-candles"></i> Products
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="customers" className="nav-link">
            <i className="fa-solid fa-people-group"></i> Customers
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="account-settings" className="nav-link">
            <i className="fa-solid fa-gear"></i> Account Settings
          </Link>
        </li>
      </ul>
      {/* Admin-specific Links */}
      <>
        <hr />
        <h6 className="text-muted">Admin Panel</h6>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="manage-users" className="nav-link text-dark">
              <i className="fa-solid fa-users"></i>Users
            </Link>
          </li>
          <li className="nav-item">
            <Link to="manage-orders" className="nav-link text-dark">
              <i className="fa-solid fa-bag-shopping"></i> Manage Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link to="inventory" className="nav-link text-dark">
              <i className="fa-solid fa-building-shield"></i> Inventory
            </Link>
          </li>
          <li className="nav-item">
            <Link to="sales-reports" className="nav-link text-dark">
              <i className="fa-solid fa-chart-simple"></i> Sales Reports
            </Link>
          </li>
        </ul>
      </>
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
