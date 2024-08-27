import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import AHeader from '../common_components/AHeader';
import AFooter from '../common_components/AFooter';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function ALogin() {
  const redirect = useNavigate()

  useEffect(()=>{
    if(localStorage.getItem("adminId")){
redirect("/dashboard")
    }
  })

const [loginvalue,setLoginvalue]=useState({
  email:"",
  password:""
})

const changleHandle=(e)=>{
  setLoginvalue({
    ...loginvalue,
  [e.target.name]:e.target.value}
  )

}

const {email,password}=loginvalue;

//  login handle
const loginhandle= async (e)=>{
    e.preventDefault()
  
  
try {
  const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
 const admin= res.data[0]
  if(!email.trim()){
   toast.error("please enter email and password")
   return false;
  } 
  else if(!password.trim()){
    toast.error("please enter a password")
  }
   else if(res.data.length===0 ){
      toast.error("please enter valid email address")
      return false
    }
   
     if(admin.password!==password){
      console.error("please enter correct password")
      return false
    }
    
    // session created 

    localStorage.setItem("adminid",admin.id)
    localStorage.setItem("adminname",admin.name)

    toast.success("login success")

    // redirect
    redirect("/dashboard")


} catch (error) {
  console.error("please enter valid api",error)
  
}
}
 

  return (
    <>
    <MDBContainer fluid>
      <form action="" onSubmit={loginhandle}>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
      <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
        <p className="text-white-50 mb-5">Please enter your email and password!</p>

        <MDBInput wrapperClass='mb-4 mx-5 w-100' name='email' value={loginvalue.email} onChange={(e)=>changleHandle(e)} labelClass='text-white' label='Email address' id='a_login_email' type='email' size="lg"/>
        <MDBInput wrapperClass='mb-4 mx-5 w-100' name='password' value={loginvalue.password} onChange={(e)=>changleHandle(e)} labelClass='text-white' label='Password' id='a_login_password' type='password' size="lg"/>

        <p className="small mb-3 pb-lg-2"><a class="text-white-50" >Forgot password?</a></p>
        <MDBBtn outline className='mx-2 px-5' type='submit' color='white' size='lg' onClick={loginhandle}>
          Login
        </MDBBtn>

        <div className='d-flex flex-row mt-3 mb-5'>
          <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="lg"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='twitter' size="lg"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='google' size="lg"/>
          </MDBBtn>
        </div>

        <div>
          <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>
        </div>
      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>
</form>
</MDBContainer>
\
    </>
  )
}

export default ALogin