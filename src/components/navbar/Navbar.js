import { Search } from '@material-ui/icons'
import { FavoriteBorderOutlined, ShoppingBagOutlined, Facebook, Twitter, YouTube, Instagram, Call, KeyboardArrowDown } from '@mui/icons-material'
import {useState } from 'react'
import './navbar.scss'
import SearchPage from '../search/Search'
import Mylist from '../mylist/Mylist'
import SideCart from '../sidecart/SideCart'
import { Badge } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Navbar = () => {
const [isScroll, setIsScroll] = useState(false)
const [openSearchPage, setOpenSearchPage] = useState(false)
const [openSetting, setOpenSetting] = useState(false)
const [openDollar, setOpenDollar] = useState(false)
const [openLanguage, setOpenLanguage] = useState(false)
const [showMyList, setShowMyList] = useState(false)
const [showCart, setShowCart] = useState(false)
window.onscroll=()=>{
  setIsScroll(window.pageYOffset===0 ? false : true)
  return ()=>window.onscroll=null
}
  return (
    <>
  <div className="topbar">
    <div className="container">   
      <div className="left">
        <div className="socials">
        <Facebook className="icon"/>
        <Twitter className="icon"/>
        <YouTube className="icon"/>
        <Instagram className="icon"/>
        </div>
        <div className="contact">
          <Call className="icon"/>
          <span> (+123)4567890</span>
        </div>
      </div>
      <div className="right">
        <div className="settings">
          <span onClick={()=>setOpenSetting(!openSetting)}>Setting <KeyboardArrowDown /></span>
          <div className={openSetting?"account":"account close"}>            
            <div className="list">My Account</div> 
            <div className="line"></div>           
            <div className="list">Checkout</div>
            <div className="line"></div>
            <div className="list">Sign Out</div>
          </div>
        </div>
        <div className="dollar">
        <span onClick={()=>setOpenDollar(!openDollar)}>USD $ <KeyboardArrowDown /></span>
          <div className={openDollar?"account":"account close"}>
            <div className="list">EUR £</div>
            <div className="line"></div>
            <div className="list">US $</div>
          </div>
        </div>
        <div className="language">
        <span onClick={()=>setOpenLanguage(!openLanguage)}><img src="https://htmldemo.net/looki/looki/assets/img/logo/us-flag.jpg" alt="" srcset="" /> English <KeyboardArrowDown /></span>
        <div className={openLanguage?"account":"account close"}>
            <div className="list"><img src="https://htmldemo.net/looki/looki/assets/img/logo/us-flag.jpg" alt="" srcset="" /> English</div>
            <div className="line"></div>
            <div className="list"><img src="https://htmldemo.net/looki/looki/assets/img/logo/france.jpg" alt="" srcset="" /> Francais</div>
          </div>
        </div>
      </div>
     </div>
  </div>
  <div className={isScroll?"navbar shadow":"navbar"}>
    <div className="container">
      <div className="logo"><img src="https://htmldemo.net/looki/looki/assets/img/logo/logo.png" alt="" srcset="" /></div>
      <div className="menu">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/products'>Shop</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div className="icons">
        <span onClick={()=>setOpenSearchPage(true)}>
          <Search className="icon" />        
        </span>
        
        <span className="numbered" onClick={()=>setShowMyList(!showMyList)}>    
        <Badge badgeContent={4} color="primary">
           <FavoriteBorderOutlined />   
        </Badge>  
          {/* <FavoriteBorderOutlined  className="icon"/>            */}
        <span className='total'>5</span>
      
        </span>
        
        <span className="numbered" style={{'paddingLeft':'5px'}} onClick={()=>
        // <Mylist setShowList={showMyList} toggle={setShowMyList(!showMyList)}/>}
         setShowCart(!showCart)}
        
        >
            <Badge badgeContent={4} color="primary">
              <ShoppingBagOutlined />
            </Badge>  
          {/* <ShoppingBagOutlined  className="icon"/> */}
          <span className='total'>5</span>
         
        </span>
      </div>
    </div>
   


  </div> 
 {openSearchPage && <SearchPage setOpen={setOpenSearchPage} />}
  { <Mylist setShowMyList={setShowMyList} showMyList={showMyList}/>}
  {<SideCart showCart={showCart} setShowCart={setShowCart}/>}
  </>
  )
}

export default Navbar