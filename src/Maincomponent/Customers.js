import React, { useState } from 'react';

const Customers = () => {
  // Sample customer data (you would likely fetch this from your backend in a real app)
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      orders: 5,
      totalSpent: 200,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      orders: 3,
      totalSpent: 120,
    },
    {
      id: 3,
      name: 'Emily Brown',
      email: 'emilybrown@example.com',
      orders: 8,
      totalSpent: 350,
    },
  ]);

  const handleDelete = (id) => {
    const updatedCustomers = customers.filter(customer => customer.id !== id);
    setCustomers(updatedCustomers);
    alert('Customer deleted successfully!');
  };

  return (
    <div className="customers-page p-4">
      <h2>Registered Customers</h2>
      <p className="text-muted">Manage the customers who have signed up with your shop.</p>

      <div className="table-responsive mt-4">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Orders</th>
              <th>Total Spent</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.orders}</td>
                <td>${customer.totalSpent}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2">View</button>
                  <button 
                    className="btn btn-danger btn-sm" 
                    onClick={() => handleDelete(customer.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
