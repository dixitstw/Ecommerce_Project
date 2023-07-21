import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '../api/userAPI'

const AdminRoutes= () => {
    const {user}= isAuthenticated()
  return (
    <>
    {user && user.role ===1? <Outlet/>: <Navigate to ='/signin'/>}
    </>
  )
}

export default AdminRoutes