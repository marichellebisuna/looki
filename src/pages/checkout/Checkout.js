
import { KeyboardArrowDown } from '@material-ui/icons'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import Layout from '../../components/layout/Layout'
import Lowbar from '../../components/lowbar/Lowbar'
import './checkout.scss'

const Checkout = () => {
  return (
    <Layout>      
    <Breadcrumbs title="checkout"/>    
    <div className='checkout'>        
      <div className="left">
        <div className="billing-info">
          <h1>Billing Details</h1>
          <form>
            <div className="together">
              <div className="name">
                <label>First Name</label>
                <input type="text" name="" id="" />
              </div>             
              <div className="name">
                <label>Last Name</label>
                <input type="text" name="" id="" />
              </div>              
            </div>        
            <label>Company Name</label>
            <input type="text" name="" id="" />
            <label>Country</label>
            <div className="selection">
              <select id="inputState" class="form-select mb-3">
                <option>Select a country</option>
                <option>Azerbaijan</option>
                <option>Bahamas</option>
                <option>Bahrain</option>
                <option>Bangladesh</option>
                <option>Barbados</option>
              </select>
              <div className="arrow"><KeyboardArrowDown /></div>
            </div>
            <label>Street Address</label>
            <input type="text" name="" id="" placeholder="House number and street name"/>
            <input type="text" name="" id="" placeholder="Apartment, suite, unit, etc."/>
            <label>Town/City</label>
            <input type="text" name="" id="" />
            <div className="together">
              <div className="name">
                <label>State / Country</label>
                <input type="text" name="" id="" />
              </div>
             
              <div className="name">
                <label>Postcode/ ZIP</label>
                <input type="text" name="" id="" />
              </div>
              
            </div>
            <div className="together">
            <div className="name">
                <label>Phone</label>
              <input type="number" name="" id="" />
                </div>
              
              <div className="name">
                <label>Email Address</label>
              <input type="text" name="" id="" />
                </div>
              
            </div>
            <ul>
              <li><input type="checkbox" name="" id="" className="checkbox"/></li>
              <li><label>Create an account?</label></li>
            </ul>
         
          <h3>Additional Information</h3>
          <label htmlFor="Order notes">Order notes</label>
          <textarea name="" id="" cols="30" rows="5" placeholder="Notes about your order, e.g. special notes for delivery."></textarea >
          <ul>
            <li><input type="checkbox" name="" id="" className="checkbox"/></li>
            <li><label>Ship to different address?</label></li>
          </ul>
         
            
          </form>
        </div>
      
        </div>  
      <div className="right">
        <div className="container">
        <h1>Your Order</h1>
          <form action="">
            <div className="order-details">
              <div className="order">
                <span>Product</span>
                <span>Total</span>
              </div>
              <hr/>
              <div className="orders">
                <div className="order">
                  <span>Product Name x1</span>
                  <span>$329</span>
                </div>
                <div className="order">
                  <span>Product Name x1</span>
                  <span>$329</span>
                </div>
                
              </div>
              <hr/>
              <div className="order">
                <span>Shipping</span>
                <span className="free">Free shipping</span>
              </div>
              <hr/>
              <div className="order">
                <span>Total</span>
                <span className="total">$329</span>
              </div>
              <hr/>
              <span>Direct bank transfer</span>
              <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
              <span>Check payments</span>

              <span>Cash on delivery</span>

            </div>  
              <button className="submit" type="submit">Checkout</button>         
          </form>              
        </div>
      </div>
    </div>    
  </Layout>
  )
}

export default Checkout