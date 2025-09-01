import React, { useEffect, useState } from "react";
import axios from "axios";

const QuestionBank = () => {
  const [formData, setFormData] = useState({
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctAnswer: "",
    subject: "",
  });

  const [questions, setQuestions] = useState([]);
  const [subjects, setSubjects] = useState([]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setQuestions([...questions, formData]);
    try{
        const res = await axios.post('http://localhost:5000/api/question',formData)
        if(res){
            alert("Question Added Successfully")
        }
    }
    catch(er){
        console.log(er)
        alert("Sorry Try again")
    }
    setFormData({
      question: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctAnswer: "",
      subject: "",
    });
  };

  const [data , setData] = useState([])
  const handlefetch = async()=>{
    const res = await axios.get('http://localhost:5000/api/question')
    setData(res.data.data)
    
    const res1 = await axios.get('http://localhost:5000/api/subject')
    setSubjects(res1.data.data)
  }
useEffect(()=>{
    handlefetch();
},[])
  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit} className="border p-4 rounded">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="question"
            placeholder="Enter question here"
            value={formData.question}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              name="optionA"
              placeholder="Option 1"
              value={formData.optionA}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              name="optionB"
              placeholder="Option 2"
              value={formData.optionB}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              name="optionC"
              placeholder="Option 3"
              value={formData.optionC}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              name="optionD"
              placeholder="Option 4"
              value={formData.optionD}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
         <div className="col-sm-6">
           <input
            type="text"
            className="form-control"
            name="correctAnswer"
            placeholder="Correct Option"
            value={formData.correctAnswer}
            onChange={handleChange}
            required
          />
         </div>
         <div className="col-sm-6">
          <select name="subject" value={formData.subject} onChange={handleChange} className="form-select" required>
            <option value="">Select Subject</option>
            {subjects.map((sub) => (
              <option key={sub._id} value={sub._id}>
                {sub.name}
              </option>
            ))}
          </select>
         </div>
        </div>

        <div className="text-end">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>

      
      <div className="mt-4">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>S.N</th>
              <th>Question</th>
              <th>Subject</th>
              <th>Option 1</th>
              <th>Option 2</th>
              <th>Option 3</th>
              <th>Option 4</th>
              <th>Correct</th>
              
            </tr>
          </thead>
          <tbody>
            {data.map((q, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{q.question}</td>
                <td>{q.subject?.name}</td>
                <td>{q.optionA}</td>
                <td>{q.optionB}</td>
                <td>{q.optionC}</td>
                <td>{q.optionD}</td>
                <td>{q.correctAnswer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionBank;
