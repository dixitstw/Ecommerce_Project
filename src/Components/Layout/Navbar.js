import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, signOut } from "../api/userAPI";

const Navbar = () => {

  let cart_items = useSelector(state=> state.cart.cart_items)
  

  let navigate = useNavigate()
  let { user } = isAuthenticated();

  const handleSignOut = () => {
    signOut()
    .then(data => {
      if(data.error) {
        console.log(data.error)
      }
      else {
        navigate('/signin')
      }
    })
  }



  return (
    <>
      <div className="container-fluid bg-dark text-white">
        <div className="row">
          <div className="col-md-3 fw-bold fs-3 text-center">
            <Link to="/" className="text-white text-decoration-none">
              My Store
            </Link>
          </div>
          <div className="col-md-6 d-flex py-1">
            <input
              type="search"
              placeholder="enter your search here"
              className="form-control me-1"
            />
            <button className="btn btn-warning">Search</button>
          </div>
          <div className="col-md-3 fs-3 d-flex justify-content-evenly">
            {
              user &&
              (user.role === 1?
                <Link to ='/admin/dashboard'><i className = 'bi bi-speedometer text-white'></i></Link>
                :
                <>
                <Link to = '/user/profile'><i className = 'bi bi-person-circle text-white'></i></Link>
                <Link to="/cart" className = 'position-relative'>
              <i className="bi bi-cart text-white">
              { 
              cart_items.length>0 && 
              <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger fs-6" style = {{top: "10px", left: "45px"}}>
    {cart_items?.length}
    <span class="visually-hidde  n">unread messages</span>
  </span>
  }
  </i>

            </Link>
                </>
                )
            }
            {!user ? (
              <>
                <Link to="/signin">
                  <i className="bi bi-box-arrow-in-left text-white"></i>
                </Link>
                <Link to="/register">
                  <i className="bi bi-person-plus text-white"></i>
                </Link>
              </>
            ) : (
              <span role = 'button' onClick = {handleSignOut}>
                <i className="bi bi-box-arrow-right text white"></i>
              </span>
            )}

          </div>
        </div>
      </div>

      <div className="container-fluid bg-primary-subtle py-1">
        <div className="d-flex justify-content-evenly">
          <Link
            to="/home"
            className="text-success fw-bold fs-5 text-decoration-none"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-success fw-bold fs-5 text-decoration-none"
          >
            Products
          </Link>
          <Link
            to="#"
            className="text-success fw-bold fs-5 text-decoration-none"
          >
            About
          </Link>
          <Link
            to="#"
            className="text-success fw-bold fs-5 text-decoration-none"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-success fw-bold fs-5 text-decoration-none"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
