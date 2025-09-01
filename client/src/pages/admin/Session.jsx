import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Session = () => {
 const [form , setForm] = useState({
  name:'',
  description:''
 })
//  fetch data hook
const [data , setData] = useState([]);
// handle change function
// edit form

const handleChange = (e)=>{
  // console.log(e.target.value);
  const {name , value} = e.target;
  setForm((prev)=>(
    {...prev,[name]:value}
  ));
  // console.log(form)
 
}
 // handleSubmit
 const [id , setId] = useState({
  id:'',
})
  const handleSubmit = async (e)=>{
    // window.alert("Hello")
    e.preventDefault();
   try{
     if(editForm){
      const res = await axios.put(`http://localhost:5000/api/session/${id.id}`,form)
        if(res){
          alert('Session Updated Successfully')
          handlefetch();
        }
     }
     else{
      const res = await axios.post('http://localhost:5000/api/session',form)
        if(res){
          alert('Session Added Successfully')
          handlefetch();
        }
     }
   }
   catch(er){
    alert("sorry Try Again later")
    console.log(er)
   }
  }
  // fetch data api
  const handlefetch = async()=>{
    const res = await axios.get('http://localhost:5000/api/session')
    // console.log(res.data);
    setData(res.data.data);
  }
  useEffect(() => {
   handlefetch();
  }, [])
  // console.log(data)
//  handle delete logic
const handleDelete = async (id)=>{
  // console.log(id)
  const res = await axios.delete(`http://localhost:5000/api/session/${id}`);
  if(res){
    alert("Deleted successfully")
  }else{
    alert("Try again later");
  }
  handlefetch();
}
// handle edit
const [editForm , setEditForm] = useState(null);

const handleEdit = async(item)=>{
  // console.log(item._id);
  
  setForm({
    name:item.name,
    description:item.description
  })
  setId({
    id:item._id
  })
  setEditForm(true);
  console.log(form);
}
  return (
    <div>
       <div className="row my-4">
        <div className="col-sm-10 mx-auto">
          <div className="card">
           <div className="card-body">
             <form method='POST' onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-12">
                <input type="text" name='name' value={form.name} placeholder='Enter name'  className='form-control' onChange={handleChange}/>
              </div>
              <div className="col-sm-12 my-3">
                <textarea name="description" onChange={handleChange} placeholder='Enter Description'
                value={form.description}
                  className='form-control' id=""></textarea>
              </div>
              <div className="col-sm-6">
                <input type="submit" className='btn btn-danger' />
              </div>
            </div>
            </form>
           </div>
          </div>
        </div>
       </div>
       <div className="row my-4">
        <div className="col-sm-10 mx-auto">
          <div className="card">
            <div className="card-body">
              <h2>Sessions</h2>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map through sessions data here */}
                
                  {data.map((item , i)=>(
                    <tr key={item._id}>
                      <td>{i+1}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.createdAt}</td>
                      <td>
                        <button onClick={()=>{
                          handleDelete(item._id)
                        }}>Delete</button>

                        <button onClick={()=>{
                          handleEdit(item)
                        }}>Edit</button>
                      </td>
                    </tr>
                  ))}
              
                </tbody>
              </table>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Session