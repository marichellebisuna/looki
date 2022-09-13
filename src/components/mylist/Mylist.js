import { CloseOutlined } from "@mui/icons-material"
import "./mylist.scss"

const Mylist = ({setShowMyList, showMyList}) => {

  return (        
  <div className={showMyList?"wrapper show":"wrapper"} onClick={()=>setShowMyList(false)}>   
    <div className={showMyList?"list open":"list close"}>       

        <div className="top">
          <span>Wishlist</span>
        <div className="close" 
         onClick={()=>setShowMyList(false)}>x</div>
        </div>

        <div className="line"></div>
        <div className="list_item">
          <img src="https://htmldemo.net/looki/looki/assets/img/mini-cart/4.png" alt="" srcset="" />
          <div className="desc">
            <div className="title">Original Age defying Cosmetics Makeup</div>
            <div className="price">1 x $100.00</div>
          </div>
          <div className="delete"><CloseOutlined /></div>
        </div>

          <div className="line"></div>
        <div className="list_item">
          <img src="https://htmldemo.net/looki/looki/assets/img/mini-cart/5.png" alt="" srcset="" />
          <div className="desc">
            <div className="title">On Trend Makeup And Beauty Cosmetics</div>
            <div className="price">1 x $35.00</div>
          </div>
          <div className="delete"><CloseOutlined /></div>
        </div>

        <div className="line"></div>
        <div className="list_item">
          <img src="https://htmldemo.net/looki/looki/assets/img/mini-cart/6.png" alt="" srcset="" />
          <div className="desc">
            <div className="title">Original Age defying Cosmetics Makeup</div>
            <div className="price">1 x $9.00</div>
          </div>
          <div className="delete"><CloseOutlined /></div>
        </div>

        <button type="submit">View Wishlist</button>   
        
      </div>
   
    </div>   
  )
}

export default Mylist