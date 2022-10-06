import './App.scss';
import {  
  BrowserRouter,
  Route, Routes
} from "react-router-dom";
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import ContactUs from './pages/contacts/ContactUs';
import Product from './pages/product/Product';
import Footer from './components/footer/Footer';

function App() {
  return ( 
<BrowserRouter>     
  <Routes>
    <Route path="/products" element={<Products />}/>      
    <Route path="/products/:id" element={<Product />}/>      
    <Route path="/contact" element={<ContactUs />}/>      
    <Route exact path="/" element={<Home />}/> 
  </Routes>  
  
  <Footer/>
</BrowserRouter>  
  );
}

export default App;
