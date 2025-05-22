import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const userName = localStorage.getItem("userEmail") || "Admin@gmail.com";
  const Password = localStorage.getItem("Password") || "Admin";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userEmail === userName && password === Password) {
      alert("Login successful");
      navigate('/Dashboard');
    } else {
      alert("Invalid user email or password");
    }
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="form_container p-5 rounded bg-white">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Sign In</h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)} 
              placeholder="Enter Email" 
              className="form-control" 
              required 
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter Password" 
              className="form-control" 
              required 
            />
          </div>
          <div>
            <input type="checkbox" className="custom-control custom-checkbox" id="check" />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember me
            </label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-dark">Sign in</button>
          </div>
          <p className="text-end mt-2">
            
            <Link to="/Signup" className="ms-2">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;