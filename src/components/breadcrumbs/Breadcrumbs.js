import { Link } from 'react-router-dom'
import './breadcrumb.scss'

const Breadcrumbs = ({title}) => {
  return (
    <div className="breadcrumb">
      <div className="container">
        <h1>{title?title:"Beauty & Cosmetics"}</h1>
        <div className="line"></div>
        <div className="breadcrumbs"><Link to="/" style={{"textDecoration": "none"}}>Home</Link> > {title?title:"Beauty & Cosmetics"}</div>
      </div>      
    </div>
  )
}

export default Breadcrumbs