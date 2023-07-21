import { API } from "../../config"

export const register = (username, email, password) => {
    let user = {username, email, password}
    console.log(user)

    return fetch (`${API}/register`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then((response) => {
        return response.json()
    })
    .catch(error =>{
        console.log(error)
    })
}

export const verifyEmail = (token) => {
    return fetch (`${API}/verification/${token}`)
    .then(res=> res.json())
    .catch(err => console.log(err))
}

export const resendVerification = (email)=> {
    return fetch(`${API}/resendverification`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email})
    })
    .then(res=> res.json())
    .catch(err => console.log(err))
}

export const forgetPassword = (email) => {
    return fetch(`${API}/forgetpassword`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email})
    })
    .then(res=> res.json())
    .catch(err => console.log(err))
}

export const resetPassword = (token, password) => {
    return fetch(`${API}/resetpassword/${token}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({password})
    })
    .then(res=> res.json())
    .catch(err => console.log(err))
}

export const login = (user) => {
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res=> res.json())
    .catch(err => console.log(err))
} 

export const authenticate = (data) =>{
    localStorage.setItem('jwt', JSON.stringify(data))
}

export const isAuthenticated = () => {
    if(localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'))
    }
    else {
        return false
    }
}

export const signOut = () => {
    localStorage.removeItem('jwt')
    return fetch(`${API}/signout`)
    .then(res => res.json)
    .catch(err => console.log(err))
}

export const getUserList = ()=> {
    return fetch(`${API}/getuserlist`)
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const changeRole = (id, token)=> {
    return fetch (`${API}/togglerole/${id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
 })
 .then(res => res.json())
    .catch(err => console.log(err))
}