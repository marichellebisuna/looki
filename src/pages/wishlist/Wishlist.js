import { Delete, KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'
import React from 'react'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import Layout from '../../components/layout/Layout'
import './wishlist.scss'

const Wishlist = () => {
  return (
  <Layout>    
  <Breadcrumbs title="wishlist"/>
<div className="wishlist">
  <h1>Wishlist</h1>
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
              <tr>
              <td><img src="https://htmldemo.net/looki/looki/assets/img/product/2.png" alt="" srcset="" /></td>
              <td>Water and Wind Resistant Cream</td>
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
              <td>$38.24</td>
              <td><span className="icon"><Delete/></span></td>

              <td><button className="submit" type="submit">Add to cart</button></td>
              </tr>
              <tr>
              <td><img src="https://htmldemo.net/looki/looki/assets/img/product/4.png" alt="" srcset="" /></td>
              <td>Original Kaval nail polish</td>
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
              <td>$38.24</td>
              <td><span className="icon"><Delete/></span></td>
              <td><button className="submit" type="submit">Add to cart</button></td>
              </tr>
              <tr>
              <td><img src="https://htmldemo.net/looki/looki/assets/img/product/6.png" alt="" srcset="" /></td>
              <td>New balance arish makeup box</td>
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
              <td>$38.24</td>
              <td><span className="icon"><Delete/></span></td>

              <td><button className="submit" type="submit">Add to cart</button></td>
              </tr>
            </tbody>
          </table>
</div>
    
  
  
    
  </Layout>
  )
}

export default Wishlist