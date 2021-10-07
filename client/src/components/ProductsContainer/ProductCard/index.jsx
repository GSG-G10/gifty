import { useState, forwardRef } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';

import axios from 'axios';

import './style.css';

function ProductCard({
  productID, productImage, productName, productPrice,
}) {
  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState('');
  const [addedMsg, setAddedMsg] = useState('');
  const [added, setAdded] = useState(false);
  const [sthWrong, setSthWrong] = useState(false);
  const Alert = forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAdded(false);
  };
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  const handleClick = () => {
    history.push(`/product/${productID}`);
  };

  const handleAddToCart = () => {
    axios.post('/addToCart', {
      productId: productID, quantity: 1,
    })
      .then((response) => response.data)
      .then((result) => {
        setAddedMsg(result.msg);
        setAdded(true);
      })
      .catch(() => {
        setErrorMsg('Something wrong!');
        setSthWrong('Something wrong!');
      });
  };
  return (
      <Card variant="outlined" style={{ cursor: 'pointer' }}>
        <CardMedia
          component="img"
          height="320"
          image={productImage}
          alt={productName}
          sx={{ borderBottom: '1px solid #e0e0e0' }}
          onClick={handleClick}
        />
        <CardContent
          className="product-content"
          style={{ padding: '5px 0px 10px' }}
        >
          <CardActions
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
            onClick={handleClick}
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
          <Button size="small" onClick={handleAddToCart}>
            <AddShoppingCartIcon style={{ color: '#000' }} />
          </Button>
        </CardContent>
        {!errorMsg
          ? <Snackbar
         open={added}
         autoHideDuration={6000}
         onClose={handleClose}
         action={action}
       ><Alert severity="success">{addedMsg}</Alert></Snackbar> : <Snackbar
       open={sthWrong}
       autoHideDuration={6000}
       onClose={handleClose}
       action={action}
     ><Alert severity="error">Something Wrong!</Alert></Snackbar>
      }

      </Card>
  );
}

export default ProductCard;
