import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './SalesReports.css';

const SalesReports = () => {
  const data = [
    { name: 'January', sales: 4000 },
    { name: 'February', sales: 3000 },
    { name: 'March', sales: 5000 },
    { name: 'April', sales: 4000 },
    { name: 'May', sales: 6000 },
    { name: 'June', sales: 7000 },
    { name: 'July', sales: 5000 },
    { name: 'August', sales: 6000 },
    { name: 'September', sales: 7000 },
    { name: 'October', sales: 8000 },
    { name: 'November', sales: 9000 },
    { name: 'December', sales: 10000 },
  ];
  return (
    <section id='report'>
    <div className="sales-performance mt-5">
        <h4>Sales Performance</h4>
        <p className="text-muted">Track your monthly and yearly sales performance.</p>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Total Sales (This Month)</h5>
            <p className="card-text">$7,000</p>
            <h5 className="card-title">Total Sales (This Year)</h5>
            <p className="card-text">$47,000</p>
          </div>
        </div>
        {/* Sales Performance Section with Graph */}
      <div className="sales-performance mt-5">
        <h4>Sales Performance</h4>
        <p className="text-muted">Monthly sales data for the current year.</p>

        {/* Responsive Chart Container */}
        <div className="card">
          <div className="card-body">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      </div>
      </section>
  )
}

export default SalesReports
