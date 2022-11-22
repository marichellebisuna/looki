import './contact.scss'
import Layout from '../../components/layout/Layout'
import ContactForm from '../../components/contact/ContactForm'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'

const ContactUs = () => {
  return (
    <Layout>
      <div className='contactus'>
       <div className="contact-container">
        <Breadcrumbs title="contact"/>
        <div className="googlemap">          
          <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
        <ContactForm />      
       </div>      
      </div>
    </Layout>    
  )
}

export default ContactUs