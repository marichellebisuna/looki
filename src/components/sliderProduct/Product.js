import { FavoriteBorderOutlined, Search, ShoppingCartOutlined, Star } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './Product.scss'
// import {products} from '../../data'

const Product = ({product}) => {
 
  return (
    <div className="product-item">
      <div className="top">
        <div className="product-wrapper" >
        <Link to={`/products/${product.id}`}>
          <img src={product.img[0]} alt="" srcset="" />
        </Link>
          <div className="inner">
            <div className="together">
              {product.discount>0? <div className="discount">-{product.discount}%</div>: <div className="spacer"/>  }               
              <div className="type" >{product.type}</div>              
            </div>  
            <div className="picons">                     
              <FavoriteBorderOutlined className="icon"/>             
              <Search className="icon"/>
            </div> 
          </div>
        </div>
      </div>
      <div className="bottom">
        <p><Link to={`/products/${product.id}`}>{product.title}</Link></p>
        <div className="stars">
          <Star className="star"/>
          <Star className="star"/>
          <Star className="star"/>
          <Star className="star"/>
          <Star className="star"/>
        </div>
        <div className="together">
          <div className="bprice">${product.price.toFixed(2)}</div>
          <ShoppingCartOutlined className="cart" />
        </div>        
      </div>
    </div>
  )
}

export default Product