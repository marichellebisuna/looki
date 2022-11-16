import { FacebookOutlined, Instagram, Twitter, YouTube} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './footer.scss'

const Footer = () => {
  
  return (
    <div className="footer">      
          <div className="footer-top">
            <div className="wrapper-top">
              <div className="left">
                <img src="https://htmldemo.net/looki/looki/assets/img/logo/logo.png" alt="" srcset="" />
                <p>We are a team of professional designers and developers that create high quality wordpress plugins, Html, React Template.</p>
                <div className="socials">
                <a href="https://www.facebook.com" target="_blank"><FacebookOutlined className="icon"/></a>
                  <a href="https://twitter.com" target="_blank"><Twitter className="icon"/></a>
                  <a href="https://www.youtube.com" target="_blank"><YouTube className="icon"/></a>
                  <a href="https://www.instagram.com" target="_blank"><Instagram className="icon"/></a>
                </div>
              </div>
              <div className="center">
                <div className="info-text">Information</div>
                <div className="line"></div>
                <div classname="info-link">  
                <div className="links">        
                  <div className="link"><Link to="/about">About Us</Link></div>
                  <div className="link">Payment</div>
                  <div className="link"><Link to="/contact">Contact Us</Link></div>
                  <div className="link"><Link to="/products">Store</Link></div> 
                </div>            
                </div>          
              </div>
              <div className="center">
                <div className="info-text">Social Links</div>
                <div className="line"></div>
                <div className="links">
                  <div className="link"><Link to="/products">New Products</Link></div>
                  <div className="link"><Link to="/products">Best Sales</Link></div>
                  <div className="link"><Link to="/login">Login</Link></div>
                  <div className="link"><Link to="/myaccount">My Account</Link></div>
                </div>            
              </div>
              <div className="right">
                <div className="info-text">Newsletter</div>          
              <div className="line">  
              </div>
              <p>Subcribe to the TheFace mailing list to receive update on mnew arrivals, special offers and other discount information.</p>
              <div className="signup">
                <input type="text" placeholder="Your email address"/>
                <button>Sign Up</button>
              </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="wrapper-bottom">
              <div className="left"><p>Copyright © {new Date().getFullYear()} <span><a href="http://">MBisuna </a> </span>. All Rights Reserved</p></div>
              <div className="right"><img src="https://htmldemo.net/looki/looki/assets/img/payment/1.png" alt="" srcset="" /></div>
            </div>
          </div>             
    </div>
  )
}

export default Footer