import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../../../api/userAPI'
import { getMyOrders } from '../../../api/orderAPI'

const UserProfile = () => {
    let {user} = isAuthenticated()

    let [orders, setOrders] = useState([])

    useEffect(()=> {
        getMyOrders(user._id)
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
    <h3 className = 'text-end pe-5 my-5'>Welcome, {user.username}</h3>
    <table className = 'table table-bordered table-hover text-center align-middle'>
            <thead>
                <tr>
                    <td>S.No</td>
                    <td>Order Id</td>
                    <td>Placed On</td>
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
                            <td>{item.createdAt.date}</td>
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
    </>
  )
}

export default UserProfile