import { Close, Search } from '@material-ui/icons'
import { FavoriteBorderOutlined, ShoppingBagOutlined, Facebook, Twitter, YouTube, Instagram, Call, KeyboardArrowDown } from '@mui/icons-material'
import {useRef, useState } from 'react'
import './navbar.scss'
import SearchPage from '../search/Search'
// import SideCart from '../sidecart/SideCart'
import { Badge } from '@material-ui/core'
import { Link } from 'react-router-dom'
import {cart, wish} from '../../data'

const Navbar = () => {
  
const [isScroll, setIsScroll] = useState(false)
const [openSearchPage, setOpenSearchPage] = useState(false)
const [showMyList, setShowMyList] = useState(false)
const [showCart, setShowCart] = useState(false)
const listRef= useRef()
const listRef2= useRef()


const handleSearch=()=>{ 
  setOpenSearchPage(true)
}
const handleShowMyList=()=>{  
  listRef.current.style.zIndex=99999;
  setShowMyList(true)
}
const handleCart=()=>{ 
   listRef2.current.style.zIndex=99999;
  setShowCart(true)
}
const handleClose=()=>{ 
  setShowCart(false)
  setShowMyList(false)
  listRef.current.style.zIndex=1;
  listRef2.current.style.zIndex=1;

}

window.onscroll=()=>{
  setIsScroll(window.pageYOffset===0 ? false : true)
  return ()=>window.onscroll=null
}
  return (
    <div className="menu">
  <div className={isScroll?"navbar shadow":"navbar"}>
    <div className="container">
      <div className="logo"><Link to='/'><img src="https://htmldemo.net/looki/looki/assets/img/logo/logo.png" alt="" srcset="" /></Link></div>
      <div className="menu">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/products'>Shop</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div className="icons">       
        <span onClick={handleSearch}><Search className="icon" /></span>
        <span onClick={handleShowMyList}>
            <Badge badgeContent={wish.length} color="primary">
              <FavoriteBorderOutlined />   
            </Badge>               
        </span>   
        <span onClick={handleCart}>
            <Badge badgeContent={cart.length} color="primary">
              <ShoppingBagOutlined />
            </Badge>              
        </span>
      </div>
    </div>
  </div> 
    {openSearchPage && <SearchPage setOpenSearchPage={setOpenSearchPage} />}
    <div className={showMyList?"wish show":"wish"} onClick={handleClose} ref={listRef}>           
      <div className={showMyList?"list":"list close"}> 
        <div className="top">
          <span>Wishlist</span>
        <div className="close" 
        onClick={handleClose}><Close /></div>
        </div>  
        <div className="line" ></div>    
        {wish.map((item=>(
          <>          
            <div className="list_item" key={item.id}>
              <img src={item.img[0]} alt="" srcset="" />
              <div className="desc">
                <div className="title">{item.title}</div>
                <div className="price">1 x ${item.price.toFixed(2)}</div>
              </div>
              <div className="delete"><Close /></div>
            </div>      
            <div className="line"></div>
         </> 
        )))}
        <button type="submit" className='button'><Link to="/wishlist">View Wishlist</Link></button>               
      </div>         
    </div>  
    <div className={showCart?"cart show":"cart"} onClick={handleClose} ref={listRef2}>   
      <div className={showCart?"list ":"list open"}>  

        <div className="top">
          <span>Cart</span>
          <div className="close" 
          onClick={handleClose}><Close /></div>
        </div>

        <div className="line"></div>
        {cart.map(item=>
          <div className="list_item">
          <img src={item.img[0]} alt="" srcset="" />
          <div className="desc">
            <div className="title">{item.title}</div>
            <div className="price">1 x ${item.price.toFixed(2)}</div>
          </div>
          <div className="delete"><Close /></div>
        </div>
          )}
        
        <div className="line"></div>

        <div className="buttons">
          <button type="submit"><Link to="/cart"> Cart</Link></button>   
          <button type="submit"><Link to="/checkout">Checkout</Link></button>  
        </div>
        <span>Free Shipping on All Orders Over $100!</span>
      </div>
    </div>     
  </div>
  )
}

export default Navbar