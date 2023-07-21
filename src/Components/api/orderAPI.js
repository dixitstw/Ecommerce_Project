import { API } from "../../config"

export const placeOrder = (order)=> {
    return fetch(`${API}/placeholder`, {
        method: "POST",
        headers: {
            "Content-type": "application/json" 
        },
        body: JSON.stringify(order)
    })
    .then (res=> res.json())
    .catch(err =>console.log(err))
}

export const getAllOrders = () => {
    return fetch (`${API}/getallorders`)
    .then(res=> res.json)
    .catch(err=> console.log(err))
}

export const getMyOrders = (id) => {
    return fetch (`${API}/userorders/${id}`)
    .then(res=> res.json)
    .catch(err=> console.log(err))
}

