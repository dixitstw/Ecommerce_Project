const { API } = require("../../config")

export const getAllProducts = () => {
    return fetch(`${API}/getallproducts`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const addProduct = (product, token) => {
    return fetch (`${API}/addproduct`, {
        method: "POST",
        headers: {
            authorization: `Bearer ${token}`
        },
        body: product
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const productDetails = (id) => {
    return fetch (`${API}/getproductdetails/${id}`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const updateProduct = (id, product, token) => {
    return fetch (`${API}/updateproduct/${id}`, {
        method: "PUT",
        headers: {
            authorization: `Bearer ${token}`
        },
        body: product
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const getFilteredProducts = (filter) => {
    return fetch(`${API}/getfilteredproducts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({filter})

    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const getRelatedProducts = (id) => {
    return fetch(`${API}/getrelatedproducts/${id}`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}