import {useState} from 'react'
import { FavoriteBorderOutlined, Search, Star } from '@material-ui/icons'
import './productList.scss'
import Modal from '../modal/Modal'
import { Link } from 'react-router-dom'

const ProductList = ({product}) => {
const [show, setShow] = useState(false)

const handleModal=()=>{
  setShow(true)
}
  return (
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
              <Search className="icon" onClick={handleModal}/>
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
      {show && <Modal />}
    </div>
  )
}

export default ProductList