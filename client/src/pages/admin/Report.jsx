import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Report = () => {
    const [data , setData] = useState([]);
    const handlefetch = async()=>{
       try
       {
const res = await axios.get(`${process.env.REACT_APP_API_URL}/exams/report`);
         setData(res.data);
        console.log(res.data)
       }catch(er){
        alert("Sorry fetching reports")
       }
    }
    useEffect(()=>{
        handlefetch();
    },[])
    
    const handlePrint = ()=>
    {
        
    }
  return (
   <div className="container-fluid">
<div className="col-sm-10 mx-auto">
    <h2 className='text-center'>Report Generation</h2>
    <p className='text-center'>This feature is under development. Please check back later
    </p>
    <table className='table table-bordered'>
       <thead>
         <tr>
            <th>S.N</th>
            <th>Exam Name</th>
            <th>Examinee</th>
            <th>Examinee Email</th>
            <th>Total marks</th>
            <th>Passing Marks</th>
            <th>Score</th>
            <th>Status</th>
            <th>DOE</th>
            <th>Action</th>
        </tr>
       </thead>
       <tbody>
        {data.map((item , i)=>(
            <tr key={item._id}>
                <td>{i+1}</td>
                <td>{item.examTitle}</td>
                <td>{item.examineeName}</td>
                <td>{item.examineeEmail}</td>
                <td>{item.totalMarks}</td>
                <td>{item.passingMarks}</td>
                <td>{item.score}</td>
                <td>{item.status}</td>
                <td>{item.attemptedAt}</td>
                <td>
            <button className='btn btn-success' onClick={handlePrint}>Print</button>
                </td>
            </tr>
        ))}
       </tbody>
    </table>
</div>
   </div>  
   )
}

export default Report
