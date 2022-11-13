import { CompareArrowsOutlined, FavoriteBorderOutlined, Search, Star } from '@material-ui/icons'
import './productList.scss'

const ProductList = ({product}) => {
const desc=product.desc
console.log(desc)
  return (
    <div className='productlist'>
      <div className="left">
        <div className="product-wrapper" >
          <img src={product.img} alt="" srcset="" />
          <div className="inner">
            <div className="together">
              <div className="type">{product.type}</div>
              <div className="discount">{product.discount}</div>   
            </div>  
            <div className="picons">                     
              <FavoriteBorderOutlined className="icon"/>
              <CompareArrowsOutlined className="icon"/>
              <Search className="icon"/>
            </div> 
          </div>
                   
        </div>
      </div>
      <div className="right">
        <p>{product.title}</p>
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
  )
}

export default ProductList