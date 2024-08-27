import React, { useEffect, useState } from 'react'
import AHeader from '../common_components/AHeader'
import AFooter from '../common_components/AFooter'
import PHead from '../../website/common_components/PHead'
import axios from 'axios'

function ManageShop() {

  const [data,setData]= useState(undefined)

  useEffect(()=>{
    fetch()
  },[data])
  const fetch = async() =>{
    const res = await axios.get(`http://localhost:3000/shop`)
    setData(res.data)
  }
// for delete
  const deleteHandle= async (id)=>{
    const res= await axios.delete(`http://localhost:3000/shop/${id}`)
  }
  // for Edit 
  const [editingdata,setEditingdata]=useState(undefined)

  const onedit=(shop)=>{
setEditingdata(shop)

  }
  const oneditchange=(e)=>{
    setEditingdata({
      ...editingdata,
      [e.target.name]:e.target.value
    })
  }
  //  for submit
const onSubmithandle= async(e)=>{

  try {
    e.preventDefault()
const res= await axios.put(`http://localhost:3000/shop/${editingdata.id}`,editingdata)
setEditingdata(undefined)
  } catch (error) {
    console.error("error api not res",error)
  }
 
}
return (
    <>
    <AHeader/>
    <PHead h1cn="Manage Shop" pnm="Manage Shop"/>
    <div className="container-fluid">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Price</th>
    </tr>
  </thead>
  <tbody>
      {
       data && data.map((value)=>{
          return(
    <tr>
      <td>{value.id}</td>
      <td>{value.pname}</td>
      <td>{value.pprice}</td>
      <td>
        <button className='btn btn-success mx-1' >view</button>
        <button onClick={()=>onedit(value)} className='btn btn-primary mx-1' >Edit</button>
        <button onClick={()=>deleteHandle(value.id)} className='btn btn-danger mx-1' >delete</button>
      </td>
    </tr>
          )
        })
      }
  </tbody>
</table>
</div>
{
  editingdata &&


<div className="col">
  <h1 className='text-center'> Edit Shop</h1>
      <div className="contact-form">
        <div id="" />
        <form  onSubmit={onSubmithandle} name="sentMessage" id="contactForm" noValidate="novalidate">
          <div className="control-group">
            <input type="text" className="form-control" id="name" name='pname' value={editingdata.pname} onChange={(e)=>oneditchange(e)} placeholder="Edit product Name" required="required" data-validation-required-message="Please enter your name" />
            <p className="help-block text-danger" />
          </div>
          <div className="control-group">
            <input type="url" className="form-control" id="email"name='pimage' value={editingdata.pimage} onChange={(e)=>oneditchange(e)} placeholder="Edit Image" required="required" data-validation-required-message="Please enter your email" />
            <p className="help-block text-danger" />
          </div>
          <div className="control-group">
            <input type="number" className="form-control" id="subject" name='pprice'onChange={(e)=>oneditchange(e)} value={editingdata.pprice} placeholder="Edit price" required="required" data-validation-required-message="Please enter a subject" />
            <p className="help-block text-danger" />
          </div>
          <div>
            <button className="btn btn-primary  m-2 col-5" type="submit" id="sendMessageButton">Submit</button>
            <button className="btn btn-primary  m-2 col-5" onClick={()=>setEditingdata(undefined)} id="sendMessageButton">cancel</button>
          </div>
        </form>
      </div>
    </div>
}
    <AFooter/>
    </>
  )
}

export default ManageShop