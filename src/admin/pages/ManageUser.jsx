import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AHeader from '../common_components/AHeader'
import PHead from '../../website/common_components/PHead'

function ManageUser() {
    const[users, setUsers]=useState(undefined)
    useEffect(()=>{
        fetch()
    },[users])
    const fetch= async()=>{
        const  response = await axios.get(`http://localhost:3000/user`)
        setUsers(response.data)
    }
    

    const handleChangeStatus= async(id, currentstatus)=>{

      try {
         const updatedStatus = currentstatus === "blocked" ? "unblock" : "blocked"
         await axios.patch(`http://localhost:3000/user/${id}`, {status:updatedStatus})
         fetch()
         localStorage.removeItem('userId')
         
      } catch (error) {
        console.error('Error updating status:', error) 
      }
    }

    const handleRemove = async (id)=>{
      try {
        await axios.delete(`http://localhost:3000/user/${id}`)
      } catch (error) {
        console.error("Error Remove user")
      }
    }
  return (
    <>
    <AHeader/>
    <PHead h1cn="Manage User" pnm="Manage User"/>
    <div className="container-fluid table-responsive">
    <table className="table " >
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">UserName</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Email Adress</th>
      {/* <th scope="col">ImageUrl</th> */}
      <th scope="col">status</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>
      {
        users && users.map((value,index)=>{
          return(
            <tr key={index}>
      <td>{value.id}</td>
      <td>{value.name}</td>
      <td>{value.mnumber}</td>
      <td>{value.email}</td>
      {/* <td>{value.image}</td> */}
      <td>
      <button  className={`btn ${value.status === "blocked" ? "btn-danger" : "btn-success"}`} onClick={()=>handleChangeStatus(value.id, value.status)} >{value.status}</button>
      </td>

      <td>
        <button  className='btn btn-danger' >Remove</button>
      </td>
    </tr>
          )
        })
      }
  </tbody>
</table>
</div>
      </>
  )
}

export default ManageUser