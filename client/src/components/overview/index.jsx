import * as React from "react";

import axios from "axios";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ImageListItem from "@mui/material/ImageListItem";

import "./index.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "94%",
  borderRadius: "0",
}));

export const Overview = ({ product }) => {
  const [total, setTotal] = React.useState(product.price);
  const [quantity, setQuantity] = React.useState(1);
  const [stars, setStars] = React.useState(0);
  const [message, setMessage] = React.useState("");

  const addToCart = () => {
    axios
      .post("/addToCart", { productId: product.id })
      .then((res) => res.json())
      .then((res) => setMessage(res.msg))
      .catch((err) => setMessage(err));
  };

  return (
    <Box className="Overview" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={18}>
        <Grid item xs={4}>
          <ImageListItem className="productImg">
            <img style={{ width: "100%" }} src={product.img} alt="sss" />
          </ImageListItem>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <CardContent
              style={{
                width: "95%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: ".7vw",
                  borderBottom: "0",
                  boxShadow: "0 1px 0px 0 hsla(0,0%,0%,.2)",
                }}
              >
                <Typography variant="h4" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2">
                  <Rating
                    name="disabled"
                    value={stars}
                    onChange={(e) => setStars(e.target.value)}
                  />
                </Typography>
              </div>
              <Typography
                variant="h3"
                sx={{ mb: 1.5 }}
                style={{ marginTop: "4vh" }}
              >
                $ {quantity * total}.00
              </Typography>
              <Typography variant="h7" sx={{ mb: 1.5 }}>
                {product.description}
              </Typography>
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "8vh",
                }}
              >
                <Typography variant="h7" sx={{ mb: 1.5 }}>
                  Quantity :
                </Typography>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  style={{
                    width: "40%",
                    height: "5vh",
                    fontSize: "1.5rem",
                    border: ".7px solid #BDB9DC",
                  }}
                />
              </div>
              <Button
                style={{
                  backgroundColor: "#BDB9DC",
                  color: "#0B2F4A",
                  width: "50%",
                  height: "5vh",
                }}
                size="large"
                onClick={product.length > 0 && addToCart}
              >
                Add to Cart
              </Button>
            </CardActions>
            {message}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
