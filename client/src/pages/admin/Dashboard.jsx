import React, { useState } from 'react';
import { Link, Outlet } from 'react-router';
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const role = localStorage.getItem('role')
  if (role == "admin") {
    var email = localStorage.getItem('email')
  }
  else {
    window.location.href = '/adlogin'
  }
  return (
    <div className={`dashboard-container ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar">
        <div className="sidebar-header">
          <h4>Admin</h4>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/admin/session">Session</Link>
          </li>
          <li>
            <Link to="/admin/subject">Subject</Link>
          </li>
          <li>
            <Link to="/admin/examinee">Examinee</Link>
          </li>
          <li>
            <Link to="/admin/examination">Examination</Link>
          </li>
          <li>
            <Link to="/admin/questionbank">Question Bank</Link>
          </li>
          <li>
            <Link to="/admin/report">Report Generation</Link>
          </li>
          <li>
            <Link to="/admin/change-pass">Change Password</Link>
          </li>
          <li>

            <Link onClick={() => {
              localStorage.removeItem('role')
              localStorage.removeItem('email')
              window.location.href = '/adlogin'
            }}>Logout</Link>
          </li>
        </ul>
      </div>

      <div className="main">
        <div className="topbar">
          <button onClick={() => setCollapsed(!collapsed)} className="toggle-btn">
            {/* {collapsed ? 'Expand' : 'Collapse'} */}
          </button>
          <h2>Admin Dashboard</h2>
        </div>

        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;