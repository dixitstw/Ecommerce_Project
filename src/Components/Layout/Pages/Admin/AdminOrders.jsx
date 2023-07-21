import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar'
import AdminSidebar from './AdminSidebar'
import { getAllOrders } from '../../../api/orderAPI'

const AdminOrders = () => {
    let [orders, setOrders] = useState([])

    useEffect(()=> {
        getAllOrders()
        .then(data=> {
            if(data.error){
                console.log(data.error)
            }
            else {
                setOrders(data)
            }
        })
    }, [])
  return (
    <>
    <Navbar/>
   <div className="container-fluid">
    <div className="row">
      <div className="col-md-3 col-sm-6">
      <AdminSidebar/>
      </div>
      <div className="col-md-9 col-sm-6">
        <h3 className = 'text-success text-decoration-underline pt-3'>Orders</h3>
        <table className = 'table table-bordered table-hover text-center align-middle'>
            <thead>
                <tr>
                    <td>S.No</td>
                    <td>Order Id</td>
                    <td>Customer</td>
                    <td>Order Items</td>
                    <td>Order Total</td>
                    <td>Order Status</td>
                </tr>
            </thead>
            <tbody>
                {
                    orders && orders.map ((item, i) => {
                        return <tr key = {i}>
                            <td>{i + 1}</td>
                            <td>{item._id}</td>
                            <td>item.user.username</td>
                            <td>
                                {
                                    item.orderItems.map(orderItem=> {
                                        return <h5>{orderItem.product.product_name} - {orderItem.quantity}</h5>
                                    })
                                }
                            </td>
                            <td>Rs.{item.total}</td>
                            <td>item.status</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
      </div>

    </div>
   </div>
    </>
  )
}

export default AdminOrders