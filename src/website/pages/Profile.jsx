import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
  }
  from 'mdb-react-ui-kit';
import Header from '../common_components/Header';
import Footer from '../common_components/Footer';
import PHead from '../common_components/PHead';
import { Link, redirect, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Profile() {

  const redirect = useNavigate()


    const [userProfile , setUserProfile]= useState({
      id:null,
      name:'' ,
      mnumber:'',
      email: '',
      password: '',
      image:'',
    })

    useEffect(()=>{
    fetch();
    },[])
    // const fileInputRef = useRef(null);
    const userId= localStorage.getItem('userId')

const  fetch= async()=>{
  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}`)
    setUserProfile(response.data)
    
  } catch (error) {
    console.error('Error Fetching User profile',error)
  }
}

const handelChange=(e)=>{
  setUserProfile({
    ...userProfile,
    [e.target.id]:e.target.value
  })
}
// const handleImageClick = ()=>{
// fileInputRef.current.click();
// }

//  const  handleImageChange =async (e)=>{
//   const file = e.target.files[0];
//   if (file){
//     const formData = new formData();
//     formData.append('image', file)

//     try {
//       const response =await axios.post(`http://localhost:3000/user/uploadImage/${userProfile.id}`, formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data'
//                     }
//                 });
//                 setUserProfile(prevState => ({
//                   ...prevState,
//                   image: response.data.imageUrl 
//               }));
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   }
//  }
 const handleUpdate = async () => {
  try {
      await axios.put(`http://localhost:3000/user/${userProfile.id}`, userProfile); // Assuming the API requires an ID to update
      toast.success('Profile updated successfully!');
      redirect('/')
      localStorage.setItem('userImage', userProfile.image)
  } catch (error) {
      console.error('Error updating profile:', error);
  }
};
  return (
    <>
    <Header container="container-fluid" navclass="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" styl=" width: 'calc(100% - 30px)', zIndex: '1'"/>
    <PHead h1cn="Profile" pnm="Profile"/>
    <MDBContainer fluid className="p-3 my-5">

<MDBRow>
  
  <MDBCol col='10' md='6'>

    <img src={userProfile.image}   class="img-fluid" alt="Phone image" />
    {/* <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            accept="image/*"
                            onChange={handleImageChange}
                        /> */}


  </MDBCol> 

  <MDBCol col='4' md='6'>

 <MDBInput wrapperClass='mb-4' label='Name' id='name' value={userProfile.name} type='email' onChange={handelChange} size="lg"/>

 <MDBInput wrapperClass='mb-4' label='Mobile Number' id='mnumber' value={userProfile.mnumber} onChange={handelChange}  type='email' size="lg"/>


 <MDBInput wrapperClass='mb-4' label='Email address' id='email' value={userProfile.email} onChange={handelChange}  type='email' size="lg"/>


    <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' onChange={handelChange}  value={userProfile.password} size="lg"/>

    <MDBInput wrapperClass='mb-4' label='ImageUrl' id='image' type='url' onChange={handelChange} value={userProfile.image}   size="lg"/>


    <MDBBtn className="mb-4 w-100" size="lg" onClick={handleUpdate}>Update Profile</MDBBtn>


  </MDBCol>

 </MDBRow>

 </MDBContainer>

<Footer/>
    </>
  )
}
export default Profile