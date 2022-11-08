import { Link} from 'react-router-dom'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import Layout from '../../components/layout/Layout'

import './register.scss'

const Register = ({active,setActive}) => {
 
  return (
    <Layout>    
      <Breadcrumbs title="register"/>
      <div className="register">
        <div className="container">
        <h1 >
            <Link to="/login">Login</Link> 
            <div className="vertical-line"/> 
            <Link to="/register" className="active" >Register</Link>         
          </h1>
          <div className="box">
            <form action="">
              <input type="text" name="" id="" placeholder="Username"/>
              <input type="password" name="" id="" placeholder="Password"/>
              <input type="text" name="" id="" placeholder="Email"/>
             
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
  </Layout>
  )
}

export default Register