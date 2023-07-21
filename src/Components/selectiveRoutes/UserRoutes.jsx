import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '../api/userAPI'

const UserRoutes = () => {
    const {user}= isAuthenticated()
  return (
    <>
    {user && user.role ===0? <Outlet/>: <Navigate to ='/signin'/>}
    </>
  )
}

export default UserRoutes