const { API } = require("../../config")

export const getAllCategories = () => {
    return fetch(`${API}/getall`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const getCategoryDetails= (id) => {
    return fetch(`${API}/getCategoryDetails/${id}`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}


export const addCategory = (category_name, token) => {
    return fetch(`${API}/addcategory`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body:JSON.stringify({category_name})
    })
    .then(res=> res.json())
    .catch(err=>console.log(err))
}
 
export const updateCategory = (id, category_name, token) => {
    return fetch(`${API}/updatecategory/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body:JSON.stringify({category_name})
    })
    .then(res=> res.json())
    .catch(err=>console.log(err))
}

export const deleteCategory = (id, token) => {
    return fetch(`${API}/deletecategory/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        },    })
    .then(res=> res.json())
    .catch(err=>console.log(err))
}