import { EmailOutlined, Fax, PhoneOutlined } from '@mui/icons-material';
import './contactform.scss';

const ContactForm = () => {
  return (
    <div className="contactform">
      <div className="left">
        <h3>Contact Us</h3>
        <div className='description'>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</div>
        <div className="contact-block">
          <div className="contact-icon"><Fax /> Address</div>
        <p>123 Main Street, Anytown, CA 12345 – USA</p></div>
        
        <hr/>
        <div className="contact-block">
        <div className="contact-icon"><PhoneOutlined /> Phone</div>
          <div className="details">
            <div className="detail-one">Mobile: (08) 123 456 789</div>
            <div className="detail-two">Hotline: 1009 678 456</div>
          </div>
         </div> 
        
        <hr/>
        <div className="contact-block">
        <div className="contact-icon"><EmailOutlined /> Email</div>
          <div className="details">
          <div className="detail-one">yourmail@domain.com</div>
          <div className="detail-two">support@hastech.company</div>
          </div>
        </div>

      </div>
      <div className="right">
      <h3>Tell Us Your Message</h3>
      <form>
        <label>Your Name*</label>
        <input type="text" name="name" id="name" />
        <label>Your Email*</label>
        <input type="email" name="email" id="email" />
        <label>Subject</label>
        <input type="text" name="subject" id="subject" />
        <label>Your Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <button type="submit">SUBMIT</button>
      </form>
      </div>
    </div>
  )
}

export default ContactForm