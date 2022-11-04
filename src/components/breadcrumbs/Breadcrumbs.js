import { Link } from 'react-router-dom'
import './breadcrumb.scss'

const Breadcrumbs = ({title}) => {
  return (
    <div className="breadcrumb">
      <div className="container">
        <h1>{title}</h1>
        <div className="line"></div>
        <div className="breadcrumbs"><Link to="/" style={{"textDecoration": "none"}}>Home</Link> > <Link to={`/${title}`} style={{"textDecoration": "none"}}>{title}</Link></div>
      </div>      
    </div>
  )
}

export default Breadcrumbs