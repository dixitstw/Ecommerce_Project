import React, { useReducer, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authenticate, isAuthenticated, login } from '../../api/userAPI'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Signin = () => {

  const user_login = isAuthenticated().user 
  const myUserReducer = (state, action) => {
    return {...state, [action.target.name]:action.target.value}
  }
  const [user, setUser] = useReducer(myUserReducer,{})

    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)
    let navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    login(user)
    .then (data => {
      if(data.error) {
        setError(data.error)
      }
      else {
        setSuccess(true)
        authenticate(data)
      }
    })
  }

  const showError = () => {
    if(error) {
      return <div className ='alert-alert-danger'>{error}</div>
    }
  }

  const redirect = () => {
    if(success) {
      if(user_login.role === 1) {
        navigate('/admin/dashboard')
      } else {
        navigate('/home')
    }
  }
  }
  return (
    <>

    <Navbar/>
    {showError()}
    {redirect()}

    <div className='row w-100'>
        <div className='col-md-8 col-lg-6 m-auto'>

    <main className="form-signin w-100 m-auto p-5 my-5 shadow-lg">
  <form>

    <div className='text-center'>
    <img className="mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1QqkYGaGcbG0MjW0-IJG7tczmiR3pAsXJZfzxgbvlJxZ0jx8-64zCPyC6K8fJEEio8W0&usqp=CAU" alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    </div>
    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name= 'email' onChange = {setUser}/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name = 'password' onChange ={setUser}/>
      <label for="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick = {handleSubmit}>Sign in</button>

    <div className='d-flex justify-content-between'>
        <p>Do not have an account? <Link to ='/register'>Register</Link></p>
        <Link to ='/forgotpassword'>Forgot Password?</Link>
    </div>
    <p className="mt-5 mb-3 text-muted text-center">&copy; 2017–2022</p>
    </form>
</main>
        </div>
    </div>


    <Footer/>
    </>
  )
}

export default Signin