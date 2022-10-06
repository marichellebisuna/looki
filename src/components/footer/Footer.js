import { FacebookOutlined, Instagram, Twitter, YouTube} from '@mui/icons-material'
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
                  <FacebookOutlined className="icon"/>
                  <Twitter className="icon"/>
                  <YouTube className="icon"/>
                  <Instagram className="icon"/>
                </div>
              </div>
              <div className="center">
                <div className="info-text">Information</div>
                <div className="line"></div>
                <div classname="info-link">  
                <div className="links">        
                  <div className="link">About Us</div>
                  <div className="link">Payment</div>
                  <div className="link">Contact Us</div>
                  <div className="link">Stores</div> 
                </div>            
                </div>          
              </div>
              <div className="center">
                <div className="info-text">Social Links</div>
                <div className="line"></div>
                <div className="links">
                  <div className="link">New Products</div>
                  <div className="link">Best Sales</div>
                  <div className="link">Login</div>
                  <div className="link">My Account</div>
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