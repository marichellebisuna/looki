import Product from './Product'
import './sliderProduct.scss'
import {KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import {products} from '../../data'
import {useRef} from 'react'

const SliderProduct = () => {
  const listRef = useRef()
  const handleArrow=(direction) => {
    
    if (direction === 'left') {
     listRef.current.style.transform()
    }
    if (direction === 'right') {
      
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
      <div className="products" ref={listRef}>
        <KeyboardArrowLeft className="arrow left" onClick={()=>handleArrow("left")}/>
        {products.map(product =><Product product={product} key={product.id}/>)          
        }
        <KeyboardArrowRight className="arrow right" onClick={()=>handleArrow("right")}/>
      </div>     
    </div>
  )
}

export default SliderProduct