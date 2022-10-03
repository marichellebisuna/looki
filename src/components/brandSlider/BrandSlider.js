import './brandSlider.scss';
import {brand} from '../../data';
import {KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { useRef, useState } from 'react';

const BrandSlider = () => {
const [slideNumber, setSlideNumber] = useState(0)
const [isOn, setIsOn] = useState(false)

const listRef=useRef();
const cursorRef=useRef();


const handleArrow = (direction) =>{
  setIsOn(true)
  let distance = listRef.current.getBoundingClientRect().x-208
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
    <div className="brandSlider">
      <div className="brand-wrapper">     
        <KeyboardArrowLeft className={slideNumber===0?"arrow end left":"arrow left"} 
         onClick={()=>handleArrow("left")}
         
        />
        <div className="brand-container" ref={listRef}>
          {brand.map((item) => (
          <div className="brand" key={item.id}>
            <img src={item.img} alt={item.title} srcset="" />
          </div>        
          ))}
        </div>   
           
        <KeyboardArrowRight className="arrow right" 
         onClick={()=>handleArrow("right")}
        />
      </div>
    </div>
  )
}

export default BrandSlider