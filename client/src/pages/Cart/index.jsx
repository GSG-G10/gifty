import './style.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
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
  }, [cart]);

  const sum = () => {
    let sum = 0;
    cart.forEach((ele) => (sum += ele.price * ele.quantity));
    return sum;
  };

  const handleDelete = (e) => {
    axios
      .get(`/deletePorduct/${e}`)
      .then((response) => response.data)
      .then((data) => setSuccess(data))
      .catch((err) => setError(err.response.data.Error));
  };

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
           <img src={element.img} alt="product img" />
           <div className="product-name">{element.name} </div>
           < DeleteIcon style={{ marginLeft: '10px', color: 'rgb(117 90 8)' }} onClick={() => {handleDelete(element.id)} />
         </div>
         <div className="price">{element.price}$</div>
         <div className="quaninty">{element.quantity}</div>
         <div className="total">{element.price * element.quantity}$</div>
       </div>
   )) }
      </div> : <h5>No Products In Your Cart</h5> }

   </div>

</section>

  </>
  );
}
export default Cart;
