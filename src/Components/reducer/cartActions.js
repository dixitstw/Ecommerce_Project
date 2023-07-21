import { productDetails } from "../api/productAPI";
import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART, UPDATE_CART } from "./cartConstants";

export const addItemToCart = (product_id, quantity) =>async (dispatch, getState) => {
    // productDetails(product_id)
    // .then(data=> {
    //     if(data.error) {
    //         console.log(data.error)
    //     }
    //     else {

    //     }
    // })
    // .catch(error) => console.log(error)
    try {
        let data = await productDetails(product_id)
        dispatch({
            type: ADD_TO_CART,
            payload: { 
                ...data,
                quantity: quantity
            }
        })
    }
    catch (error){
        console.log(error)
    }
    localStorage.setItem("cart_items", JSON.stringify(getState().cart.cart_items))

}

export const emptyCart = () => (dispatch, getState) => {
   dispatch({
    type: EMPTY_CART
   }) 
   localStorage.setItem("cart_items", JSON.stringify(getState().cart.cart_items))
}

export const updateCart = (product) => (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_CART,
            payload: { 
               product
            }
        })
    }
    catch (error){
        console.log(error)
    }
    localStorage.setItem("cart_items", JSON.stringify(getState().cart.cart_items))

}

export const remove_from_cart = (id) => (dispatch, getState)=> {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    })
    localStorage.setItem("cart_items", JSON.stringify(getState().cart.cart_items))

}
