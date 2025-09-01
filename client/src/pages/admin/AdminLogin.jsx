// import React from 'react'
// import { useState } from 'react'
// import axios from 'axios';
// const AdminLogin = () => {
//     const [form, setForm] = useState({
//         email: '',
//         password: '',
//     });
//     const handleChange = (e) => {
//         // console.log(e.target.value)
//         const { name, value } = e.target;
//         setForm((prev) => ({ ...prev, [name]: value }));
//         // console.log(form);
//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // console.log(form);
//         const res = await axios.post('http://localhost:5000/api/admin/login', form);

//         // console.log(res.data.message);
//         if (res.data.message == "Login Successfully") {
//             // console.log(res.data)
//             localStorage.setItem("role", res.data.admin.role)
//             localStorage.setItem("email", res.data.admin.email)
//             window.location.href = '/admin'
//         } else {
//             window.alert("Your email or password are incorrect")
//         }

//     }
//     return (
//         <>
//             <div className="container">
//                 <div className="row">

//                     <div className="col-sm-6 mt-5 mx-auto">
//                         <h2>Admin Login</h2>
//                         <div className="card py-5">
//                             <div className="card-body">
//                                 <form onSubmit={handleSubmit}>
//                                     <div className="row">
//                                         <div className="col-sm-12 my-2">
//                                             <input type="email"
//                                                 name='email'
//                                                 className="form-control" placeholder='Enter Email'
//                                                 onChange={handleChange}
//                                             /></div>

//                                     </div>
//                                     <div className="row">
//                                         <div className="col-sm-12 ">
//                                             <div className="col-sm-12"><input type="password"
//                                                 name='password'
//                                                 className="form-control" placeholder='Enter password'
//                                                 onChange={handleChange}
//                                             /></div>
//                                         </div>
//                                     </div>
//                                     <div className="row">
//                                         <div className="col-sm-5 my-3">
//                                             <input type="submit" className='btn btn-primary' />
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default AdminLogin









import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const AdminLogin = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        // console.log(e.target.value)
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        // console.log(form);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(form);
        const res = await axios.post('http://localhost:5000/api/admin/login', form);

        // console.log(res.data.message);
        if (res.data.message == "Login Successfully") {
            localStorage.setItem("role", res.data.admin.role)
            localStorage.setItem("email", res.data.admin.email)
            window.location.href = '/admin'

        } else {
            window.alert("Your email or password or incorrect");
        }


    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#508bfcff' }}
            >
                <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
                    <h2 className="text-center mb-4">Admin Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" name='email' id="email" placeholder="Enter email" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={handleChange} />
                        </div>

                        {/* <div className="form-check mb-3">
                            <input type="checkbox" className="form-check-input" id="remember" />
                            <label className="form-check-label" htmlFor="remember">Remember password</label>
                        </div> */}
                        {/* <button type="submit" className="btn btn-primary w-100 mb-2">Login</button>
                        <div className="text-end">
                            <a href="/forgot-password" className="text-decoration-none">Forgot Password?</a>
                        </div> */}
                        <button type="submit" className="btn btn-primary w-100 mb-2">Login</button>

                        {/* <div className="text-end">
                            <Link to="/forgot-password" className="text-decoration-none">
                                Forgot Password?
                            </Link>
                        </div> */}


                    </form>
                </div>
            </div>

        </>
    )
}

export default AdminLogin
