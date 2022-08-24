import { Search } from '@material-ui/icons'
import { FavoriteBorderOutlined, ShoppingBagOutlined } from '@mui/icons-material'
import { useState } from 'react'

import './navbar.scss'
import SearchPage from '../search/Search'

const Navbar = () => {
const [openSearchPage, setOpenSearchPage] = useState(false)
const handleSearch=()=>{
  setOpenSearchPage(true)
}
  return (
    <>
  <div className="navbar">
    <div className="container">
      <div className="logo"><img src="https://htmldemo.net/looki/looki/assets/img/logo/logo.png" alt="" srcset="" /></div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="icons">
        <span onClick={handleSearch}><Search className="icon" /></span>
        <span className="numbered">
          <FavoriteBorderOutlined  className="icon"/> 
          <span className='total'>5</span>
        </span>
        <span className="numbered">
          <ShoppingBagOutlined  className="icon"/>
          <span className='total'>5</span>
        </span>
      </div>
    </div>
  </div> 
{openSearchPage && <SearchPage setOpen={setOpenSearchPage} />}
  </>
  )
}

export default Navbar