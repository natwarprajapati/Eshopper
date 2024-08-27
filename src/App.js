import React from 'react'
import Home from './website/pages/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Shop from './website/pages/Shop'
import Details from './website/pages/Shopdetails'
import PCart from './website/pages/PCart'
import PCheckout from './website/pages/PCheckout'
import Contact from './website/pages/Contact'
import Shopdetails from './website/pages/Shopdetails'
import Adashboard from './admin/pages/Adashboard'
import Addshop from './admin/pages/Addshop'
import ManageShop from './admin/pages/ManageShop'
import ALogin from './admin/pages/ALogin'
import Ulogin from './website/pages/Ulogin'
import Uregister from './website/pages/Uregister'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageUser from './admin/pages/ManageUser'
import Profile from './website/pages/Profile'
function App() {
  return (
    <>
    <BrowserRouter>
      <ToastContainer/>
    <Routes>
      <Route path='/' element={<><Home/></>}></Route>
      <Route path='/shop' element={<><Shop/></>}/>
      <Route path='/shopdetails' element={<><Shopdetails/></>}/>
      <Route path='/cart' element={<><PCart/></>}/>
      <Route path='/checkout' element={<><PCheckout/></>}/>
      <Route path='/contact' element={<><Contact/></>}/>

      {/* admin routing */}

      <Route path='/Dashboard' element={<><Adashboard/></>}/>
      <Route path='/AddShop' element={<><Addshop/></>}/>
      <Route path='/Manageshop' element={<><ManageShop/></>}/>
      <Route path='/Alogin' element={<><ALogin/></>} />
      <Route path='/Manageuser' element={<><ManageUser/></>}></Route>

      {/* user routing */}
      
      <Route path='/ulogin' element={<><Ulogin/></>} />
      <Route path="/uregister" element={<><Uregister/></>}></Route>
      <Route path='/userprofile' element={<><Profile/></>}></Route>



    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App