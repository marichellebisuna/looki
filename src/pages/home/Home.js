import Bar from '../../components/bar/Bar'
import Banner from '../../components/bottomBanner/Banner'
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
      <Navbar/>
      <div className="home-container">
        {/* <Hero />
        <Lowbar />
        <Bar />
        <Tab />
        <Banner /> */}
        <SliderProduct />
        
      </div>
      <BrandSlider />
      <Footer />
    </>
  )
}

export default Home