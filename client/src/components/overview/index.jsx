import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ImageListItem from '@mui/material/ImageListItem';
import { Snackbar, Card } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import './index.css';

const Overview = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [stars, setStars] = useState(0);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const addToCart = () => {
    axios
      .post('/addToCart', { productId: product.id, quantity })
      .then((res) => setSuccess(res.data.msg))
      .catch((err) => setError(err.response.data.Error));
  };

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
    <Box className="Overview" >
        <Box className='img-container'>
          <ImageListItem className="productImg">
            <img style={{ width: '100%' }} src={product.img} alt={`${product.name} img`} />
          </ImageListItem>
        </Box>
        <Card className='info-container'>
            <CardContent>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderBottom: '0',
                  boxShadow: '0 1px 0px 0 hsla(0,0%,0%,.2)',
                }}
              >
                <Typography variant="h5" component="div" style={{
                  marginBottom: '10px', fontWeight: 700,
                }}>
                  {product.name}
                </Typography>
                <Typography variant="body2">
                  <Rating
                    name="disabled"
                    value={stars}
                    onChange={(e) => setStars(e.target.value)}
                    style={{ marginBottom: '15px' }}
                  />
                </Typography>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography
                variant="h5"
                sx={{ mb: 1.5 }}
                style={{ marginTop: '4vh', fontWeight: 'bold' }}
              >
                $ {quantity * product.price}.00
              </Typography>
              <Typography
                variant="h5"
                sx={{ mb: 1.5 }}
                style={{ marginTop: '4vh', fontSize: '1rem', color: '#AC7D02' }}
              >
                In Stock
              </Typography>
              </div>
              <Typography variant="h7" sx={{ mb: '1.5vh', fontSize: '.9rem', fontWeight: '600' }}>
                Free Shipping to Gaza
              </Typography>
            </CardContent>
            <CardActions >
               <div style={{
                 width: '100%',
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'flex-start',
                 justifyContent: 'space-between',
                 padding: '10px',
               }}>
              <Typography variant="h7" sx={{ mb: 1.5 }}>
                Quantity :
              </Typography>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  height: '8vh',
                  width: '100%',
                }}
              >
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  style={{
                    width: '14%',
                    height: '9vh',
                    fontSize: '1.5rem',
                    border: '2px solid #BDB9DC',
                    borderRadius: '5px',
                    textAlign: 'center',
                    padding: '10px',
                  }}
                />
              <Button
                style={{
                  backgroundColor: '#BDB9DC',
                  color: '#0B2F4A',
                  width: '80%',
                  height: '9vh',
                  fontWeight: 'bold',
                }}
                size="large"
                onClick={addToCart}
              >
                Add to Cart
                <AddShoppingCartIcon style={{ color: '#0B2F4A', marginLeft: '20px' }} />
              </Button>
              </div>
              </div>
            </CardActions>
        </Card>
    </Box>
    <Snackbar open={Boolean(error)} autoHideDuration={10000} onClose={handleClose}>
      <Alert severity="error">{error}</Alert>
    </Snackbar>
    <Snackbar open={Boolean(success)} autoHideDuration={10000} onClose={handleClose}>
      <Alert severity="success">{success}</Alert>
    </Snackbar>
        </>

  );
};
export default Overview;
