import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Overview from '../../components/overview';

function Product() {
  const { productId } = useParams();
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
