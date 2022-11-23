import { Delete, KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'
import React, { useState } from 'react'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import Layout from '../../components/layout/Layout'
import './wishlist.scss'
import {wish} from '../../data'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  const [qty, setQty] = useState(5)

  const handleOperation = (operation, id) => {
    if (operation === "+" ){
    setQty(qty + 1)
    }else{
      setQty(qty - 1)
    }
  }
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
              {wish.map(item=>(
                 <tr>
                 <td><Link to={`/products/${item.id}`}><img src={item.img[0]} alt="" srcset="" /></Link></td>
                 <td><Link to={`/products/${item.id}`}>{item.title}</Link></td>
                 <td> <span className="instock">In Stock</span></td>
                 <td>
                   <div className="product-count">
                     <input type="number" name="" id="" min="1" value={setQty(item.qty)} step="1"/>
                     <div className="button-group">
                       <div className="icon"><KeyboardArrowUp onClick={()=>handleOperation("+")}/></div>
                       <div className="icon"><KeyboardArrowDown onClick={()=>handleOperation("-")}/></div>                    
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
    
  
  
    
  </Layout>
  )
}

export default Wishlist