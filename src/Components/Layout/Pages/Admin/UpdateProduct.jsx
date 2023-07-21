import React, { useEffect, useReducer, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../../../../config'
import { getAllCategories } from '../../../api/categoryAPI'
import { addProduct, productDetails, updateProduct } from '../../../api/productAPI'
import { isAuthenticated } from '../../../api/userAPI'
import Navbar from '../../Navbar'
import AdminCategories from './AdminCategories'
import AdminSidebar from './AdminSidebar'

const UpdateProduct = () => {
    const {id} = useParams()

    const sel_ref = useRef()
    
    const productReducer = (state, action) => {
        switch(action.type) {
          case "loadProduct":
            sel_ref.current = action.payload.category._id
            return {...state, ...action.payload}
            default:
              if(action.target.name = "product_image") {
                return {...state, [action.target.name]: action.target.files[0]}
              } else {
                return {...state, [action.target.name]:action.target.value}
        
              }
        }
    }

    
    const [product, setProduct] = useReducer(productReducer, {formdata: new FormData})

    const[categories, setCategories] = useState([])
    const token = isAuthenticated

    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)
    const{product_name, product_image, product_price, count_in_stock, product_description} = product

    useEffect(() => {
      getAllCategories()
      .then(data => {
        if(data.error) {
          console.log(data.error)
         }
        else {
          setCategories(data)
        }
      })
      productDetails(id)
      .then(data => {
        if(data.error) {
            console.log(data.error)
        }
        else {
            console.log(data)
            setProduct ({type: "loadProduct", payload:data})
        }
      })
    }, [])



    //console.log(formdata)

    const handleSubmit = e => {
      e.preventDefault()
      updateProduct(id, product.formdata, token)
      .then(data => {
        if(data.error) {
          setError(data.error)
          setSuccess(false)
        }
        else {
          setSuccess(true)
          setError('')
        }
      })
    }

    const showError = () => {
      if(error) {
        return <div className = 'alert-alert-danger'>{error}</div>
      }
    }

    const showSuccess = () => {
      if(success) {
        return <div className = 'alert-alert-success'>Product added successfully.</div>
      } 
    }    
  return (
    <>
     <Navbar/>
   <div className="container-fluid">
    <div className="row">
      <div className="col-md-3 col-sm-6">
      <AdminSidebar/>
      </div>
      <div className="col-md-9 col-sm-6">
        <h3 className = 'text-success text-decoration-underline pt-3'>Add new product.</h3>

    <form className = 'w-50 px-5 pt-3 pb-5 p-5 my-3 shadow-lg text-decoration-underline'>
      {showError()}
      {showSuccess()}
      <h3>Product Details</h3>
        <label htmlFor = "product_name">Product Name</label>
        <input type = "text" className = 'form-control' name = 'product_name' onChange = {setProduct} value={product_name}/>

        <label htmlFor = "product_name">Product Price</label>
        <input type = "text" className = 'form-control' name = 'product_price' onChange = {setProduct} value={product_price}/>

        <label htmlFor = "product_name">Product Description</label>
        <textarea type = "text" className = 'form-control' name = 'product_description' onChange = {setProduct} value={product_description}/>

        <label htmlFor = "product_name">Count in stock</label>
        <input type = "number" className = 'form-control' name = 'count_in_stock' onChange = {setProduct} value={count_in_stock}/>

        <label htmlFor = "product_name">Product Image</label>
        <img src = {`${API}/${product_image}`} alt = {product_name} style = {{height: "300px"}}/>
        <input type = "file" className = 'form-control' name = 'product_image' onChange = {setProduct}/>

        <label htmlFor = "product_name">Category</label>
        <select name = "category" id = "" className = 'form-control' onChange = {setProduct} ref = {sel_ref}>
          <option value="">Choose Category</option>
          {
            categories.map(category => {
              return <option value = {category._id} key={category._id}>{category.category_name}</option>
            })
          }
        </select>

        <button className = "btn btn-warning mt-2 w-100" onClick = {handleSubmit}>Update Product</button>
    </form>

      </div>

    </div>
   </div>
    </>
  )
}

export default UpdateProduct