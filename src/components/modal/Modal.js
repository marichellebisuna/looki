import { AddOutlined, Close, FavoriteBorderOutlined, KeyboardArrowDown, KeyboardArrowUp, Pinterest, StarOutlined, TextsmsOutlined, Twitter } from '@material-ui/icons'
import './modal.scss'
import {product} from "../../data"
import { DriveFileRenameOutlineOutlined, FacebookOutlined, Google } from '@mui/icons-material'
import { useState } from 'react'

const Modal = ({setModal, product}) => {
  const [index, setIndex] = useState(0) 

  const handleOpen =(i)=>{
    setIndex(i)
  }
console.log(product)
  return (
    <div className="modal" >
      <div className="container">
        <div className="together">
          <div className="spacer"></div>
          <div className="close"><Close onClick={()=>setModal(false)}/></div>
        </div>
      
        <div className="top">
          <div className="images">
          <div className="main">
            <img src={product.img[index]} alt="" srcset="" />
            <div className="new"><span className='new'>new</span> </div>
          </div>
          <div className="sub">
            {product.img.map((item,i)=>(
                <div className="sub1"><img src={item} alt="" srcset="" onClick={()=>handleOpen(i)}/></div> 
            ))}        
          </div>    
        </div>
        <div className="product-details">
          <h1>{product.title}</h1>
          <div className="ratings">
            <div className="star"><StarOutlined/><StarOutlined/><StarOutlined/><StarOutlined/><StarOutlined/></div>
            <div className="review">
              <TextsmsOutlined /> Read reviews (1)
            </div>
            <div className="review"><DriveFileRenameOutlineOutlined />Write a review</div>
          </div>
          <div className="discount">
            <span className='strike'>$23.90</span> 
            <div className="current"><span >${(product.price).toFixed(2)}</span></div> 
            <div className="save">Save 10%</div>
          </div>
          <div className="description">
          
            <ul>
            {product.desc.map(item=>(
              <li>{item}</li>
            ))}
    
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
              <FavoriteBorderOutlined className="icon"/>
              Add to wishlist
          </div>
          <div className="share">
            <span>Share</span> 
            <FacebookOutlined className="icon"/>
            <Twitter className="icon"/>
            <Google className="icon"/>
            <Pinterest className="icon"/>
          </div>
        </div>
        </div>
      </div>   
   </div>
  )
}

export default Modal