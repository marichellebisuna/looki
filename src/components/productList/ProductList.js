import {useState} from 'react'
import { Close, FavoriteBorderOutlined, Search, Star } from '@material-ui/icons'
import './productList.scss'
import Modal from '../modal/Modal'
import { Link } from 'react-router-dom'

const ProductList = ({product}) => {
const [show, setShow] = useState(false)
const [modal, setModal] = useState(false)

  return (
    <>
     {modal&& <Modal setModal={setModal} product={product}/> } 
    <div className='productlist'>
      <div className="left">
        <div className="product-wrapper" >
          <img src={product.img[0]} alt="" srcset="" />
          <div className="inner">
            <div className="together">
              {product.discount>0? <div className="discount">-{product.discount}%</div>: <div className="spacer"/>  }
              <div className="type" >{product.type}</div>              
            </div>  
            <div className="picons">                  
              <FavoriteBorderOutlined className="icon"/>             
              <Search className="icon" onClick={()=>setModal(true)} />
               
            </div> 
          </div>
                   
        </div>
      </div>
      <div className="right">
        <p><Link to={`/products/${product.id}`}>{product.title}</Link></p>
        <div className="stars">
          <Star className="star"/>
          <Star className="star"/>
          <Star className="star"/>
          <Star className="star"/>
          <Star className="star"/>
        </div>
      <div className="bprice">${product.price.toFixed(2)}</div>
    {
    product.desc.map((item)=>(
     <div className="desc">{item}</div>
    ))
    }
      <div className="availability">Availability: <span>1200 In Stock</span></div>
      <button type="submit">Add to Cart</button>   
                
      </div>
       
    </div>
   {/* {modal && 
      <div className='modal' onClick={()=>setModal(false)}>
      <div className="container">
        <div className="top">
          <div className="spacer"></div>
          <div className="x" onClick={()=>setModal(false)}><Close /></div>
        </div>
      <div className="bottom">
        <div className="title">{product.title}</div>
        <img src={product.img[0]}alt="" srcset="" />
      </div>
      </div>        
      </div>
    } */}
    </>
  )
}

export default ProductList