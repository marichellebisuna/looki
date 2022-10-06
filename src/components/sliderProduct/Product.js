import { CompareArrowsOutlined, FavoriteBorderOutlined, Search, ShoppingCartOutlined, Star } from '@material-ui/icons'
import './Product.scss'

const Product = ({product, listRef}) => {
 
  return (
    <div className="product">
      <div className="top">
        <div className="product-wrapper" ref={listRef}>
          <img src={product.img} alt="" srcset="" />
          <div className="picons">
          <FavoriteBorderOutlined className="icon"/>
          <CompareArrowsOutlined className="icon"/>
          <Search className="icon"/>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>{product.title}</p>
        <div className="stars">
          <Star className="star"/>
          <Star className="star"/>
          <Star className="star"/>
          <Star className="star"/>
          <Star className="star"/>
        </div>
        <div className="bottom-price">
          <div className="price">${product.price.toFixed(2)}</div>
          <ShoppingCartOutlined className="cart" />
        </div>        
      </div>
    </div>
  )
}

export default Product