import React, { useEffect, useState } from 'react'
import { useParams, } from 'react-router-dom'
import { API } from '../../../config'
import { getRelatedProducts, productDetails } from '../../api/productAPI'
import Footer from '../Footer'
import Navbar from '../Navbar'
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Rating,
    Typography, Link
  } from "@mui/material";
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../reducer/cartActions'
const ProductDetails = () => {
    let [product, setProduct] = useState({})
    let [relatedProducts, setRelated] = useState([])
    let[rating, setRating] = useState(0)
    let{id} = useParams()

    const dispatch = useDispatch()



    useEffect(()=> {
        productDetails(id)
        .then(data=> {
            if(data.error){
                console.log(data)
            }
            else {
                setProduct(data)
                console.log(data)
            }
        })

        getRelatedProducts(id)
        .then(data=> {
            if(data.error){
                console.log(data)
            }
            else {
                setRelated(data)
            }
        })
    }, [])

    const addToCart = id => e => {
      e.preventDefault()
      dispatch(addItemToCart(id, 1))
    }
  return (
    <>
    <Navbar/>

    <div className = "conainer mx-auto p-5">
        <div className = "row border rounded-3 shadow-lg">
            <div className = 'col-md-6 p-5'>
                <img src={`${API}/${product.product_image}`} className = 'w-100'/>
            </div>
            <div className = 'col-md-6 p-5 mt-5'>
                <h3>{product.product_name}</h3>
                <h4>Rs. {product.product_price}</h4>
                <p>{product.product_description}</p>
                <h5>In Stock: {product.count_in_stock}</h5>
                <h6>Rating: <Rating value ={product.rating}></Rating></h6>
                <button className ='btn btn-warning' onClick = {addToCart(product._id)}>Add to Cart</button>



            </div>

        </div>

        <div className = 'row row-cols-1 row-cols-sm-2 row-cols-md-3 p-5 g-4'>
        {
            relatedProducts && relatedProducts.map((product) => {
                return <Card sx={{ maxWidth: 345, borderRadius: 5, margin: 1 }} key = {product._id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image={`${API}/${product.product_image}`}
                    alt={product.product_name }
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {product.product_name }
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Rs. {product.product_price}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                    In Stock: {product.count_in_stock}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                    Rating: <Rating value = {product.rating}/>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link href={`/product/${product._id}`} size="small" color="primary">
                    VIew Details
                  </Link>
                </CardActions>
              </Card> 
            })
        }
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default ProductDetails