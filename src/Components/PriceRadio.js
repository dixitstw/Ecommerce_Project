import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

const PriceRadio = (handlePrice) => {
  const prices = [
    {
      id: 0,
      name: "ALL",
      value: [],
    },
    {
      id: 1,
      name: "Upto Rs.1000",
      value: [0, 1000],
    },
    {
      id: 2,
      name: "Rs.1000-10000",
      value: [1001, 10000],
    },
    {
      id: 3,
      name: "10000-50000",
      value: [10001, 50000],
    },
    {
      id: 4,
      name: "50000-100000",
      value: [50001, 100000],
    },
    {
      id: 5,
      name: "Rs.100001-1000000",
      value: [100001, 100000000],
    },
  ];

  const handleChange = e => {
    const price_id = e.target.value
    const price = prices.find(item => item.id == price_id)
    handlePrice(price.value, 'product_price')
  }
  return (
    <>
      <Typography
        variant="h4"
        color="secondary"
        fontWeight="bold"
        marginTop="20px"
      >
        Product Price
      </Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue='0'
          name="radio-buttons-group"
        >
          {prices.map((price) => {
            return (
              <FormControlLabel
                value={price.id}
                control={<Radio />}
                label={price.name}
                onChange = {handleChange}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default PriceRadio;
