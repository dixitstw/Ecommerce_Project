import React, { useState } from "react";
import { addCategory } from "../../../api/categoryAPI";
import { isAuthenticated } from "../../../api/userAPI";
import Navbar from "../../Navbar";
import AdminSidebar from "./AdminSidebar";

const AddCategory = () => {
    let [category, setCategory] = useState('')
    const {token} = isAuthenticated()
    let{error, setError} = useState('')
    let{success, setSuccess} = useState(false)

    const handleClick = e => {
        e.preventDefalut()
        addCategory(category, token)
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
            return <div className = 'alert-alert-success'>New Category Added.</div>
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
              <input type="text" id="category_name" className="form-control" onChange = {e=> setCategory(e.target.value)} />
              <button className="btn btn-warning w-100 mt-2" onClick = {handleClick}>
                Add Category
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
