import React, { useState } from 'react'
import { forgetPassword } from '../../api/userAPI'
import Navbar from '../Navbar'

const ForgetPassword = () => {
    let [email, setEmail] = useState('')
    let [error, setError] = useState('')
    let[success, setSuccess] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        forgetPassword(email)
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
        <label htmlFor = 'email'>E-mail:</label>
        <input type = 'text' placeholder = 'enter email here' id ='email' className = 'form-control' onChange = {e=> setEmail(e.target.value)}></input>
        <button className ='btn btn-warning form-control' onClick ={handleSubmit}>Forget Password</button>
    </form>
    </>
  )
}

export default ForgetPassword