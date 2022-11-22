import { Delete, KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import Layout from '../../components/layout/Layout'
import './cart.scss'
import {cart} from '../../data'

const Cart = () => {
  return (
    <Layout>
    
      <Breadcrumbs title="cart"/>
      <div className='cart'>    
        <div className="top">
          <h1>Your Cart Items</h1>
          <hr/>
          <table>
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product Name</th>                
                <th>Stock Status</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Action</th>
                <th>Checkout</th>
              </tr>
            </thead>
            <tbody>
            {cart.map(item=>(
                 <tr>
                 <td><Link to={`/products/${item.id}`}><img src={item.img[0]} alt="" srcset="" /></Link></td>
                 <td><Link to={`/products/${item.id}`}>{item.title}</Link></td>
                 <td> <span className="instock">In Stock</span></td>
                 <td>
                   <div className="product-count">
                     <input type="number" name="" id="" min="1" value="1" step="1"/>
                     <div className="button-group">
                       <div className="icon"><KeyboardArrowUp/></div>
                       <div className="icon"><KeyboardArrowDown/></div>                    
                     </div>
                   </div>
                 </td>
                 <td>${item.price.toFixed(2)}</td>
                 <td><span className="icon"><Delete/></span></td>
   
                 <td><button className="submit" type="submit">Add to cart</button></td>
                 </tr>
              ))}
              
            </tbody>
          </table>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="billing-info">
            <h1>Calculate shipping</h1>
            <form>
              <div className="selection">
              <select id="inputState" class="form-select mb-3">
                <option>Select country</option>
                <option>Azerbaijan</option>
                <option>Bahamas</option>
                <option>Bahrain</option>
                <option>Bangladesh</option>
                <option>Barbados</option>
              </select>
              <div className="arrow"><KeyboardArrowDown /></div>
              </div>
              <div className="selection">

              <select id="inputState2" class="form-select mb-3">
                <option>Select State</option>
                <option>Azerbaijan</option>
                <option>Bahamas</option>
                <option>Bahrain</option>
                <option>Bangladesh</option>
                <option>Barbados</option>
              </select>
              <div className="arrow"><KeyboardArrowDown /></div>
              </div>
              <input type="text" name="postcode" id="postcode" placeholder='Postcode/ZIP'/>
              <button className="submit" type="submit">estimate</button>
            </form>
            </div>
            <div className="coupon-code">
              <h2>Discount Coupon Code</h2>
              <form>
                 <input type="text" name="" id="" placeholder='Coupon Code'/>
                 <button className="submit" type="submit">Apply code</button>
              </form>
             
            </div>
           </div>  
          <div className="right">
            <div className="container">
              <form action="">
                <div className="up">
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

                </div>
                <div className="buttons">
                <button className="submit" type="submit">Update Cart</button>
                <button className="submit" type="submit">Checkout</button>
                </div>

              </form>
              
            </div>
          </div>
          </div>
       
      </div>
  </Layout>
  )
}

export default Cart