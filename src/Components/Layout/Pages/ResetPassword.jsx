import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {resetPassword } from '../../api/userAPI'
import Navbar from '../Navbar'

const ResetPassword = () => {
    let [password, setPassword] = useState('')
    let [error, setError] = useState('')
    let[success, setSuccess] = useState('')

  let {token} = useParams()
    const handleSubmit = e => {
        e.preventDefault()
        resetPassword(token, password)
        .then(data => {
            if(data.error){
              setError(data.error)
            }
            else {
              setSuccess(data.msg)
            }
          })
    }

    const showError = ()=> {
        if(error) {
          return <div className = 'alert alert-danger'>{error}.</div>
        }
      }
    
      const showSuccess = ()=> {
        if(success) {
          return <div className = 'alert alert-success'>{success}.</div>
        }
      }
  return (
    <>
        <Navbar/>
    {showError()}
    {showSuccess()}
    <form className = 'w-50 m-auto p-5 my-5 shadow-lg'>
        <label htmlFor = 'pwd'>New Password:</label>
        <input type = 'password' placeholder = 'enter new Password here.' id ='pwd' className = 'form-control' onChange = {e=> setPassword(e.target.value)}></input>
        <button className ='btn btn-warning form-control' onClick ={handleSubmit}>Reset Password</button>
    </form>
    </>
  )
}

export default ResetPassword