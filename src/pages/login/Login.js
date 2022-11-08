
import { useState } from 'react'
import { Link} from 'react-router-dom'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import Layout from '../../components/layout/Layout'
import './login.scss'


const Login = () => {

  return (
    <Layout>    
      <Breadcrumbs title="login"/>
      <div className="login">
      <div className="container">
          <h1 >
            <Link to="/login" className="active" >Login</Link> 
            <div className="vertical-line"/> 
            <Link to="/register" >Register</Link>         
          </h1>
          <div className="box">
            <form action="">
              <input type="text" name="" id="" placeholder="Username"/>
              <input type="password" name="" id="" placeholder="Password"/>
              <div className="remember">
                <ul>
                  <li><input type="checkbox" name="" id="" className="checkbox"/></li>
                  <li><label>Remember me</label></li>
                </ul>  
                <span><Link to="/forgotpassword">Forgot Password?</Link></span>
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
  </Layout>
  )
}

export default Login