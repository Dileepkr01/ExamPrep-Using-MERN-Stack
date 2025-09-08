// import React, { useState } from 'react'
// import axios from 'axios'
// const Login = () => {
//     const [data, formData] = useState({
//         email: '',
//         password: ''
//     })
//     const handleChange = (e) => {
//         const { name, value } = e.target
//         formData((prev) => ({ ...prev, [name]: value }));
//         console.log(data)
//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const res = await axios.post('http://localhost:5000/api/examinee/login', data)
//         // console.log(res.data.message)
//         if (res.data.message == "Login Successfully") {
//             localStorage.setItem("userRole", res.data.user.role)
//             localStorage.setItem("userEmail", res.data.user.email)
//             localStorage.setItem("userId", res.data.user.id)
//             window.location.href = '/user/'

//         }

//     }
//     return (
//         <>
//             <div className="container">
//                 <div className="row">

//                     <div className="col-sm-6 mt-5 mx-auto">
//                         <h2>User Login</h2>
//                         <div className="card py-5">
//                             <form onSubmit={handleSubmit}>
//                                 <div className="row">
//                                     <div className="col-sm-12 my-2">
//                                         <input type="email" className="form-control" name="email" placeholder='Enter Email' onChange={handleChange} /></div>

//                                 </div>
//                                 <div className="row">
//                                     <div className="col-sm-12 ">
//                                         <div className="col-sm-12">
//                                             <input type="text" className="form-control" name="password" placeholder='Enter password' onChange={handleChange} /></div>
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col-sm-5 my-3">
//                                         <input type="submit" className='btn btn-primary' />
//                                     </div>
//                                     <div className="col-sm-7 my-3">
//                                         <a href="/register" className='btn btn-secondary'>Register</a>
//                                         <a href="/adlogin" className='btn btn-secondary'>Admin Login</a>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Login








import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/examinee/login`, data);
            if (res.data.message === "Login Successfully") {
                localStorage.setItem("userRole", res.data.user.role);
                localStorage.setItem("userEmail", res.data.user.email);
                localStorage.setItem("userId", res.data.user.id)
                window.location.href = "/user/";
            } else {
                setError(res.data.message || "Login failed. Please try again.");
            }
        } catch (err) {
            setError("Server error. Please try again later.");
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100"
            style={{ backgroundColor: '#508bfcff' }}
        >
            <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="text-center mb-4">Sign in</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            value={data.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="remember" />
                        <label className="form-check-label" htmlFor="remember">Remember password</label>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mb-2">Login</button>


                    <div className="col-sm-7 my-3 d-flex gap-3">
                        <a href="/registration" className="btn btn-secondary">
                            Register
                        </a>
                        <a href="/adlogin"
                            className="btn btn-secondary"
                            style={{ whiteSpace: "nowrap" }}>
                            Admin Login
                        </a>
                    </div>





                </form>
            </div>
        </div>
    );
};

export default Login;
