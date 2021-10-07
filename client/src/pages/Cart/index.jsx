import './style.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { Card } from '@mui/material';
import SectionTitle from '../../components/common/SectionTitle';

function Cart() {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const Alert = (props) => (
    <MuiAlert elevation={6} variant="filled" {...props} />
  );
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError('');
  };

  useEffect(() => {
    axios
      .get('/userProducts')
      .then((response) => response.data)
      .then((data) => setCart(data.data))
      .catch((err) => console.log(err));
  }, []);

  const sum = () => {
    let sum = 0;
    cart.forEach((ele) => (sum += ele.price * ele.quantity));
    return sum;
  };

  // const handleDelete = (e) => {
  //   axios
  //     .get('/deletePorduct/1')
  //     .then((response) => response.data)
  //     .then((data) => setSuccess(data))
  //     .catch((err) => setError(err.response.data.Error));
  // };

  return (
    <>
    <section className="cart-section">
    < SectionTitle content='your cart' />
    <div className="show-cart">

    <ul className="header-list">
         <li className="li">product</li>
         <li>price</li>
         <li> Quanitity</li>
        <li>total</li>
      </ul>

      {cart.length ? <div className="product-list">
        {cart.map((element) => (
            <div className="products">
              <div className="product">
                <img class='img' src={element.img} alt="product img" />
                <div className="product-name">{element.name}</div>
                < DeleteIcon onClick={() => handleDelete(element.id)} style={{ marginLeft: '10px' }} />
              </div>
              <div className="price">{element.price}$</div>
              <div className="quaninty">{element.quantity}</div>
              <div className="total">{element.price * element.quantity}$</div>

            </div>
        ))}
      </div> : <h5 style={{ margin: '6vh 0' }}>No Products In Your Cart</h5>}

    </div>
    <div className="total-price">
      <h2 style={{margin:'0 20px'}}>total:</h2>
      <div className="buy-container">
        {cart.length > 0
          ? <div className="total">{sum()}$</div>
          : <div> 0 </div>}
        <div className="buy-now">buy now</div>
      </div>
    </div>

    </section>

  </>
  );
}
export default Cart;
