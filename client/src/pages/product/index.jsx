import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Overview from '../../components/overview';
import TabComponent from '../../components/Tab';
// import RelatedProducts from '../../components/RelatedProducts';

function Product() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(false);

  const productId = 1;
  // const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`/product/${productId}`)
      .then((res) => res.data.data[0])
      .then((res) => setProduct(res))
      .catch(() => setError(true));
  }, []);

  const Alert = (props) => (
    <MuiAlert elevation={6} variant="filled" {...props} />
  );
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(false);
  };

  return (
    <>
    {product ? (
    <>
    <Overview product={product} />
    <TabComponent description={product.description} productId={productId} />
    {/* <RelatedProducts relatedCategory={product.category} /> */}
    </>
    ) : null }

    <Snackbar open={error} autoHideDuration={10000} onClose={handleClose}>
      <Alert severity="error">An Error Occurred!</Alert>
    </Snackbar>
    </>
  );
}

export default Product;
