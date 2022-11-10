import { StarOutlined } from '@material-ui/icons'
import './reviews.scss'

const Reviews = () => {
  return (
    <div className='reviews'>
      <div className="left">
       <div className="container">
        <div className="picture"><img src="https://htmldemo.net/looki/looki/assets/img/testimonial-image/1.png" alt="" />
        </div>
        <div className="message">
          <div className="name">
            <h3>White Lewis</h3>
            <div className="star"><StarOutlined/><StarOutlined/><StarOutlined/><StarOutlined/><StarOutlined/></div>
          </div>
          <div className="review">
          Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.
          </div>
        </div>
        <div className="reply">Reply</div>
       </div>
       <div className="container">
        <div className="picture"><img src="https://htmldemo.net/looki/looki/assets/img/testimonial-image/2.png" alt="" />
        </div>
        <div className="message">
          <div className="name">
            <h3>White Lewis</h3>
            <div className="star"><StarOutlined/><StarOutlined/><StarOutlined/><StarOutlined/><StarOutlined/></div>
          </div>
          <div className="review">
          Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.
          </div>
        </div>
        <div className="reply">Reply</div>
       </div> 
      </div>
      <div className="right">
        <h3>Add a Review</h3>
        <div className="rating"><span>Your rating</span><div className="star"><StarOutlined/><StarOutlined/><StarOutlined/><StarOutlined/><StarOutlined/></div>
        </div>
        <div className="form">
          <div className="firstform">
            <input type="text" name="" id="" placeholder='Name'/>
            <input type="text" name="" id="" placeholder='Email'/>
          </div>
          
          <textarea name="" id="" cols="30" rows="8" placeholder='Message'></textarea>
          <button type="submit" className="submit">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Reviews