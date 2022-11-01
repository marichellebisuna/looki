
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import Layout from '../../components/layout/Layout'
import Lowbar from '../../components/lowbar/Lowbar'
import './aboutus.scss'

const AboutUs = () => {
  return (
    <Layout>
    <div className='about'>
    
      <Breadcrumbs title="about us"/>
      
      <div className="about-content">
        <img className="img-top" src="https://htmldemo.net/looki/looki/assets/img/blog-post/5.jpg" alt="" />
        <h1>We Are A Digital Agency Focused On Delivering Content And Utility User-Experiences.</h1>
        <div className="desc">
        Adipiscing lacus ut elementum, nec duis, tempor litora turpis dapibus. Imperdiet cursus odio tortor in elementum. Egestas nunc eleifend feugiat lectus laoreet, vel nunc taciti integer cras. Hac pede dis, praesent nibh ac dui mauris sit. Pellentesque mi, facilisi mauris, elit sociis leo sodales accumsan. Iaculis ac fringilla torquent lorem consectetuer, sociosqu phasellus risus urna aliquam, ornare.
        </div>
        <img className="img-bottom" src="https://htmldemo.net/looki/looki/assets/img/blog-post/signature.png" alt="" />
      </div>
      <div className="lowbar">
        <Lowbar/>
      </div>
      <div className="service-section">
        <div className="service">
          <div className="img">
            <img src="https://htmldemo.net/looki/looki/assets/img/service/1.jpg" alt="" srcset="" />
          </div>
      
            <div className="title">What We Do?</div>
          <div className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</div>
        
          
        </div>
        <div className="service">
        <div className="img">
            <img src="https://htmldemo.net/looki/looki/assets/img/service/2.jpg" alt="" srcset="" />
          </div>
          <div className="title">Our Mission</div>
          <div className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</div>
        </div>
        <div className="service">
          <div className="img">
            <img src="https://htmldemo.net/looki/looki/assets/img/service/3.jpg" alt="" srcset="" />
          </div>
          
          <div className="title">About Us</div>
          <div className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</div>
        </div>
      </div>
      
    
   
    
    </div>
  </Layout>
  )
}

export default AboutUs