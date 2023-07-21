//rafce=> react arrow function export component
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { updateCategory } from "./Components/api/categoryAPI";
import AddCategory from "./Components/Layout/Pages/Admin/AddCategory";
import AddProduct from "./Components/Layout/Pages/Admin/AddProduct";
import AdminCategories from "./Components/Layout/Pages/Admin/AdminCategories";
import AdminDashboard from "./Components/Layout/Pages/Admin/AdminDashboard";
import AdminProducts from "./Components/Layout/Pages/Admin/AdminProducts";
import UpdateCategory from "./Components/Layout/Pages/Admin/UpdateCategory";
import UpdateProduct from "./Components/Layout/Pages/Admin/UpdateProduct";
import Users from "./Components/Layout/Pages/Admin/Users";
import Contact from "./Components/Layout/Pages/Contact";
import EmailVerification from "./Components/Layout/Pages/EmailVerification";
import ForgetPassword from "./Components/Layout/Pages/ForgetPassword";
import Home from "./Components/Layout/Pages/Home";
import Payment from "./Components/Layout/Pages/Payment";
import PaymentComponent from "./Components/Layout/Pages/PaymentComponent";
import ProductDetails from "./Components/Layout/Pages/ProductDetails";
import Products from "./Components/Layout/Pages/Products";
import Register from "./Components/Layout/Pages/Register";
import ResendVerification from "./Components/Layout/Pages/ResendVerification";
import ResetPassword from "./Components/Layout/Pages/ResetPassword";
import Shipping from "./Components/Layout/Pages/Shipping";
import Signin from "./Components/Layout/Pages/Signin";
import Cart from "./Components/Layout/Pages/user/Cart";
import AdminRoutes from "./Components/selectiveRoutes/AdminRoutes";
import UserRoutes from "./Components/selectiveRoutes/UserRoutes";
import First from "./First";
import AdminOrders from "./Components/Layout/Pages/Admin/AdminOrders";
import UserProfile from "./Components/Layout/Pages/user/UserProfile";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/first" element={<First />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/verification/:token" element={<EmailVerification />} />
        <Route path="/resendverification" element={<ResendVerification />} />
        <Route path="/forgotpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/checkout" element={<Shipping/>} />


        <Route path="/admin/" element={<AdminRoutes />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="category" element={<AdminCategories />} />
          <Route path="category/add" element={<AddCategory />} />
          <Route
            path="category/update/:id"
            element={<UpdateCategory />}
          />
          <Route path="products" element={<AdminProducts />} />
          <Route path="product/add" element={<AddProduct />} />
          <Route path="product/update/:id" element={<UpdateProduct />} />
          <Route path="users" element={<Users />} />
          <Route path="orders" element = {<AdminOrders/>}/>
        </Route>

      <Route path = '/' element = {<UserRoutes/>}>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/checkout:/id' element = {<Shipping/>}/>
      <Route path ='payment' element ={<PaymentComponent/>}/>
      <Route path ='user/profile' element = {<UserProfile/>}/>

      </Route>

      <Route path='/product/:id' element={<ProductDetails/>}/>
     
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
