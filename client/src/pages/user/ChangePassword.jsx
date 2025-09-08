import React, { useState } from 'react'
import axios from 'axios'
const ChangePassword = () => {
  const userId = localStorage.getItem('userId');
  const [data , formData] = useState({
    op:'',
    np:'',
    cnp:'',
  })
  const handleChange = (e) => {
    const {name , value} = e.target
    formData((prev)=>(
      {...prev,[name]:value}
    ));
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try
    {
const res = await axios.put(`${process.env.REACT_APP_API_URL}/examinee/change/${userId}`, data);
    if(res){
        alert(res.data.message);
        if(res.data.message === "Password Changed Successfully"){
            localStorage.removeItem('userId');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userRole');
            window.location.href = '/';
        }
    }
  }
    catch(er){
      alert("Sorry Try Again Later")
      console.log(er);
      
    }
  }
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-sm-6">
                <form onSubmit={handleSubmit} method='post'>
                  <input type="text" className="form-control" placeholder="Enter Current Password" name='op' onChange={handleChange}/>
                
                <input type="text" className="form-control" placeholder="Enter New Password" name='np' onChange={handleChange}/>

                <input type="text" className="form-control" placeholder="Confirm New Password" name='cnp' onChange={handleChange}/>

                <button className="btn btn-primary mt-3" type="submit" value="Change Password">Change Password</button>
              </form>
                </div>
            

        </div>
    </div>
    </>
  )
}

export default ChangePassword
