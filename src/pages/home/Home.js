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
import Layout from '../../components/layout/Layout'


const Home = () => {
  return (   
    <Layout>          
      <div className="home-container">
        <Hero />
        <Lowbar />        
        <Bar />
        <Tab />
        <BottomBanner /> 
        <SliderProduct title={"New Arrival Products"} desc={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, repellat."}/>
        <div className="line"></div>
        <BrandSlider /> 
      </div>

    </Layout>    
  )
}

export default Home