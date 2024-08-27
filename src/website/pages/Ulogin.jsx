import React, { useEffect, useState } from 'react';
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
import Header from '../common_components/Header';
import PHead from '../common_components/PHead';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Ulogin() {
  const redirect = useNavigate()
  useEffect(()=>{
    if (localStorage.getItem('userId')){
      redirect('/')
    }
  })

  const [userLoginValue, setuserLoginValue]= useState({
    email:"",
    password:""
  })

  const changleHandle=(e)=>{
    setuserLoginValue({
      ...userLoginValue, 
      [e.target.name]:e.target.value
    })
  }
  const {email, password}=userLoginValue;

  const loginHandle=async (e)=>{
    e.preventDefault()
    try {
      const res= await axios.get(`http://localhost:3000/user?email=${email}`)
      const user =res.data[0]
      console.log(res)
      console.log(user)
      if(!email.trim()){
        toast.error("Please Enter Email Address")
        return false;
      }
      else if(!password.trim()){
        toast.error('please Enter password')
        return false
      }
      else if (res.data.length===0){
        toast.error('please Enter Valid Email Address')
        return false
      }
      else if (user.password !==password){
        toast.error('Please Enter Correct Password')
        return false
      }
      else if(user.status=="blocked"){
        toast.error('Your Account Is Blocked, Please Contact Support')
        return false}
      // session create

      localStorage.setItem('userId',user.id)
      localStorage.setItem('userName',user.name)
      localStorage.setItem('userImage',user.image)

      toast.success('login successfull')
      redirect('/')

    } catch (error) {
      console.error("please enter valid api",error)
    }
  }

  return (<>
  <Header container="container-fluid" navclass="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" styl="width: calc(100% - 30px); z-index: 1;"/>
  <PHead h1cn="LogIN now" pnm="login"/>
    <MDBContainer fluid>
    <form action="" onSubmit={loginHandle}>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your email and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' name="email" value={userLoginValue.email} onChange={changleHandle} id='useremail' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' name="password" value={userLoginValue.password} onChange={changleHandle} id='userpassword' type='password' size="lg"/>

              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
            <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={loginHandle}>
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
                <p className="mb-0">Don't have an account? <Link to="/uregister" class="text-white-50 fw-bold">Sign Up</Link></p>
              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>
    </form>
    </MDBContainer>
    </>
  );
}

export default Ulogin;