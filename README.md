📘 ExamPrep

A full-stack Online Examination System built with MERN Stack (MongoDB, Express, React, Node.js).
Supports both Admin and User (Examinee) roles for smooth exam preparation and management.
-------

✨ Features

👨‍💼 Admin
-----

🔐 Admin Authentication (secure login/logout)

📚 Manage Sessions & Subjects

👨‍🎓 Manage Examinees (Users)

📝 Create Examinations (with timer & rules)

❓ Question Bank (MCQs, randomized delivery)

📊 Generate Reports (score, results, analytics)

🔑 Change Password & Logout

👨‍🎓 User (Examinee)
------

🔑 User Authentication & Login

🏷️ View Assigned Subjects & Exams

📝 Attempt Online Exams (with live timer)

📊 View Results & Reports

🔄 Retake Exams (if allowed)

🔒 Secure Session Handling

🚀 Tech Stack
----------

Frontend:
-------
React.js ⚛️

React Router

Bootstrap 5

Backend:
-------
Node.js 🌐

Express.js

Database:

MongoDB 🍃 (Atlas Cloud / Local)

Authentication & Security:

JSON Web Token (JWT) 🔑

bcrypt.js (password hashing)

Development Tools:

VS Code

Nodemon

Concurrently (to run frontend + backend together)

Deployment:
--------
Netlify (Frontend) 🌍

Render / Railway / Heroku (Backend) ☁️

MongoDB Atlas (Database)

📂 Project Structure
--------


     ExamPrep/
    │
    ├── backend/               # Node.js + Express + MongoDB API
    │   ├── server.js
    │   ├── package.json
    │   ├── .env.example
    │   ├── models/
    │   ├── routes/
    │   └── controllers/
    │
    ├── frontend/              # React App
    │   ├── package.json
    │   ├── src/
    │   ├── public/
    │   └── .env.example
    │
    └── README.md

⚙️ Installation (Local Setup)
1️⃣ Clone Repository

      git clone https://github.com/your-username/ExamPrep.git
      cd ExamPrep

2️⃣ Backend Setup

        cd backend
        npm install
        .env.example .env   # update MONGO_URI and PORT
        npm run dev


3️⃣ Frontend Setup

      cd ../frontend
      npm install
     cp .env.example .env   # update REACT_APP_API_URL=http://localhost:5000
     npm run dev
