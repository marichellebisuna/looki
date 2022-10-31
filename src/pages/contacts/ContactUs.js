import './contact.scss'
import Breadcrumbs from '../../components/contact/Breadcrumbs'
import Layout from '../../components/layout/Layout'
import ContactForm from '../../components/contact/ContactForm'

const ContactUs = () => {
  return (
    <Layout>
      <div className='contactus'>
       <div className="container">
        <Breadcrumbs/>
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