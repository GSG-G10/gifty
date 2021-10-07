import { useState, useEffect, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import MuiAlert from '@mui/material/Alert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../../assets/gifty.png';

import './style.css';

const Header = () => {
  const [basket, setBasket] = useState(0);
  const [sthWrong, setSthWrong] = useState('');
  const Alert = forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
      >
      </IconButton>
    </>
  );
  useEffect(() => {
    axios
      .get('/userProducts')
      .then((response) => response.data.data)
      .then((cart) => setBasket(cart.length))
      .catch(() => setSthWrong('Something Wrong!'));
  }, [basket]);

  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="logo-img" className="logo" />
        <nav className="nav-items">
          <a href="/">Home</a>
          <a href="/#products">Products</a>
          <a href="/#contact">ContactUs</a>
        </nav>
        <div className="login-singup">
          <Link to="/register" className="login-singup-nav">login/</Link>
          <Link to="/register" className="login-singup-nav">register</Link>
        </div>
        <div className="cart">
          <Link to="/cart">
            <ShoppingCartIcon />
            <span className="cart-top">{basket}</span>
            <span>Cart</span>
          </Link>
        </div>
      </div>
      {sthWrong
        ? <Snackbar
      open={sthWrong}
      autoHideDuration={6000}
      action={action}
    ><Alert severity="error">Something Wrong!</Alert></Snackbar> : ''
    }

    </header>
  );
};
export default Header;
