import './App.scss';
import {  
  BrowserRouter,
  Route, Routes
} from "react-router-dom";
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import ContactUs from './pages/contacts/ContactUs';
import AboutUs from './pages/about/AboutUs';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import MyAccount from './pages/myaccount/MyAccount';



function App() {
  return ( 
<BrowserRouter>     
  <Routes>
    <Route path="/products" element={<Products />}/>      
    <Route path="/products/:id" element={<Product />}/>      
    <Route path="/contact" element={<ContactUs />}/>    
    <Route path="/about" element={<AboutUs />}/>  
    <Route path="/cart" element={<Cart />}/> 
    <Route path="/checkout" element={<Checkout />}/>  
    <Route path="/login" element={<Login />}/>      
    <Route path="/register" element={<Register />}/>      
    <Route path="/myaccount" element={<MyAccount />}/>      





    <Route exact path="/" element={<Home />}/> 
  </Routes>       
</BrowserRouter>  
  );
}

export default App;
