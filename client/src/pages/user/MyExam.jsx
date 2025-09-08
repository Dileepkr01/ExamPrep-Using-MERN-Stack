import React, { useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router';
const MyExam = () => {
    const [exam , setExam] = React.useState([]);
    const fetchExams = async () => {
const res = await axios.get(`${process.env.REACT_APP_API_URL}/exams/exams`);
        setExam(res.data);
        // console.log(res.data);
        
    }
        useEffect(() => {
        fetchExams();
    }, []);
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-10 mx-auto">
                <div className="table-responsive">
                    <table className='table table-bordered table-hover'>
                       <thead>
                         <tr>
                            <th>S.N</th>
                            <th>Exam Name</th>
                            <th>Date of Exam</th>
                            <th>Time</th>
                            <th>Action</th>
                        </tr>
                       </thead>
                       <tbody>
                         {exam.map((item, i) => (
                            <tr key={item._id}>
                                <td>{i + 1}</td>
                                <td>{item.title}</td>
                                <td>{new Date(item.date).toLocaleDateString()}</td>
                                <td>{item.time}</td>
                                <td>
        <Link to={`/user/getexam/${item._id}`} className="btn btn-primary">Start Exam</Link>

                                </td>
                            </tr>
                            ))}
                       </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MyExam
