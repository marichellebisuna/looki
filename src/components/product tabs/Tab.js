import Product from '../sliderProduct/Product'
import './tab.scss'
import {KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import {products} from '../../data'
import {useEffect, useRef, useState} from 'react'
import TypeTab from '../typeTab/TypeTab';
import {type} from '../../data';
// import {products} from '../../data';

const Tab = () => {
const listRef = useRef();
console.log(type);
const [slideNumber, setSlideNumber] = useState(0)
const [selected, setSelected] = useState("new")
const [data, setData] = useState([])

// useEffect(() => { 
// switch(selected){
//   case "new":
//     setData
// }
 
// }, [selected])

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
            type.map((item, index) => {
              return (<TypeTab 
              key={index} 
              title={item.title} 
              active={selected===item.id} 
              id={item.id} 
              setSelected={setSelected}/>
          )})}
        </ul>
        
      </div>
      <div className="products" >
        
        <KeyboardArrowLeft className="arrow left" onClick={()=>handleArrow("left")} />
        <div className="productid" ref={listRef}>
          {products.map(product =><Product product={product} key={product.id} listRef={listRef}/>)          
          }
        </div>
        
        <KeyboardArrowRight className="arrow right" onClick={()=>handleArrow("right")}/>
      </div>     
    </div>
  )
}

export default Tab;