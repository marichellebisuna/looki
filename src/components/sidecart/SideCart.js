import { CloseOutlined } from "@mui/icons-material"
import "./sidecart.scss"

const SideCart = ({showCart, setShowCart}) => {

  return (    
      <div className={ showCart?"wrapper show":"wrapper"} onClick={()=>setShowCart(false)}>    
  
        <div className={showCart?"list expand":"list shrink"}>  

          <div className="top">
            <span>Cart</span>
            <div className="close" 
            onClick={()=>setShowCart(false)}>x</div>
          </div>

          <div className="line"></div>
          <div className="list_item">
            <img src="https://htmldemo.net/looki/looki/assets/img/mini-cart/1.png" alt="" srcset="" />
            <div className="desc">
              <div className="title">Original Age defying Cosmetics Makeup</div>
              <div className="price">1 x $100.00</div>
            </div>
            <div className="delete"><CloseOutlined /></div>
          </div>

            <div className="line"></div>
          <div className="list_item">
            <img src="https://htmldemo.net/looki/looki/assets/img/mini-cart/2.png" alt="" srcset="" />
            <div className="desc">
              <div className="title">On Trend Makeup And Beauty Cosmetics</div>
              <div className="price">1 x $35.00</div>
            </div>
            <div className="delete"><CloseOutlined /></div>
          </div>

          <div className="line"></div>
          <div className="list_item">
            <img src="https://htmldemo.net/looki/looki/assets/img/mini-cart/3.png" alt="" srcset="" />
            <div className="desc">
              <div className="title">Original Age defying Cosmetics Makeup</div>
              <div className="price">1 x $9.00</div>
            </div>
            <div className="delete"><CloseOutlined /></div>
          </div>

          <div className="line"></div>
          <div className="subtotal">
            <span>Subtotal:</span>
            <div className="sub">$144.00</div>
          </div>
          <div className="line"></div>

          <div className="buttons">
            <button type="submit">View Cart</button>   
            <button type="submit">Checkout</button>  
          </div>
          <span>Free Shipping on All Orders Over $100!</span>
        </div>
    
      </div>  
  )
}

export default SideCart