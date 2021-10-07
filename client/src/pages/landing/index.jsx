import { useEffect, useState } from 'react';
import axios from 'axios';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Slider from '../../components/slider';
import ProductsContainer from '../../components/ProductsContainer';
import Footer from '../../components/common/Footer';

function Landing() {
  const [products, setProducts] = useState([]);
  const [filterdProducts, setFilterProducts] = useState(products);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const Alert = (props) => (
    <MuiAlert elevation={6} variant="filled" {...props} />
  );

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(false);
  };

  useEffect(() => {
    axios
      .get('/products')
      .then((response) => response.data.data)
      .then((data) => {
        setProducts(data);
        setFilterProducts(data);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  return (
    <>
      <Slider / >
      <ProductsContainer
      products={products}
      setFilterProducts={setFilterProducts}
      filterdProducts={filterdProducts}
      loading={loading} />
      <Snackbar open={error} autoHideDuration={10000} onClose={handleClose}>
        <Alert severity="error">An Error Occurred!</Alert>
      </Snackbar>
      <Footer />
    </>
  );
}

export default Landing;
