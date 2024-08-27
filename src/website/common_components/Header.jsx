import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Header({container,navclass,styl, carousel}) {
  const redirect= useNavigate()
  const [isLoggedOut,setIsLoggedOut]=useState(false)
  useEffect(()=>{
    if(!localStorage.getItem('userId')){
      redirect('/Ulogin')
    }
  },[isLoggedOut,redirect])
  const userImage= localStorage.getItem('userImage')

  const logoutHandle=()=>{
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('userImage');
    setIsLoggedOut(true);
    redirect('/Ulogin');

    toast.error('you are logged Out')
  }
  return (
    <>
    <div>
  {/* Topbar Start */}
  <div className={container}>
    <div className="row bg-secondary py-2 px-xl-5">
      <div className="col-lg-6 d-none d-lg-block">
        <div className="d-inline-flex align-items-center">
          <a className="text-dark" href>FAQs</a>
          <span className="text-muted px-2">|</span>
          <a className="text-dark" href>Help</a>
          <span className="text-muted px-2">|</span>
          <a className="text-dark" href>Support</a>
        </div>
      </div>
      <div className="col-lg-6 text-center text-lg-right">
        <div className="d-inline-flex align-items-center">
          <a className="text-dark px-2" href>
            <i className="fab fa-facebook-f" />
          </a>
          <a className="text-dark px-2" href>
            <i className="fab fa-twitter" />
          </a>
          <a className="text-dark px-2" href>
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="text-dark px-2" href>
            <i className="fab fa-instagram" />
          </a>
          <a className="text-dark pl-2" href>
            <i className="fab fa-youtube" />
          </a>
        </div>
      </div>
    </div>
    <div className="row align-items-center py-3 px-xl-5">
      <div className="col-lg-3 d-none d-lg-block">
        <a href className="text-decoration-none">
          <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
        </a>
      </div>
      <div className="col-lg-6 col-6 text-left">
        <form action>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for products"/>
            <div className="input-group-append">
              <span className="input-group-text bg-transparent text-primary">
                <i className="fa fa-search" />
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="col-lg-3 col-6 text-right">
        <a href className="btn border">
          <i className="fas fa-heart text-primary" />
          <span className="badge">0</span>
        </a>
        <a href className="btn border">
          <i className="fas fa-shopping-cart text-primary" />
          <span className="badge">0</span>
        </a>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <div className="container-fluid mb-5">
    <div className="row border-top px-xl-5">
      <div className="col-lg-3 d-none d-lg-block">
        <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{height: 65, marginTop: '-1px', padding: '0 30px'}}>
          <h6 className="m-0">Categories</h6>
          <i className="fa fa-angle-down text-dark" />
        </a>
        <nav className={navclass} id="navbar-vertical" style={{styl}} >
          


          <div className="navbar-nav w-100 overflow-hidden" style={{height: 410}}>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1" /></a>
              <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                <a href className="dropdown-item">Men's Dresses</a>
                <a href className="dropdown-item">Women's Dresses</a>
                <a href className="dropdown-item">Baby's Dresses</a>
              </div>
            </div>
            <a href className="nav-item nav-link">Shirts</a>
            <a href className="nav-item nav-link">Jeans</a>
            <a href className="nav-item nav-link">Swimwear</a>
            <a href className="nav-item nav-link">Sleepwear</a>
            <a href className="nav-item nav-link">Sportswear</a>
            <a href className="nav-item nav-link">Jumpsuits</a>
            <a href className="nav-item nav-link">Blazers</a>
            <a href className="nav-item nav-link">Jackets</a>
            <a href className="nav-item nav-link">Shoes</a>
          </div>
        </nav>
      </div>
      <div className="col-lg-9">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
          <a href className="text-decoration-none d-block d-lg-none">
            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
          </a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav mr-auto py-0">
              <NavLink to="/" className="nav-item nav-link">Home</NavLink>
              <NavLink to="/shop" className="nav-item nav-link">Shop</NavLink>
              <NavLink to="/shopdetails" className="nav-item nav-link">Shop Details</NavLink>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle " data-toggle="dropdown">Pages</a>
                <div className="dropdown-menu rounded-0 m-0 ">
                  <NavLink to="/cart" className="dropdown-item ">Shopping Cart</NavLink>
                  <NavLink to="/checkout" className="dropdown-item">Checkout</NavLink>
                </div>
              </div>
              <NavLink to="/Contact" className="nav-item nav-link">Contact</NavLink>
            </div>
            {
              (
                ()=>{
                  if(localStorage.getItem('userId')){
                    return(<> <Link to='/userprofile' className="nav-item nav-link pr-4">hii {localStorage.getItem("userName")}</Link> 
                    
                    <Link className="nav-item nav-link " to='/userprofile'>
            {userImage ? <img src={userImage} alt="User" style={{height:'35px', width:"35px", borderRadius:"50%", border:"1px solid black"}}/> : <span>No Image</span>}
          </Link>
                    <Link className="nav-item nav-link pr-5 pl-5" onClick={logoutHandle}>Log Out</Link> </>)
                  }
                }
              )( )}
            {/* <div className="navbar-nav ml-auto py-0">
              <Link to="/ulogin" className="nav-item nav-link">Login</Link>
              <Link to="/uregister" className="nav-item nav-link">Register</Link>
            </div> */}
          </div>
        </nav>
        <>{carousel}</>
      </div>
    </div>
  </div>
</div>

      
    </>
  )
}

export default Header