import Product from '../sliderProduct/Product'
import './tab.scss'
import {KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import {products} from '../../data'
import {useEffect, useRef, useState} from 'react'
import TypeTab from '../typeTab/TypeTab';
 import {type} from '../../data';
 

const Tab = () => {
const listRef = useRef();

const [slideNumber, setSlideNumber] = useState(0)
const [selected, setSelected] = useState("all")
const [menu, setMenu] = useState(products)

const category = ["all", ...new Set(products.map(item => item.type))]

const filterProducts = (type) =>{
  if (type === "all"){
    setMenu(products)
    setSelected(type)
    return
  }
  const newItems=products.filter(item=>item.type===type)
  setMenu(newItems)
  setSelected(type)  
}
console.log(selected)
  const handleArrow=(direction) => {
    let distance = listRef.current.getBoundingClientRect().x-141
    console.log(distance)
    if(direction === 'left' && slideNumber > 0) { 
      setSlideNumber(slideNumber-1)
      listRef.current.style.transform = `translateX(${385 + distance}px)`      
    } 
    if(direction === 'right'&& slideNumber < 1) { 
      setSlideNumber(slideNumber+1)
      listRef.current.style.transform = `translateX(${-385 + distance}px)`      
    } 
  }
  return (
    <div className="sliderProduct">
      <div className="container">
        <div className="title">
          <h1>Our Products</h1>
        </div>
        <div className="line"></div>
        <div className="sub-title">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, repellat.
          </p>
        </div>
        <ul>
          {
            category.map((item, index) => {
              return (<TypeTab 
              key={index} 
              title={item} 
              active={item === selected}               
              filterProducts={filterProducts}/>
          )})}
        </ul>        
      </div>
      <div className="products" >
        
        <KeyboardArrowLeft className="arrow left" onClick={()=>handleArrow("left")} />
        <div className="productid" ref={listRef}>
          {menu.map(product=>  
          <Product product={product} key={product.id} listRef={listRef}/> 

          )          
          }
        </div>
        
        <KeyboardArrowRight className="arrow right" onClick={()=>handleArrow("right")}/>
      </div>     
    </div>
  )
}

export default Tab;