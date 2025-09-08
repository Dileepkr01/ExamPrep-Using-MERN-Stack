// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { data } from 'react-router-dom';

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     number: '',
//     address: '',
//     password: '',
//     collage: '',
//     qualification: '',
//     session: ''
//   });

//   const [sessions, setSessions] = useState([]);
//   const handlefetch = async () => {
//     try {
//     const res = await axios.get(`${process.env.REACT_APP_API_URL}/session`);

//       // console.log(res.data);
//       setSessions(res.data.data)
//     }
//     catch (er) {
//       console.log(er);
//     }
//   }
//   useEffect(() => {
//     handlefetch();
//   }, [])

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//    const res = await axios.post(`${process.env.REACT_APP_API_URL}/examinee`, formData);

//       alert('Examinee Registration!');
//       setFormData({
//         name: '',
//         email: '',
//         number: '',
//         address: '',
//         password: '',
//         collage: '',
//         qualification: '',
//         session: ''
//       });
//     } catch (error) {
//       console.error('Submission error:', error);
//       alert('Failed to register')
//     }
//   };
//   return (
//     <div className="container-fluid" style={{ backgroundColor: '#508BFC', minHeight: '100vh', paddingTop: '50px' }}>
//       <div className="row justify-content-center">
//         <div className="col-md-6 col-lg-5">
//           <div className="bg-white p-4 rounded shadow">
//             <h3 className="text-center mb-4">Registration Form</h3>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label className='mb-1'>Name:</label>
//                 <input type="text" name="name" required className="form-control" value={formData.name} onChange={handleChange} />
//               </div>

//               <div className="mb-3">
//                 <label className='mb-1'>Email:</label>
//                 <input type="email" name="email" required className="form-control" onChange={handleChange} value={formData.email} />
//               </div>

//               <div className="mb-3">
//                 <label className='mb-1'>Phone Number:</label>
//                 <input type="tel" name="number" required className="form-control" value={formData.number} onChange={handleChange} />
//               </div>

//               <div className="mb-3">
//                 <label className='mb-1'>Address:</label>
//                 <input type="text" name="address" required className="form-control" value={formData.address} onChange={handleChange} />
//               </div>

//               <div className="mb-3">
//                 <label className='mb-1'>Password:</label>
//                 <input type="password" name="password" required className="form-control" value={formData.password} onChange={handleChange} />
//               </div>

//               <div className="mb-3">
//                 <label className='mb-1'>College:</label>
//                 <input type="text" name="collage" required className="form-control" value={formData.collage} onChange={handleChange} />
//               </div>

//               <div className="mb-3">
//                 <label className='mb-1'>Qualification:</label>
//                 <input type="text" name="qualification" required className="form-control" value={formData.qualification} onChange={handleChange} />
//               </div>


//               <div className="col-sm-12">
//                 <label className='form-label'>Session</label>
//                 <select name="session" className='form-select' value={FormData.session} onChange={handleChange} required>
//                   <option value="">Select Session</option>
//                   {sessions.map((item) => (
//                     <option value={item._id} key={item._id}>{item.name}</option>
//                   ))}
//                 </select>
//               </div>

//               <button type="submit" className="btn btn-primary w-100 mt-2">
//                 Register
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;



import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    address: '',
    password: '',
    collage: '',
    qualification: '',
    session: ''
  });

  const [sessions, setSessions] = useState([]);

  // Fetch sessions from backend
  const handlefetch = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/session`);
      setSessions(res.data.data);
    } catch (er) {
      console.log('Error fetching sessions:', er);
    }
  };

  useEffect(() => {
    handlefetch();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/examinee`, formData);

      alert('Examinee Registered Successfully!');
      setFormData({
        name: '',
        email: '',
        number: '',
        address: '',
        password: '',
        collage: '',
        qualification: '',
        session: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to register');
    }
  };

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: '#508BFC', minHeight: '100vh', paddingTop: '50px' }}
    >
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-center mb-4">Registration Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="mb-1">Name:</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="mb-1">Email:</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="mb-1">Phone Number:</label>
                <input
                  type="tel"
                  name="number"
                  required
                  className="form-control"
                  value={formData.number}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="mb-1">Address:</label>
                <input
                  type="text"
                  name="address"
                  required
                  className="form-control"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="mb-1">Password:</label>
                <input
                  type="password"
                  name="password"
                  required
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="mb-1">College:</label>
                <input
                  type="text"
                  name="collage"
                  required
                  className="form-control"
                  value={formData.collage}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="mb-1">Qualification:</label>
                <input
                  type="text"
                  name="qualification"
                  required
                  className="form-control"
                  value={formData.qualification}
                  onChange={handleChange}
                />
              </div>

              <div className="col-sm-12 mb-3">
                <label className="form-label">Session</label>
                <select
                  name="session"
                  className="form-select"
                  value={formData.session}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Session</option>
                  {sessions.map((item) => (
                    <option value={item._id} key={item._id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-2">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

