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


function App() {
  return ( 
<BrowserRouter>     
  <Routes>
    <Route path="/products" element={<Products />}/>      
    <Route path="/products/:id" element={<Product />}/>      
    <Route path="/contact" element={<ContactUs />}/>    
    <Route path="/about" element={<AboutUs />}/>  
    <Route path="/cart" element={<Cart />}/>      


    <Route exact path="/" element={<Home />}/> 
  </Routes>       
</BrowserRouter>  
  );
}

export default App;
