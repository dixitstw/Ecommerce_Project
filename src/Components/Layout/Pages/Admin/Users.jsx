import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { changeRole, getUserList, isAuthenticated } from '../../../api/userAPI'
import Navbar from '../../Navbar'
import AdminSidebar from './AdminSidebar'

const Users = () => {
    const [users, setUsers] = useState([])
    const {token} = isAuthenticated()

    const [success, setSuccess] = useState(false)


    useEffect(()=> {
        getUserList()
        .then(data=> {
            if(data.error) {
                console.log(data.error)
            }
            else setUsers(data)
        })

    }, [success])

    const handleRole = id => e => {
        e.preventDefault()
        setSuccess(false)
        changeRole(id, token)
        .then(data => {
            if(data.error) {
                console.log(data.error)
                Swal.fire("Error",data.error, "error")
            }
            else {
                setSuccess(true)
                console.log(data.message)
                Swal.fire("Success", "Change role successfully", "success")
            }
        })
    }


  return (
    <>
    <Navbar/>
   <div className="container-fluid">
    <div className="row">
      <div className="col-md-3 col-sm-6">
      <AdminSidebar/>
      </div>
      <div className="col-md-9 col-sm-6">
        <h3 className = 'text-success text-decoration-underline pt-3'>Users List</h3>
        <table className = 'table table-hover text-center'>
        <thead>
            <tr>
                <td>S.No.</td>
                <td>Username</td>
                <td>Email</td>
                <td>Verified</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            {
            users && users.map((user, i)=> {
                return <tr key = {user._id}>
                    <td>{i+1}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role?"admin":"client"}</td>
                    <td>{user.isVerified?"Verified": "Unverified"}</td>
                    <td>
                       {user.role? 
                       <button className = "btn btn danger" onClick = {handleRole(user._id)}>"Remove Admin"</button>:
                        <button className = "btn btn info" onClick = {handleRole(user._id)}>"Make Admin"</button>}
                    </td>

                </tr>
            })
}
        </tbody>
        </table>
      </div>

    </div>
   </div>
    </>
  )
}

export default Users