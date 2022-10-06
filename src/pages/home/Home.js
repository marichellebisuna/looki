import Bar from '../../components/bar/Bar'
import BottomBanner from '../../components/bottomBanner/Banner'
import BrandSlider from '../../components/brandSlider/BrandSlider'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import Lowbar from '../../components/lowbar/Lowbar'
import Navbar from '../../components/navbar/Navbar'
import Tab from '../../components/product tabs/Tab'
import SliderProduct from '../../components/sliderProduct/SliderProduct'
import './home.scss'


const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <div className="home-container">
        <Hero />
        <Lowbar />
        <Bar />
        <Tab />
        
      </div>
      <BottomBanner /> 
      <SliderProduct />
      <div className="line"></div>
      <BrandSlider />
      {/* <Footer /> */}
    </>
  )
}

export default Home