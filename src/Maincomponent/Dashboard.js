import React from 'react'
import DashHeader from './DashHeader';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div id='dash-header'>
      <DashHeader />
      <div style={{ display: 'flex' }}>
      <Sidebar />  {/* Sidebar is static on all dashboard pages */}
      <div style={{ flex: 1 }}>
      <Outlet />
      </div>
      </div>
    </div>
  )
}

export default Dashboard