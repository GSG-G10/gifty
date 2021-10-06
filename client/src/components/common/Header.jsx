import React from 'react';
import logo from '../../img/gifylogo.png';
import basketicon from '../../img/Vector.png';
import {NavLink} from 'react-router-dom';
//import {useState, useEffect} from 'react';
import "./Header.css";


const Header = () => {
 // const {basket, setBasket} = useState ();

  const arr = [
    {name: 'home', link: '/'},
    {name: 'product', link: '/'},
    {name: 'contact us', link: '/'},
  ];
  return (
    <header className="header">
      <div className="container">
      <img src={logo} alt="logo-img" className="logo" />
      <nav>
        {arr.map (element => (
          <NavLink key={element.name} to={element.link} className="navlist">{element.name}</NavLink>
        ))}
      </nav>
      <div className="login-singup">
        <NavLink to="/signin" className="login-singup-nav">login/</NavLink>
        <NavLink to="/signup" className="login-singup-nav">register</NavLink>
      </div>
      <div className="cart">
      <img src={basketicon} className="shoppingCart"/>
      <span className="cart-top">0</span>
      <span>cart</span>
      </div>
      </div>

    </header>
  );
};
export default Header;
