import { AddOutlined, FavoriteBorderOutlined, KeyboardArrowDown, KeyboardArrowUp, Pinterest, StarOutlined, TextsmsOutlined, Twitter } from '@material-ui/icons'
import { DriveFileRenameOutlineOutlined, FacebookOutlined, Google } from '@mui/icons-material'
import React, { useState } from 'react'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import Layout from '../../components/layout/Layout'
import Reviews from '../../components/reviews/Reviews'
import './product.scss'

const Product = () => {
  const [active, setActive] = useState("tab1")

  const handleTab1=()=>{    
   setActive("tab1")
  }
  const handleTab2=()=>{    
    setActive("tab2")
   }
   const handleTab3=()=>{    
    setActive("tab3")
   }
  
  return (
    <Layout>    
    <Breadcrumbs />
  <div className="product">
   <div className="top">
     <div className="images">
      <div className="main">
        <img src="https://htmldemo.net/looki/looki/assets/img/slider/thumb/1.jpg" alt="" srcset="" />
        <div className="new"><span className='new'>new</span> </div>
      </div>
      <div className="sub">
        <div className="sub1 active"><img src="https://htmldemo.net/looki/looki/assets/img/slider/thumb/1.jpg" alt="" srcset="" /></div>    
        <div className="sub1"><img src="https://htmldemo.net/looki/looki/assets/img/slider/thumb/2.jpg" alt="" srcset="" /></div>    
        <div className="sub1"><img src="https://htmldemo.net/looki/looki/assets/img/slider/thumb/3.jpg" alt="" srcset="" /></div>    
        <div className="sub1"><img src="https://htmldemo.net/looki/looki/assets/img/slider/thumb/4.jpg" alt="" srcset="" /></div>           
      </div>
    </div>
    <div className="product-details">
      <h1>Originals Windbreaker Winter Face Cream</h1>
      <div className="ratings">
        <div className="star"><StarOutlined/><StarOutlined/><StarOutlined/><StarOutlined/><StarOutlined/></div>
        <div className="review">
          <TextsmsOutlined /> Read reviews (1)
        </div>
        <div className="review"><DriveFileRenameOutlineOutlined />Write a review</div>
      </div>
      <div className="discount">
        <span className='strike'>$23.90</span> 
        <div className="current"><span >$21.51</span></div> 
        <div className="save">Save 10%</div>
      </div>
      <div className="description">
        <ul>
        <li>Block out the haters with the fresh adidas® Originals Kaval Windbreaker Face Cream. </li>
        <li>Part of the Kaval Collection.</li>
        <li>Regular fit is eased, but not sloppy, and perfect for any activity.</li>
        <li>Plain-woven Face Cream specifically constructed for freedom of movement.</li>
        </ul>
      </div>
      <div className="addtocart">
        <div className="product-count">
          <input type="number" name="" id="" min="1" value="1" step="1"/>
          <div className="button-group">
            <div className="icon"><KeyboardArrowUp/></div>
            <div className="icon"><KeyboardArrowDown/></div>                    
          </div>
        </div>
        <button className="submit" type="submit"><AddOutlined/> Add to cart</button>
      </div>
      <div className="heart">
          <FavoriteBorderOutlined />
          Add to wishlist
      </div>
      <div className="share">
        <span>Share</span> 
        <FacebookOutlined />
        <Twitter />
        <Google />
        <Pinterest />
      </div>
    </div>
   </div>
   
    <div className="product-tabs">
      <div className="tabs">
        <div className="desc active" onClick={handleTab1}>Description</div>
        <div className="desc" onClick={handleTab2}>Product Details</div>
        <div className="desc" onClick={handleTab3}>Reviews</div>
      </div>
      <div className="box">
        <div className={active==="tab1"?"tab1 active":"tab"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ducimus id cum tempora repudiandae alias pariatur ipsam, quis officia totam maxime dolorem aliquid dignissimos porro assumenda minima eligendi inventore odio?
        </div>
        <div className={active==="tab2"?"tab2 active":"tab"}>
        <table>          
          <tr>
            <td>Weight</td>
            <td>400g</td>
          </tr>
          <tr>
            <td>Dimensions</td>
            <td>10 x 10 x 15 cm</td>
          </tr>
          <tr>
            <td>Materials</td>
            <td>60% cotton, 40% polyester</td>
          </tr>
          <tr>
            <td>Other Info</td>
            <td>American heirloom jean shorts pug seitan letterpress</td>
          </tr>
        </table>
        </div>
        <div className={active==="tab3"?"tab3 active":"tab"}>
          <Reviews />
        </div>
        
      </div>
    </div>
  </div>
  
</Layout>
  )
}

export default Product