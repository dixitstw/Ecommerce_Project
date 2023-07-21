import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import {
  deleteCategory,
  getAllCategoires,
  getAllCategories,
} from "../../../api/categoryAPI"
import { isAuthenticated } from "../../../api/userAPI"
import Navbar from "../../Navbar"
import AdminSidebar from "./AdminSidebar"

const AdminCategories = () => {
  const [categories, setCategories] = useState([])
  const { token } = isAuthenticated()
  const [success, setSuccess] = useState(false)
  useEffect(() => {
    getAllCategories()
      .then((data) => {
        if (data.error) {
          console.log(data.error)
        } else {
          setCategories(data);
        }
      })
      .catch((err) => console.log(err))
  }, [success])

  const handleDelete = (id) => (e) => {
    e.preventDefault()
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCategory(id, token).then((data) => {
          if (data.error) {
            Swal.fire("Error!", data.error, "error")
          } else {
            Swal.fire("Deleted!", "Category has been deleted.", "success")
            setSuccess(true)
          }
        });
      } else {
        Swal.fire("Cancel", "Cancelled by user", "info")
      }
    })
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
            <h3 className="mt-3 text-success text-decoration-underline">
              Categories
            </h3>
            <table
              className="table w-75 table-bordered text-center table-hover align-middle"
              role="button"
            >
              <thead>
                <tr className="table-dark">
                  <td>S.No.</td>
                  <td>Category Name</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {categories &&
                  categories.map((category, index) => {
                    return (
                      <tr key={category._id}>
                        <td>{index + 1}</td>
                        <td>{category.category_name}</td>
                        <td>
                          <div className="btn-group">
                            <Link
                              to={`/admin/category/update/${category._id}`}
                              className="btn btn-warning"
                            >
                              <i className="bi bi-pencil">Update</i>
                            </Link>
                            <button
                              className="btn btn-danger"
                              onClick={handleDelete(category._id)}
                            >
                              Remove<i className="bi bi-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                <tr>
                  <td colspan={3}>
                    <Link
                      to={"/admin/category/add"}
                      className="btn btn-success"
                    >
                      Add New Category
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCategories;
