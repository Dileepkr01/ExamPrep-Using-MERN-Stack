// import React from 'react'

// const Profile = () => {
//   return (
//     <div>Profile</div>
//   )
// }

// export default Profile


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserDashboard = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-5 text-center">
        <h2 className="text-primary">Welcome to User Dashboard</h2>
        <p className="mt-3 text-muted">
          You are successfully logged in. Explore your exams, results, and more.
        </p>
      </div>
    </div>
  );
};

export default UserDashboard;
