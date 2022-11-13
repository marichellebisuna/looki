import { CompareArrowsOutlined, FavoriteBorderOutlined, Search, ShoppingCartOutlined, Star } from '@mui/icons-material';
import './productcard.scss';

const ProductCard = ({product}) => {
  return (
    <div className="product-item">
    <div className="top">
      <div className="product-wrapper" >
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
      <div className="together">
        <div className="bprice">${product.price.toFixed(2)}</div>
        <ShoppingCartOutlined className="cart" />
      </div>        
    </div>
  </div>
  )
}

export default ProductCard