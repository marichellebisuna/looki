import { Link } from 'react-router-dom'
import './breadcrumb.scss'

const Breadcrumbs = () => {
  return (
    <div className="breadcrumb">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="line"></div>
        <div className="breadcrumbs"><Link to="/" style={{"textDecoration": "none"}}>Home</Link> > <Link to="/contact" style={{"textDecoration": "none"}}>Contact</Link></div>
      </div>      
    </div>
  )
}

export default Breadcrumbs