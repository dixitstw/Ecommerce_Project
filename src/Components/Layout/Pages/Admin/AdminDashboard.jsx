import React from 'react'
import Navbar from '../../Navbar'
import AdminSidebar from './AdminSidebar'

const AdminDashboard = () => {
  return (
    <>
    <Navbar/>
   <div className="container-fluid">
    <div className="row">
      <div className="col-md-3 col-sm-6">
      <AdminSidebar/>
      </div>
      <div className="col-md-9 col-sm-6">
        <h3 className = 'text-success text-decoration-underline pt-3'>Welcome to Admin Dashboard.</h3>
      </div>

    </div>
   </div>
    </>
  )
}

export default AdminDashboard