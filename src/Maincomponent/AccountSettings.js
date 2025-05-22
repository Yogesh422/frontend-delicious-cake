import React, { useState } from 'react';
import './AccountSettings.css';

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    username: 'CakeLover123',
    email: 'cakelover@example.com',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Here you would make a call to your backend to update account settings
    alert('Account settings updated successfully!');
  };

  return (
    <section id='acc'>
    <div className="account-settings p-4">
      <h2>Account Settings</h2>
      <p className="text-muted">Update your profile, email, and password</p>

      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Update Settings
        </button>
      </form>
    </div>
    </section>
  );
};

export default AccountSettings;
