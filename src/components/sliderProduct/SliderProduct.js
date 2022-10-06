import Product from './Product'
import './sliderProduct.scss'
import {KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import {products} from '../../data'
import {useRef, useState} from 'react'

const SliderProduct = () => {
  const listRef = useRef()
const [slideNumber, setSlideNumber] = useState(0)

  const handleArrow=(direction) => {
    let distance = listRef.current.getBoundingClientRect().x-1766
    console.log(distance)
    if(direction === 'left' && slideNumber > 0) { 
      setSlideNumber(slideNumber-1)
      listRef.current.style.transform = `translateX(${200 + distance}px)`
    } 
    if(direction === 'right'&& slideNumber < 5) { 
      setSlideNumber(slideNumber+1)
      listRef.current.style.transform = `translateX(${-200 + distance}px)`
    } 
  }
  return (
    <div className="sliderProduct">
      <div className="container">
        <div className="title">
          <h1>New Arrival Products</h1>
        </div>
        <div className="line"></div>
        <div className="sub-title">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, repellat.
          </p>
        </div>
      </div>
      <div className="products" >
        <KeyboardArrowLeft className="arrow left" onClick={()=>handleArrow("left")}/>
        {products.map(product =><Product product={product} key={product.id} listRef={listRef}/>)          
        }
        <KeyboardArrowRight className="arrow right" onClick={()=>handleArrow("right")}/>
      </div>     
    </div>
  )
}

export default SliderProduct