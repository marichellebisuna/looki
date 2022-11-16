import { Link } from 'react-router-dom'
import './bar.scss'


const Bar = () => {
  return (
    <div className="bar">     
        <div className="left">
          <Link to="/products"><img src="https://htmldemo.net/looki/looki/assets/img/banner/1.jpg" alt="" srcset="" /></Link>
        </div>
        <div className="middle">
        <Link to="/products"><img src="https://htmldemo.net/looki/looki/assets/img/banner/2.jpg" alt="" srcset="" /></Link>
        </div>
        <div className="right">
        <Link to="/products"><img src="https://htmldemo.net/looki/looki/assets/img/banner/3.jpg" alt="" srcset="" /></Link>
        </div>     
    </div>
  )
}

export default Bar