import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-light theme1 position-relative'>
      <div className='footer-bottom pt-80 pb-30'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-6 col-lg-4 mb-30'>
              <div className='footer-widget mx-w-400'>
                <div className='footer-logo mb-25'>
                  <a href='index.html'>
                    <img src='assets/img/logo/logo.png' alt='footer logo' />
                  </a>
                </div>
                <p className='text mb-30'>
                  We are a team of professional designers and developers that
                  create high quality wordpress plugins, Html, React Template.
                </p>

                <div className='social-network'>
                  <ul className='d-flex'>
                    <li>
                      <a href='https://www.facebook.com/' target='_blank'>
                        <span className='icon-social-facebook'></span>
                      </a>
                    </li>
                    <li>
                      <a href='https://twitter.com/' target='_blank'>
                        <span className='icon-social-twitter'></span>
                      </a>
                    </li>
                    <li>
                      <a href='https://www.youtube.com/' target='_blank'>
                        <span className='icon-social-youtube'></span>
                      </a>
                    </li>
                    <li className='mr-0'>
                      <a href='https://www.instagram.com/' target='_blank'>
                        <span className='icon-social-instagram'></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-2 mb-30'>
              <div className='footer-widget'>
                <div className='border-bottom cbb1 mb-25'>
                  <div className='section-title'>
                    <h2 className='title'>Information</h2>
                  </div>
                </div>

                <ul className='footer-menu'>
                  <li>
                    <a href='about-us.html'>About us</a>
                  </li>
                  <li>
                    <a href='#'>payment</a>
                  </li>
                  <li>
                    <a href='contact.html'>Contact us</a>
                  </li>
                  <li>
                    <a href='#'>Stores</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-2 mb-30'>
              <div className='footer-widget'>
                <div className='border-bottom cbb1 mb-25'>
                  <div className='section-title'>
                    <h2 className='title'>social Links</h2>
                  </div>
                </div>

                <ul className='footer-menu'>
                  <li>
                    <a href='#'>New products</a>
                  </li>
                  <li>
                    <a href='#'>Best sales</a>
                  </li>
                  <li>
                    <a href='login.html'>Login</a>
                  </li>
                  <li>
                    <a href='myaccount.html'>My account</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-4 mb-30'>
              <div className='footer-widget'>
                <div className='border-bottom cbb1 mb-25'>
                  <div className='section-title'>
                    <h2 className='title'>Newsletter</h2>
                  </div>
                </div>
                <p className='text mb-20'>
                  Subcribe to the TheFace mailing list to receive update on mnew
                  arrivals, special offers and other discount information.
                </p>
                <div className='nletter-form mb-35'>
                  <form
                    className='form-inline position-relative'
                    action='http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'
                    target='_blank'
                    method='post'
                  >
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Your email address'
                    />
                    <button
                      className='btn news-letter-btn text-capitalize'
                      type='submit'
                    >
                      Sign up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='coppy-right bg-dark py-15'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 col-xl-4 order-last order-md-first'>
              <div className='text-md-start text-center mt-3 mt-md-0'>
                <p>
                  Copyright &copy;{' '}
                  <a href='https://hasthemes.com/'>HasThemes</a>. All Rights
                  Reserved
                </p>
              </div>
            </div>
            <div className='col-12 col-md-6 col-xl-8'>
              <div className='text-md-end text-center'>
                <img src='assets/img/payment/1.png' alt='img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
