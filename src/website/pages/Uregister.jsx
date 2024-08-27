import React, { useState } from 'react';
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
import axios from "axios";

import {Link, useNavigate } from 'react-router-dom';
import PHead from '../common_components/PHead';
import { toast } from 'react-toastify';

function Uregister() {

    const redirect= useNavigate()

    const[rgvalue,setRgvalue]=useState({
        id:"",
        name:"",
        mnumber:"",
        email:"",
        password:"",
        cpassword:"",
        image:"",
        status:""
    })

    const adddata=(e)=>{
        setRgvalue({
            ...rgvalue,
            id:new Date().getTime().toString(),
            [e.target.name]:e.target.value,
            status:'unblock'
        })
    }

    const submitHandle= async (e)=> {
        e.preventDefault();

        if(!rgvalue.id===0 || !rgvalue.name===0|| !rgvalue.mnumber===0||!rgvalue.email===0 || !rgvalue.password===0||!rgvalue.cpassword||!rgvalue.image ){
            console.error("please enter your all details")
            return false
        }
        else if(rgvalue.password !== rgvalue.cpassword){
            toast.error("password and confirm password not same")
            return false
        }
        delete rgvalue.cpassword

        const res= await axios.post(`http://localhost:3000/user`, rgvalue)
        console.log(res)
        toast.success('you have ragistred successfully please login now')
        redirect("/ulogin")
    }
    
    
    

  return (<>
  <PHead  h1cn="Register now" pnm="register"/>
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Register Now</h2>
              <p className="text-white-50 mb-5">Please enter your valid details</p>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Enter Name' id='name' name="name" value={rgvalue.name} onChange={adddata} type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Mobile Number' id='mnumber' type='tel' name="mnumber" value={rgvalue.mnumber} onChange={adddata} size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='email' type='email' name="email" value={rgvalue.email} onChange={adddata} size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='password' type='password' name="password" value={rgvalue.password} onChange={adddata} size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Confirm Password' id='confirmpassword' type='password' name="cpassword" value={rgvalue.cpassword} onChange={adddata} size="lg"/>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='profile picture' id='image' type='file' name="image" value={rgvalue.image} onChange={adddata} size="lg"/>


              <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={submitHandle}>
                Register
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
                <p className="mb-0">You have an account? <Link to="/ulogin" class="text-white-50 fw-bold">Login Now</Link></p>
              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  );
}

export default Uregister;