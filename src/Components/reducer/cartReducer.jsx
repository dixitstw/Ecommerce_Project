import Swal from "sweetalert2";
import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, UPDATE_CART } from "./cartConstants";

const initial_data = {
    cart_items: []
}

export const cartReducer = (state = initial_data, action)=> {
    switch(action.type){
        case ADD_TO_CART:
            let item = action.payload
            let itemExists = state.cart_items.find(cart_item => cart_item._id===item._id)
            if(itemExists){
                Swal.fire({
                    "title": "Warning",
                    "text": "Item already in cart",
                    "icon": "Warning",
                    "timer": 3000,
                    
                })
                return {...state, cart_items:[...state.cart_items]}

            }
            else {
                Swal.fire({
                    "title": "Success",
                    "text": "Item added in cart",
                    "icon": "Success",
                    "timer": 3000,
                    
                })
                return {...state, cart_items:[...state.cart_items, item]}

            }
            break

        case REMOVE_FROM_CART:
            return {...state,
            cart_items: [...state.cart_items.filter(item=> item._id!==action.payload)]}
            break
        case EMPTY_CART:
            return {
        ...state, cart_items: [] 
        }

        case UPDATE_CART:
            return{
                ...state, cart_items: [...state.cart_items.map(item=> {
                    return item._id===action.payload._id? action.payload : item
                })]
            }
        default:
            return state
    }
}