import { Link } from 'react-router-dom'
import './banner.scss'

const Banner = () => {
  return (
    <div className="bottom-banner">
      <div className="box1"><Link to="/products"><img className="img1"src="https://htmldemo.net/looki/looki/assets/img/banner/5.jpg" alt="" srcset="" /></Link></div>
      <div className="box1"><Link to="/products"><img className="img1"src="https://htmldemo.net/looki/looki/assets/img/banner/6.jpg" alt="" srcset="" /></Link></div>
      <div className="box2"><Link to="/products"><img className="img2"src="https://htmldemo.net/looki/looki/assets/img/banner/4.jpg" alt="" srcset="" /></Link>
      </div>

         
      
      
     
    </div>
  )
}

export default Banner