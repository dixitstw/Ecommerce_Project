import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { API } from "../../../config";
import { getAllProducts, getFilteredProducts, getFiltereProducts } from "../../api/productAPI";
import CategoriesCheckbox from "../../CategoriesCheckbox";
import PriceRadio from "../../PriceRadio";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([])

  //{category: [mobile_id, laptop_id], product: [0, 999]}

  const handleFilter = (filters, filterBy) => [
    setFilter({...filter, [filterBy]:filters})
  ]

  useEffect(() => {
    // getAllProducts()
    getFilteredProducts()
    .then((data) => {
      if (data.error) {
        console.log(data.error);
      } else setProducts(data);
    });
  }, [filter]);
  return (
    <>
      <Navbar />
      <Box display={"flex"}>
        <Box width="25%" backgroundColor="skyblue" padding="25px">
          <Typography variant="h4" color="secondary" fontWeight="bold">
            Deals
          </Typography>

          <ul className="list-unstyled h4">
            <li>
              <Link href="#" sx={{ textDecoration: "none", color: "gold" }}>
                Deals of the day
              </Link>
            </li>
            <li>
              <Link href="#" sx={{ textDecoration: "none", color: "gold" }}>
                Flash Sales
              </Link>
            </li>
            <li>
              <Link href="#" sx={{ textDecoration: "none", color: "gold" }}>
                New year offer
              </Link>
            </li>
          </ul>

          {/* Categories */}
          <CategoriesCheckbox handleCategory = {handleFilter} />

          {/* For Prices*/}
          <PriceRadio handlePrice = {handleFilter} />
        </Box>
        <Box width="75%">
          <Grid container spacin={4} padding={4}>
            {products &&
              products.map((product, i) => {
                return (
                  <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345, borderRadius: 5 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="240"
                          image={`${API}/${product.product_image}`}
                          alt={product.product_image}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                          {product.product_image }
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
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Products;
