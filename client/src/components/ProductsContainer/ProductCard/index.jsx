import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import "./style.css";
function ProductCard({ productImage, productName, productPrice }) {
  return (
    <Card variant="outlined">
      <CardMedia
        component="img"
        height="320"
        image={productImage}
        alt="sss"
        sx={{ borderBottom: "1px solid #e0e0e0" }}
      />
      <CardContent
        className="product-content"
        style={{ padding: "5px 0px 10px" }}
      >
        <CardActions
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            className="product-name"
            gutterBottom
            variant="div"
            component="h3"
          >
            {productName}
          </Typography>
          <Typography
            className="product-price"
            gutterBottom
            variant="div"
            component="span"
          >
            $ {productPrice}
          </Typography>
        </CardActions>
        <Button size="small">
          <AddShoppingCartIcon style={{ color: "#000" }} />
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
