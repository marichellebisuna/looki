import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'
import { useRef, useState } from 'react'
import './hero.scss'
import {slide} from '../../data'

const Hero = () => {
const [slideIndex, setSlideIndex] = useState(1);
const listRef = useRef();

const handleArrow = (direction) => {
  if(direction==="left") {   
    setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    listRef.current.style.transform=`translateX(${slideIndex * -100}vw)`   
  }
  else{
    setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    listRef.current.style.transform=`translateX(${slideIndex * -100}vw)`
  }
}
  return (
    <div className="hero">      
        <KeyboardArrowLeft className='arrow left' onClick={()=>handleArrow("left")}/>
      <div className="slider"  ref={listRef} >   
           {slide.map((item) => (
              <div className="slide" key={item.id}>          
                  <div className="img"><img src={item.img} alt="" srcset="" /></div>
                  <div className="info">
                    <h4>{item.title}</h4> 
                    <h1>{item.desc}</h1>
                    <h1>{item.disc}</h1>
                    <button type="submit">shop now</button>              
                  </div>          
              </div>  
            ))}
      
       </div> 
        <KeyboardArrowRight className='arrow right' onClick={()=>handleArrow("right")}/> 
     
      <div className="dots">
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  )
}

export default Hero         