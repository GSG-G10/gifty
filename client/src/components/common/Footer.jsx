import React from 'react';
import logo from '../../img/gifylogo.png';
import facebookIcon from '../../img/facebook.png';
import instegramIcon from '../../img/instagram.png';
import twitterIcon from '../../img/twitter.png';
import whatsappIcon from '../../img/whatsapp.png';
import './Footer.css'

const Footer = () => {
    const arr=[facebookIcon,instegramIcon,twitterIcon,whatsappIcon];
  return (
    <footer className="footer">
        <div className="container">
      <img src={logo} alt="logo img" className="logo"/>
      <nav className="nav">
          {arr.map(element=> <img src={element} alt="socail media" className="social-icons" /> )}
         
      </nav>
      </div>
    </footer>
  );
};
export default Footer;
