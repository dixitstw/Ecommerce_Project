import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <>
     <div className="flex-shrink-0 p-3" style={{"width": "280px"}}>
    <ul className="list-unstyled ps-0">
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fs-4 fw-bold text-success" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
          Category
        </button>
        <div className="collapse show" id="home-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ps-5 text-warning fw-bold">
            <li><Link to="/admin/category" className="link-warning d-inline-flex text-decoration-none rounded">Category List</Link></li>
            <li><Link to="/admin/category/add" className="link-warning d-inline-flex text-decoration-none rounded">Add Category</Link></li>
          </ul>
        </div>
      </li>
      <li classNameName="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fs-4 fw-bold text-success" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          Product
        </button>
        <div className="collapse" id="dashboard-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ps-5 text-warning fw-bold">
            <li><Link to="/admin/products" className="link-warning d-inline-flex text-decoration-none rounded">Product List</Link></li>
            <li><Link to="/admin/product/add" className="link-warning d-inline-flex text-decoration-none rounded">Add Product</Link></li>
        
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fs-4 fw-bold text-success" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          Orders
        </button>
        <div className="collapse" id="orders-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ps-5 fw-bold">
            <li><Link to="#" className="link-warning d-inline-flex text-decoration-none rounded">New</Link></li>
            <li><Link to="#" className="link-warning d-inline-flex text-decoration-none rounded">Processed</Link></li>
            <li><Link to="#" className="link-warning d-inline-flex text-decoration-none rounded">Shipped</Link></li>
            <li><Link to="#" className="link-warning d-inline-flex text-decoration-none rounded">Returned</Link></li>

          </ul>
        </div>
      </li>
      <li classNameName="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fs-4 fw-bold text-success" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          Users
        </button>
        <div className="collapse" id="dashboard-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ps-5 fw-bold">
            <li><Link to="/admin/users" className="link-warning d-inline-flex text-decoration-none rounded">User List</Link></li>        
          </ul>
        </div>
      </li>
      <li className="border-top my-3"></li>
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fs-4 fw-bold text-success" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
          Account
        </button>
        <div className="collapse" id="account-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ps-5 fw-bold">
            <li><Link to="/admin/orders" className="link-warning d-inline-flex text-decoration-none rounded">Orders List</Link></li>
            <li><Link to="#" className="link-warning d-inline-flex text-decoration-none rounded">Profile</Link></li>
            <li><Link to="#" className="link-warning d-inline-flex text-decoration-none rounded">Settings</Link></li>
            <li><Link to="#" className="link-warning d-inline-flex text-decoration-none rounded">Sign out</Link></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>

    </>
  )
}

export default AdminSidebar