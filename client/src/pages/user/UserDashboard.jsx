import React, { useState } from 'react';
import { Link, Outlet } from 'react-router';


const UserDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const role = localStorage.getItem('userRole')
  if (role == "user") {
    var email = localStorage.getItem('userEmail')
  }
  else {
    window.location.href = '/'
  }
  return (
    <div className={`dashboard-container ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar">
        <div className="sidebar-header">
          <h4>Welcome to Exam Prep</h4>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/user/profile">Profile</Link>
          </li>
          <li>
            <Link to="/user/myexam">My Exam</Link>
          </li>
          <li>
            <Link to="/user/result">My Results</Link>
          </li>
          <li>
            <Link to="/user/message">Message</Link>
          </li>
          <li>
            <Link to="/user/changepassword">Change Password</Link>
          </li>


          <li>
            <Link onClick={() => {
              localStorage.removeItem('userRole')
              localStorage.removeItem('userEmail')
              window.location.href = '/'
            }}>Logout</Link>
          </li>
        </ul>
      </div>

      <div className="main">
        <div className="topbar">
          <button onClick={() => setCollapsed(!collapsed)} className="toggle-btn">
            {/* {collapsed ? 'Expand' : 'Collapse'} */}
          </button>
          <h2 className='text-center'>User Dashboard</h2>
        </div>


        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;