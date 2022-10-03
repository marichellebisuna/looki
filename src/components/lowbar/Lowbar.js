import './lowbar.scss'

const Lowbar = () => {
  return (
    <div className="low">
      <div className="lowItem">
        <img src="https://htmldemo.net/looki/looki/assets/img/icon/2.png" alt="" srcset=""/>
        <div className="desc">
          <h4>Free Shipping</h4>
          <p>On all orders over $75.00</p>
        </div>
      </div>
      <div className="lowItem">
        <img src="https://htmldemo.net/looki/looki/assets/img/icon/3.png" alt="" srcset=""/>
        <div className="desc">
          <h4>Free Returns</h4>
          <p>Returns are free within 9 days</p>
        </div>
      </div>
      <div className="lowItem">
        <img src="https://htmldemo.net/looki/looki/assets/img/icon/4.png" alt="" srcset=""/>
        <div className="desc">
          <h4>100% Payment Secure</h4>
          <p>Your payment are safe with us</p>
        </div>
      </div>
      <div className="lowItem">
        <img src="https://htmldemo.net/looki/looki/assets/img/icon/5.png" alt="" srcset=""/>
        <div className="desc">
          <h4>Support 24/7</h4>
          <p>Contact us 24 hours a day</p>
        </div>
      </div>
    </div>
  )
}

export default Lowbar