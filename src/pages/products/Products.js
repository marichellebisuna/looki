import './products.scss'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import Layout from '../../components/layout/Layout'
import { AddOutlined, RemoveOutlined } from '@material-ui/icons'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import ShopsNav from '../../components/products/ShopsNav'
import {products} from '../../data'
import Product from '../../components/sliderProduct/Product'
import Pagination from '../../components/pagination/Pagination'

const Products = () => { 
  
  function valuetext(value) {
    return `${value}°C`;
  } 
  
  const [value, setValue] = useState([20, 50]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [active, setActive] = useState("tab1")
  const handleTab1=()=>{
    setActive("tab1")
  }
  const handleTab2=()=>{
    setActive("tab2")
  }
  const handleTab3=()=>{
    setActive("tab3")
  }
  return (
    <Layout>    
      <Breadcrumbs title="beauty & cosmetics"/>    
        <div className="products">
          <div className="left">
            <h3>Beauty & Cosmetics</h3>
            <div className="line"/>  
            <div className="container">
              <div className="accordion">
              <div className="name">
                <div className={active==="tab1"?"title active":"title"} onClick={handleTab1}>Shoes</div>
                {active==="tab1"?<RemoveOutlined/>:<AddOutlined/> }              
              </div>
              <ul className={active==="tab1"?"active":"tab"}>
                <li>Women shoes</li>
                <li>men shoes</li>
                <li>boots</li>
                <li>casual shoes</li>
                <li>flip flops</li>
              </ul>
            </div>
            <div className="accordion">
              <div className="name">
                <div className={active==="tab2"?"title active":"title"} onClick={handleTab2}>Luggage & bags</div>
                {active==="tab2"?<RemoveOutlined/>:<AddOutlined/> }               
              </div>
              <ul className={active==="tab2"?"active":"tab"}>
                <li>Stylish Backpacks</li>
                <li>shoulder bags</li>
                <li>crossbody bags</li>
                <li>briefcases</li>
                <li>luggage and travel</li>
              </ul>
            </div>
            <div className="accordion">
              <div className="name">
                <div className={active==="tab3"?"title active":"title"} onClick={handleTab3}>Accessories</div>
                {active==="tab3"?<RemoveOutlined/>:<AddOutlined/> }               
               
              </div>
              <ul className={active==="tab3"?"active":"tab"}>
                <li>Cosmetic bags & cases</li>
                <li>wallets & card holders</li>
                <li>luggage covers</li>
                <li>passport covers</li>
                <li>bag parts & accessories</li>
              </ul>
            </div>
            </div>
            
            <h3>Filter By</h3>
            <div className="line"/> 
            <h4>Categories</h4>
            <ul>
              <li>
                <div className="checkbox"/><label>Digital Cameras (13)</label><input type="checkbox"  name="" id="" /></li>

              <li><div className="checkbox"/><label>Camcorders (13)</label><input type="checkbox"  name="" id="" /></li>

              <li><div className="checkbox"/><label>Camera Drones (13)</label><input type="checkbox"  name="" id="" /></li>
            </ul> 
            <h4>Price</h4> 
            <div className="range">€200 - €600</div>           
            <Box sx={{ width: 300 }}>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                sx={{                  
                  color: '#5a5ac9',                
                }}
              />
            </Box>
            <h4>Size</h4>
            <ul>
              <li>
                <div className="checkbox"/><label>S (2)</label><input type="checkbox"  name="" id="" /></li>

              <li><div className="checkbox"/><label>M (2)</label><input type="checkbox"  name="" id="" /></li>

              <li><div className="checkbox"/><label>L (2)</label><input type="checkbox"  name="" id="" /></li>

              <li><div className="checkbox"/><label>XL (2)</label><input type="checkbox"  name="" id="" /></li>
            </ul> 
            <h4>Color</h4>
            <ul>
              <li>
                <div className="checkbox"/><label>Grey (4)</label><input type="checkbox"  name="" id="" /></li>

              <li><div className="checkbox"/><label>White (3)</label><input type="checkbox"  name="" id="" /></li>

              <li><div className="checkbox"/><label>Black (6)</label><input type="checkbox"  name="" id="" /></li>

              <li><div className="checkbox"/><label>Camel (2)</label><input type="checkbox"  name="" id="" /></li>
            </ul>
            <h4>Brand</h4>
            <ul>
              <li>
                <div className="checkbox"/><label>Graphic Corner (5)</label><input type="checkbox"  name="" id="" /></li>

              <li><div className="checkbox"/><label>Studio Design (8)</label><input type="checkbox"  name="" id="" /></li>              
            </ul> 
            <h3>Product Tags</h3>
            <div className="line"/>             
            <ul className='tags'>
              <div className="tags">
                <li className='tag'>Shopping</li>
                <li className='tag'>New Products</li>
                <li className='tag'>Accessories</li>
                <li className='tag'>Sale</li> 
              </div>                           
            </ul>
            <img src="https://htmldemo.net/looki/looki/assets/img/banner/2.jpg" alt="" />
          </div>
        
          <div className="right">
            <ShopsNav/>
            <div className="productid" >
              {products.map(product =><Product product={product} key={product.id} />)          
              }
            </div>
            <Pagination />
          </div>
          
        </div>
     
  </Layout>
  )
}

export default Products