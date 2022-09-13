import { Search } from '@material-ui/icons'
import { FavoriteBorderOutlined, ShoppingBagOutlined } from '@mui/icons-material'
import {useState } from 'react'
import './navbar.scss'
import SearchPage from '../search/Search'
import Mylist from '../mylist/Mylist'
import SideCart from '../sidecart/SideCart'
import { Badge } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Navbar = () => {
const [openSearchPage, setOpenSearchPage] = useState(false)

const [showMyList, setShowMyList] = useState(false)
 const [showCart, setShowCart] = useState(false)

  return (
    <>
  <div className="navbar">
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