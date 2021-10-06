import React from "react";

import axios from "axios";

import { Overview } from "../../components/overview";

function Product({ productId }) {
  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`/product/${productId}`)
      .then((res) => res.data.data[0])
      .then((res) => setProduct(res));
  }, []);

  return <Overview product={product} />;
}

export default Product;
