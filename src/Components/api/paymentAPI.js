import { API } from "../../config"

export const getStripeKey = () => {
    return fetch(`${API}/getStripeKey`)
    .then(res=> res.json)
    .catch(error=> console.log(error))
}

export const processPayment = (amount, token) => {
    return fetch(`${API}/processPayment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({amount})
    })
    .then(res=> res.json)
    .catch(error=> console.log(error))
}