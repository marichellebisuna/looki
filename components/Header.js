import React from 'react';

const Header = () => {
  return (
    <header>
      {/* <!-- header top start --> */}
      <div className='header-top theme1 bg-dark py-15'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-sm-6 order-last order-sm-first'>
              <div className='d-flex justify-content-center justify-content-sm-start align-items-center'>
                <div className='social-network2'>
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
                <div className='media static-media ms-4 d-flex align-items-center'>
                  <div className='media-body'>
                    <div className='phone'>
                      <a href='tel:(+123)4567890' className='text-white'>
                        <i className='icon-call-out me-1'></i> (+123)4567890
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-sm-6'>
              <nav className='navbar-top pb-2 pb-sm-0 position-relative'>
                <ul className='d-flex justify-content-center justify-content-md-end align-items-center'>
                  <li>
                    <a
                      href='#'
                      id='dropdown1'
                      data-bs-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Setting <i className='ion ion-ios-arrow-down'></i>
                    </a>
                    <ul
                      className='topnav-submenu dropdown-menu'
                      aria-labelledby='dropdown1'
                    >
                      <li>
                        <a href='myaccount.html'>My account</a>
                      </li>
                      <li>
                        <a href='checkout.html'>Checkout</a>
                      </li>
                      <li>
                        <a href='login.html'>Sign out</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href='#'
                      id='dropdown2'
                      data-bs-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      USD $ <i className='ion ion-ios-arrow-down'></i>
                    </a>
                    <ul
                      className='topnav-submenu dropdown-menu'
                      aria-labelledby='dropdown2'
                    >
                      <li className='active'>
                        <a href='#'>EUR €</a>
                      </li>
                      <li>
                        <a href='#'>USD $</a>
                      </li>
                    </ul>
                  </li>
                  <li className='english'>
                    <a
                      href='#'
                      id='dropdown3'
                      className='pe-0'
                      data-bs-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      <img src='assets/img/logo/us-flag.jpg' alt='us flag' />
                      English
                      <i className='ion ion-ios-arrow-down'></i>
                    </a>
                    <ul
                      className='topnav-submenu dropdown-menu'
                      aria-labelledby='dropdown3'
                    >
                      <li className='active'>
                        <a href='#'>
                          <img
                            src='assets/img/logo/us-flag.jpg'
                            alt='us flag'
                          />
                          English
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <img
                            src='assets/img/logo/france.jpg'
                            alt='france flag'
                          />
                          Français
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- header top end -->
  <!-- header-middle satrt --> */}
      <div id='sticky' className='header-middle theme1 py-15 py-lg-0'>
        <div className='container position-relative'>
          <div className='row align-items-center'>
            <div className='col-6 col-lg-2 col-xl-2'>
              <div className='logo'>
                <a href='index.html'>
                  <img src='assets/img/logo/logo.png' alt='logo' />
                </a>
              </div>
            </div>
            <div className='col-xl-8 col-lg-7 d-none d-lg-block'>
              <ul className='main-menu d-flex justify-content-center'>
                <li className='active ml-0'>
                  <a href='index.html' className='ps-0'>
                    Home <i className='ion-ios-arrow-down'></i>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='index.html'>Home 1</a>
                    </li>
                    <li>
                      <a href='index-2.html'>Home 2</a>
                    </li>
                  </ul>
                </li>
                <li className='position-static'>
                  <a href='shop-grid-3-column.html'>
                    Shop <i className='ion-ios-arrow-down'></i>
                  </a>
                  <ul className='mega-menu row'>
                    <li className='col-3'>
                      <ul>
                        <li className='mega-menu-title'>
                          <a href='#'>Shop Grid</a>
                        </li>
                        <li>
                          <a href='shop-grid-3-column.html'>
                            Shop Grid 3 Column
                          </a>
                        </li>
                        <li>
                          <a href='shop-grid-4-column.html'>
                            Shop Grid 4 Column
                          </a>
                        </li>
                        <li>
                          <a href='shop-grid-left-sidebar.html'>
                            Shop Grid Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href='shop-grid-right-sidebar.html'>
                            Shop Grid Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='col-3'>
                      <ul>
                        <li className='mega-menu-title'>
                          <a href='#'>Shop List</a>
                        </li>
                        <li>
                          <a href='shop-grid-list.html'>Shop List</a>
                        </li>
                        <li>
                          <a href='shop-grid-list-left-sidebar.html'>
                            Shop List Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href='shop-grid-list-right-sidebar.html'>
                            Shop List Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='col-3'>
                      <ul>
                        <li className='mega-menu-title'>
                          <a href='#'>Shop Single</a>
                        </li>
                        <li>
                          <a href='single-product.html'>Shop Single</a>
                        </li>
                        <li>
                          <a href='single-product-configurable.html'>
                            Shop Variable
                          </a>
                        </li>
                        <li>
                          <a href='single-product-affiliate.html'>
                            Shop Affiliate
                          </a>
                        </li>
                        <li>
                          <a href='single-product-group.html'>Shop Group</a>
                        </li>
                      </ul>
                    </li>
                    <li className='col-3'>
                      <ul>
                        <li className='mega-menu-title'>
                          <a href='#'>other pages</a>
                        </li>
                        <li>
                          <a href='about-us.html'>About Page</a>
                        </li>
                        <li>
                          <a href='cart.html'>Cart Page</a>
                        </li>
                        <li>
                          <a href='checkout.html'>Checkout Page</a>
                        </li>
                        <li>
                          <a href='compare.html'>Compare Page</a>
                        </li>
                      </ul>
                    </li>
                    <li className='col-6 mt-4'>
                      <a
                        href='single-product.html'
                        className='zoom-in overflow-hidden'
                      >
                        <img src='assets/img/mega-menu/1.jpg' alt='img' />
                      </a>
                    </li>
                    <li className='col-6 mt-4'>
                      <a
                        href='single-product.html'
                        className='zoom-in overflow-hidden'
                      >
                        <img src='assets/img/mega-menu/2.jpg' alt='img' />
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='#'>
                    Pages <i className='ion-ios-arrow-down'></i>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='about-us.html'>About Page</a>
                    </li>
                    <li>
                      <a href='cart.html'>Cart Page</a>
                    </li>
                    <li>
                      <a href='checkout.html'>Checkout Page</a>
                    </li>
                    <li>
                      <a href='compare.html'>Compare Page</a>
                    </li>
                    <li>
                      <a href='login.html'>Login &amp; Register Page</a>
                    </li>
                    <li>
                      <a href='myaccount.html'>Account Page</a>
                    </li>
                    <li>
                      <a href='wishlist.html'>Wishlist Page</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='blog-grid-3-column.html'>
                    Blog <i className='ion-ios-arrow-down'></i>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='blog-grid-3-column.html'>Blog Grid</a>
                      <ul className='sub-menu'>
                        <li>
                          <a href='blog-grid-3-column.html'>
                            Blog Grid 3 column
                          </a>
                        </li>
                        <li>
                          <a href='blog-grid-4-column.html'>
                            Blog Grid 4 column
                          </a>
                        </li>
                        <li>
                          <a href='blog-grid-left-sidebar.html'>
                            Blog Grid Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href='blog-grid-right-sidebar.html'>
                            Blog Grid Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='blog-single-left-sidebar.html'>Blog List</a>
                      <ul className='sub-menu'>
                        <li>
                          <a href='blog-list-left-sidebar.html'>
                            Blog List Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href='blog-list-right-sidebar.html'>
                            Blog List Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='single-blog.html'>Blog Single</a>
                      <ul className='sub-menu'>
                        <li>
                          <a href='single-blog.html'>Single Blog</a>
                        </li>
                        <li>
                          <a href='blog-single-left-sidebar.html'>
                            Blog Single Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href='blog-single-right-sidebar.html'>
                            Blog Single Right Sidbar
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='contact.html'>contact Us</a>
                </li>
              </ul>
            </div>
            <div className='col-6 col-lg-3 col-xl-2'>
              {/* <!-- search-form end --> */}
              <div className='d-flex align-items-center justify-content-end'>
                {/* <!-- static-media end --> */}
                <div className='cart-block-links theme1 d-none d-sm-block'>
                  <ul className='d-flex'>
                    <li>
                      <a
                        href='javascript:void(0)'
                        className='search search-toggle'
                      >
                        <i className='icon-magnifier'></i>
                      </a>
                    </li>
                    <li>
                      <a href='compare.html'>
                        <span className='position-relative'>
                          <i className='icon-shuffle'></i>
                          <span className='badge cbdg1'>1</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className='offcanvas-toggle'
                        href='#offcanvas-wishlist'
                      >
                        <span className='position-relative'>
                          <i className='icon-heart'></i>
                          <span className='badge cbdg1'>3</span>
                        </span>
                      </a>
                    </li>
                    <li className='mr-xl-0 cart-block position-relative'>
                      <a className='offcanvas-toggle' href='#offcanvas-cart'>
                        <span className='position-relative'>
                          <i className='icon-bag'></i>
                          <span className='badge cbdg1'>3</span>
                        </span>
                      </a>
                    </li>
                    {/* <!-- cart block end --> */}
                  </ul>
                </div>
                <div className='mobile-menu-toggle theme1 d-lg-none'>
                  <a href='#offcanvas-mobile-menu' className='offcanvas-toggle'>
                    <svg viewbox='0 0 700 550'>
                      <path
                        d='M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200'
                        id='top'
                      ></path>
                      <path d='M300,320 L540,320' id='middle'></path>
                      <path
                        d='M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190'
                        id='bottom'
                        transform='translate(480, 320) scale(1, -1) translate(-480, -318)'
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- header-middle end --> */}
    </header>
  );
};

export default Header;
