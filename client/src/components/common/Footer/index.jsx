import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from '../../../assets/gifty.png';
import './style.css';

const Footer = () => (
    <footer className="footer" id="contact">
        <div className="container">
          <img src={logo} alt="logo img" className="logo"/>
          <nav className="nav">
              <FacebookOutlinedIcon />
              <InstagramIcon />
              <TwitterIcon />
              <WhatsAppIcon />
          </nav>
      </div>
    </footer>
);
export default Footer;
