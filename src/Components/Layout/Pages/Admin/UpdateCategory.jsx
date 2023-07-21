import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addCategory, getCategoryDetails, updateCategory } from "../../../api/categoryAPI";
import { isAuthenticated } from "../../../api/userAPI";
import Navbar from "../../Navbar";
import AdminSidebar from "./AdminSidebar";

const UpdateCategory = () => {
    let [category, setCategory] = useState('')
    const {token} = isAuthenticated()
    let{error, setError} = useState('')
    let{success, setSuccess} = useState(false)

    const {id} = useParams()
    
    useEffect(()=> {
      getCategoryDetails(id)
      .then(data => {
        if(data.error) {
          console.log(data.error)
        }
        else {
          setCategory(data)
        }
      })
    }, [])

    const handleClick = e => {
        e.preventDefalut()
        updateCategory(id, category, token)
        .then(data=> {
            if(data.error) {
                setError(data.Error)
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
            return <div className = 'alert aler-danger'>{error}</div>
        }
    }

    const showSuccess = () => {
        if(success) {
            return <div className = 'alert-alert-success'>Category Updated.</div>
        }
    }

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <AdminSidebar />
          </div>
          <div className="col-md-9 col-sm-6">
            <h3 className="text-success text-decoration-ubderline pt-3">
              Add Category
            </h3>

            <form className="w-50 p-5 shadow-lg">
                {showError()}
                {showSuccess()}
              <label htmlFor="category_name">Category Name</label>
              <input type="text" id="category_name" className="form-control" onChange = {e=> setCategory(e.target.value)} value = {category.category_name} />
              <button className="btn btn-warning w-100 mt-2" onClick = {handleClick}>
                Update Category
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateCategory;
