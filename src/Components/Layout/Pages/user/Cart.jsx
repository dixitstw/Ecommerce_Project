import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { API } from '../../../../config'
import { emptyCart, remove_from_cart, updateCart } from '../../../reducer/cartActions'
import { REMOVE_FROM_CART } from '../../../reducer/cartConstants'
import Footer from '../../Footer'
import Navbar from '../../Navbar'

const Cart = () => {
  const cart_items = useSelector(state=> state.cart.cart_items )
  const dispatch = useDispatch()

  const cart_totals = cart_items?.map(item=> item.product_price * item.quantity)
  const total_amount =  cart_totals.length>0 && cart_totals.reduce((a, b)=> a + b)
  
  sessionStorage.setItem('total', total_amount)

  const emptyTheCart = () =>{
    Swal.fire({
      title: "Alert",
      text:  "Are you sure you want to clear the cart?",
      icon: "question",
      showCancelButton: "true"})
    .then(result=> {
      if(result.isConfirmed){
        dispatch(emptyCart())

      }
    })
     
  }

  const increaseQuantity = (item) => e => {
    e.preventDefault()
    //item.quantity++
   if(item.quantity==item.count_in_stock){
      Swal.fire('Warning', 'Maximum quantity reached.', 'error')
    }
    else {
      item.quantity++
      dispatch(updateCart(item))

    }
  }

  const decreaseQuantity = (item) => e => {
    e.preventDefault()
    if(item.quantity===1){
      Swal.fire('Warning', 'Cannot decrease quantity', 'error')
    }
    else {
      item.quantity--
      dispatch(updateCart(item))

    }
  }

  const removeFromCart = (id) => e => {
    e.preventDefault()
    Swal.fire({
      title: "Alert",
      text:  "Are you sure you want to remove this item from cart?",
      icon: "question",
      showCancelButton: "true"})
    .then(result=> {
      if(result.isConfirmed){
        dispatch(remove_from_cart(id))

      }
    })
  }

  return (
    <>
    <Navbar/>
    <div className="container-fluid mt-5">
      <h3 className = 'text-decoration-underline text-center mb-3'>Cart Items</h3>
      {cart_items.length > 0 ?
      <table className ='table text-cener table-hover alighn-middle table-bordered'>
        <thead>
          <tr className ='table-dark'>
            <td>S.No.</td>
            <td>Prodct Image</td>
            <td>Product Name</td>
            <td>Unit Price</td>
            <td>Quantity</td>
            <td>Total Price</td>
            <td>Action</td>
            </tr>

        </thead>

        <tbody>
          {
            cart_items && cart_items.map((item, i)=> {
              return <tr key = {item._id}>
                <td>{i + 1}</td>
                <td>
                  <img src= {`${API}/${item.product_image}`} alt ={item.product_name} style = {{height: "100px "}}/>
                </td>
                <td>{item.product_name}</td>
                <td>Rs. {item.product_price}</td>
                
                <td>
                  <div className = 'btn-group'>
                    <button className = 'px-2 btn btn-warning' onClick = {decreaseQuantity(item)}>-</button>
                
                  <span className = 'px-3 py-2'>
                  {item.quantity}
                  </span>
                  <button className = 'px-2 btn btn-success' onClick ={increaseQuantity(item)}>+</button>
                  </div>
                  </td>


                <td>Rs. {item.quantity * item.product_price}</td>
               <td>
                 <button className ='btn btn-danger' onClick ={removeFromCart(item._id)}>Remove</button>
                 </td>
              </tr>
            })
          }
          <tr>
            <td colSpan ={5} className ='text-end'>Cart Total: </td>
            <td>Rs.{total_amount}</td>
            <td>
              <button className = 'btn btn-danger' onClick = {emptyTheCart}>Empty Cart</button>
            </td>
          </tr>

          <tr>
            <td colSpan ={7} className = 'text-end'>
              <Link className = 'btn btn-info' to='/checkout'>Proceed to Checkout.</Link>
            </td>
          </tr>
        </tbody>
      </table>
      :
      <div className = 'alert alert-danger w-50 m-auto'>No Items in Cart</div>
}
    </div>
    <Footer/>
    </>
  )
}

export default Cart