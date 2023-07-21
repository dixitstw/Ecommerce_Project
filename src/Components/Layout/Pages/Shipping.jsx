import React, { useReducer } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { API } from "../../../config";
import { isAuthenticated } from "../../api/userAPI";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Shipping = () => {
  const { cart_items } = useSelector((state) => state.cart);

  const shippingAddressReducer = (state, event) => {
    return { ...state, [event.target.name]: event.target.value };
  };
  const { user } = isAuthenticated();

  const [shipping_info, setShippingInfo] = useReducer(
    shippingAddressReducer,
    localStorage.getItem("shipping_info")
      ? JSON.parse(localStorage.getItem("shipping_info"))
      : { name: user.username }
  )

  const updateShipping = (e) => {
    e.preventDefault();
    localStorage.setItem("shipping_info", JSON.stringify(shipping_info));
  };

  const {
    shipping_address,
    alternate_shipping_address,
    city,
    zipcode,
    country,
    phone,
  } = shipping_info;

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <form className="p-5">
              <h3>Shipping Address</h3>
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                className="form-control mb-2"
                id="Address"
                name="shipping_address"
                onChange={setShippingInfo}
                value={shipping_address}
              />
              <label htmlFor="alternate_shipping_address">
                Alternate Shipping Address
              </label>
              <input
                type="text"
                classsName="form-control mb-2"
                id="alternate_shipping_address"
                name="alternate_shipping_address"
                onChange={setShippingInfo}
                value={alternate_shipping_address}
              />
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control mb-2"
                id="city"
                name="city"
                onChange={setShippingInfo}
                value={city}
              />
              <label htmlFor="zipcode">Zipcode</label>
              <input
                type="text"
                className="form-control mb-2"
                id="zipcode"
                name="zipcode"
                onChange={setShippingInfo}
                value={zipcode}
              />
              <label htmlFor="country">Country</label>
              <input
                type="text"
                className="form-control mb-2"
                id="country"
                name="country"
                onChange={setShippingInfo}
                value={country}
              />
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className="form-control mb-2"
                id="phone"
                name="phone"
                onChange={setShippingInfo}
                value={phone}
              />
              <button
                className="btn btn-warning w-100"
                onClick={updateShipping}
              >
                Save Shipping Info
              </button>
            </form>
          </div>
          <div className="col-md-7 p-5">
            <h3>Cart Items</h3>
            <table className="table text-cener table-hover alighn-middle table-bordered">
              <thead>
                <tr className="table-dark">
                  <td>S.No.</td>
                  <td>Prodct Image</td>
                  <td>Product Name</td>
                  <td>Quantity</td>
                  <td>Total Price</td>
                </tr>
              </thead>

              <tbody>
                {cart_items &&
                  cart_items.map((item, i) => {
                    return (
                      <tr key={item._id}>
                        <td>{i + 1}</td>
                        <td>
                          <img
                            src={`${API}/${item.product_image}`}
                            alt={item.product_name}
                            style={{ height: "100px " }}
                          />
                        </td>
                        <td>{item.product_name}</td>

                        <td>
                          <span className="px-3 py-2">{item.quantity}</span>
                        </td>

                        <td>Rs. {item.quantity * item.product_price}</td>
                      </tr>
                    );
                  })}
                <tr>
                  <td colSpan={4} className="text-end">
                    Cart Total:{" "}
                  </td>
                  <td>Rs.{sessionStorage.getItem("total")}</td>
                </tr>

                {/* <tr>
            <td colSpan ={7} className = 'text-end'>
              <Link className = 'btn btn-info' to='/checkout'>Proceed to Checkout.</Link>
            </td>
          </tr> */}
              </tbody>
            </table>

            <div className="text-end">
              <Link to="/payment" className="btn btn-warning ">
                Proceed to payment.
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Shipping;
