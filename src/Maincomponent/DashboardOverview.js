import React from 'react';

const DashboardOverview = () => {

  return (
    <div className="dashboard-overview p-4">
      <h2>Welcome to Cake Shop Dashboard</h2>
      <p className="text-muted">Overview of the shop's key metrics and recent activity.</p>

      {/* Metrics Section */}
      <div className="row mt-4">
        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Orders</h5>
              <p className="card-text">125 Orders</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Products Available</h5>
              <p className="card-text">50 Products</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">Pending Orders</h5>
              <p className="card-text">10 Pending</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-info mb-3">
            <div className="card-body">
              <h5 className="card-title">Customers</h5>
              <p className="card-text">80 Registered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
