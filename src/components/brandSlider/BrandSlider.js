import './brandSlider.scss';
import {brand} from '../../data';
import {KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { useRef, useState } from 'react';

const BrandSlider = () => {
const [slideNumber, setSlideNumber] = useState(0)
const [isOn, setIsOn] = useState(false)
const listRef=useRef();

const handleArrow = (direction) =>{
  setIsOn(true)
  let distance = listRef.current.getBoundingClientRect().x-201
console.log(distance)
  if(direction === 'left' && slideNumber > 0) { 
    setSlideNumber(slideNumber-1)
    listRef.current.style.transform = `translateX(${230 + distance}px)`    
  } 
  if(direction === 'right'&& slideNumber < 7) { 
    setSlideNumber(slideNumber+1)
    listRef.current.style.transform = `translateX(${-228 + distance}px)`    
  } 
}
  return (
    <div className="brandSlider">
      <KeyboardArrowLeft className={slideNumber===0?"arrow end left":"arrow left"} 
         onClick={()=>handleArrow("left")}/>
      <div className="brand-wrapper">  
        <div className="brand-container" ref={listRef}>
          {brand.map((item) => (
          <div className="brand" key={item.id}>
            <img src={item.img} alt={item.title} srcset="" />
          </div>        
          ))}
        </div>   
      </div>
      <KeyboardArrowRight className="arrow right" 
         onClick={()=>handleArrow("right")}/>
    </div>
  )
}

export default BrandSlider