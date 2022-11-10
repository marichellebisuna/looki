import './App.scss';
import {  
  BrowserRouter,
  Route, Routes, Switch
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
import Wishlist from './pages/wishlist/Wishlist';

function App() {
  return ( 
    
  <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route path="/products" element={<Products />}/>      
    <Route path="/products/:id" element={<Product />}/>      
    <Route path="/contact" element={<ContactUs />}/>    
    <Route path="/about" element={<AboutUs />}/>  
    <Route path="/cart" element={<Cart />}/> 
    <Route path="/checkout" element={<Checkout />}/>  
    <Route path="/login" element={<Login />}/>      
    <Route path="/register" element={<Register />}/>      
    <Route path="/myaccount" element={<MyAccount />}/>   
    <Route path="/wishlist" element={<Wishlist />}/>    

    
  </Routes>       
 
  );
}

export default App;
