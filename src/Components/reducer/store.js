import {combineReducers, legacy_createStore as createStore, applyMiddleware} from "redux";
import {cartReducer} from "./cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
 


    const rootReducer = combineReducers({
        cart: cartReducer
    })

    const initial_data = {
        cart: {
            cart_items: localStorage.getItem('cart_items')?JSON.parse(localStorage.getItem('cart_items')): []
        }
    }

    const middleware = [thunk]
 
export const store = createStore(rootReducer, initial_data, composeWithDevTools(applyMiddleware(...middleware)))