// import { useState } from 'react'
// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router'

// import Login from './pages/Login'
// import Registration from './pages/Registration'
// import AdminDashboard from './pages/admin/Dashboard'
// import Session from './pages/admin/Session'
// import AdminLogin from './pages/admin/AdminLogin'
// import Subject from './pages/admin/Subject'
// import Examinee from './pages/admin/Examinee'
// import QuestionBank from './pages/admin/QuestionBank'
// import Examination from './pages/admin/Examination'
// // import Sms from './pages/Sms'
// import UserDashboard from './pages/user/UserDashboard'
// import Profile from './pages/user/Profile'
// import MyExam from './pages/user/MyExam'
// import Result from './pages/user/Result'
// import ChangePassword from './pages/user/ChangePassword'
// import GetExam from './pages/user/GetExam'
// import Message from './pages/user/Message'
// import Msg from './pages/admin/Message'
// import Report from './pages/admin/Report'
// import ExamResultsDeclaration from './pages/admin/ExamResultsDeclaration'
// import ChangePass from './pages/admin/ChangePass'
// import AdminHome from './pages/admin/AdminHome'
// function App() {


//   return (
//     <>
//       <Router>
//         <Routes>
//           {/* registration route */}
//           <Route path='*' element={<Registration />}></Route>
//           <Route path='/' element={<Login />}></Route>
//           <Route path='/register' element={<Registration />}></Route>
//           {/* admin route */}
//           <Route path='/adlogin' element={<AdminLogin />}></Route>
//           <Route path='/admin/' element={<AdminDashboard />}>
//             <Route index element={<AdminHome />}></Route>
//             <Route path='session' element={<Session />}></Route>
//             <Route path='subject' element={<Subject />}></Route>
//             <Route path='examinee' element={<Examinee />}></Route>
//             <Route path='questionbank' element={<QuestionBank />}></Route>
//             <Route path='examination' element={<Examination />}></Route>
//             <Route path='message' element={<Msg />}></Route>
//             <Route path='report' element={<Report />}></Route>
//             <Route path='result-declare' element={<ExamResultsDeclaration />}></Route>
//             <Route path='change-pass' element={<ChangePass />}></Route>
//           </Route>
//           {/* <Route path='/sms' element={<Sms/>}></Route> */}
//           {/* User Dashboard jsx */}
//           <Route path='/user' element={<UserDashboard />}>
//             <Route path='profile' element={<Profile />}></Route>
//             <Route path='myexam' element={<MyExam />}></Route>
//             <Route path='result' element={<Result />}></Route>
//             <Route path='message' element={<Message />}></Route>
//             <Route path='changepassword' element={<ChangePassword />}></Route>
//             <Route path='getexam/:id' element={<GetExam />}></Route>
//           </Route>
//         </Routes>
//       </Router>
//     </>
//   )
// }

// export default App






 import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Registration from './pages/Registration'
import AdminDashboard from './pages/admin/Dashboard'
import Session from './pages/admin/Session'
import AdminLogin from './pages/admin/AdminLogin'
import Subject from './pages/admin/Subject'
import Examinee from './pages/admin/Examinee'
import QuestionBank from './pages/admin/QuestionBank'
import Examination from './pages/admin/Examination'
// import Sms from './pages/Sms'
import UserDashboard from './pages/user/UserDashboard'
import Profile from './pages/user/Profile'
import MyExam from './pages/user/MyExam'
import Result from './pages/user/Result'
import ChangePassword from './pages/user/ChangePassword'
import GetExam from './pages/user/GetExam'
import Message from './pages/user/Message'
import Msg from './pages/admin/Message'
import Report from './pages/admin/Report'
import ExamResultsDeclaration from './pages/admin/ExamResultsDeclaration'
import ChangePass from './pages/admin/ChangePass'
import AdminHome from './pages/admin/AdminHome'

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/register" element={<Registration />} /> 
          {/* you can remove one if you want only one URL */}

          {/* Admin routes */}
          <Route path="/adlogin" element={<AdminLogin />} />
          <Route path="/admin/" element={<AdminDashboard />}>
            <Route index element={<AdminHome />} />
            <Route path="session" element={<Session />} />
            <Route path="subject" element={<Subject />} />
            <Route path="examinee" element={<Examinee />} />
            <Route path="questionbank" element={<QuestionBank />} />
            <Route path="examination" element={<Examination />} />
            <Route path="message" element={<Msg />} />
            <Route path="report" element={<Report />} />
            <Route path="result-declare" element={<ExamResultsDeclaration />} />
            <Route path="change-pass" element={<ChangePass />} />
          </Route>

          {/* User routes */}
          <Route path="/user" element={<UserDashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="myexam" element={<MyExam />} />
            <Route path="result" element={<Result />} />
            <Route path="message" element={<Message />} />
            <Route path="changepassword" element={<ChangePassword />} />
            <Route path="getexam/:id" element={<GetExam />} />
          </Route>

          {/* Fallback route */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </Router>
    </>
  )
}

export default App









