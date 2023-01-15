import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/images/logo/ninja.jpg";

const Header = () => {
  const [btnState, setBtnState] = useState(false);
  const [btn, setBtn] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  function handleclick() {
    setBtn((btn) => !btn);
  }

  let toggleClassCheck = btnState ? " active" : "";
  let toggleClass = btn ? " active" : "";

  return (
    <>
      {/* <!--====================  header area ====================--> */}
      <div className="header-area header-sticky only-mobile-sticky">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header position-relative">
                {/* <!-- brand logo --> */}
                <div className="header__logo top-logo">
                  <NavLink to="/">
                    <img src={logo} className="img-fluid" alt="" />
                    {/* // width="160" height="48v" */}
                  </NavLink>
                </div>

                <div className="header-right flexible-image-slider-wrap">
                  <div
                    className={`header-right-inner${toggleClass}`}
                    id="hidden-icon-wrapper"
                  >
                    {/* <!-- Header Search Form --> */}
                    <div className="header-search-form d-md-none d-block">
                      <form action="#" className="search-form-top">
                        <input
                          className="search-field"
                          type="text"
                          placeholder="Search…"
                        />
                        <button className="search-submit">
                          <i className="search-btn-icon fa fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>

                  {/* <!-- Header Top Info --> */}
                  <div className="swiper-container header-top-info-slider-werap top-info-slider__container swiper-container-initialized swiper-container-horizontal swiper-container-android">
                    <div className="swiper-wrapper header-top-info-inner default-color">
                      <div className="swiper-slide YourClass">
                        <div className="info-item">
                          <div className="info-icon">
                            <span className="fa fa-phone"></span>
                          </div>
                          <div className="info-content">
                            <h6 className="info-title">0122 8899900</h6>
                            <div className="info-sub-title">
                              Info@example.com
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide YourClass">
                        <div className="info-item">
                          <div className="info-icon">
                            <span className="fa fa-map-marker-alt"></span>
                          </div>
                          <div className="info-content">
                            <h6 className="info-title">
                              219 Amara Fort Apt. 394
                            </h6>
                            <div className="info-sub-title">
                              New York, NY 941
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide YourClass">
                        <div className="info-item">
                          <div className="info-icon">
                            <span className="fa fa-clock"></span>
                          </div>
                          <div className="info-content">
                            <h6 className="info-title">8:00AM - 6:00PM</h6>
                            <div className="info-sub-title">
                              Monday to Saturday
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide YourClass">
                        <div className="info-item">
                          <div className="info-icon">
                            <span className="fa fa-comment-alt-lines"></span>
                          </div>
                          <div className="info-content">
                            <h6 className="info-title">Online 24/7</h6>
                            <div className="info-sub-title">+122 123 4567</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Header Social Networks --> */}
                  <div className="header-social-networks style-icons">
                    <div className="inner YourClass">
                      <a
                        className=" social-link hint--black hint--bottom-left"
                        aria-label="Twitter"
                        href="https://twitter.com"
                        data-hover="Twitter"
                      >
                        <i className="social-icon fab fa-twitter"></i>
                      </a>
                      <a
                        className=" social-link hint--black hint--bottom-left"
                        aria-label="Facebook"
                        href="https://facebook.com"
                        data-hover="Facebook"
                      >
                        <i className="social-icon fab fa-facebook-f"></i>
                      </a>
                      <a
                        className=" social-link hint--black hint--bottom-left"
                        aria-label="Instagram"
                        href="https://instagram.com"
                        data-hover="Instagram"
                      >
                        <i className="social-icon fab fa-instagram"></i>
                      </a>
                      <a
                        className=" social-link hint--black hint--bottom-left"
                        aria-label="Linkedin"
                        href="https://linkedin.com"
                        data-hover="Linkedin"
                      >
                        <i className="social-icon fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- mobile menu --> */}
                <div
                  className="mobile-navigation-icon d-block d-xl-none"
                  id="mobile-menu"
                  onClick={handleClick}
                >
                  <i></i>
                </div>
                {/* <!-- hidden icons menu --> */}
                <div
                  className="hidden-icons-menu d-block d-md-none"
                  id="hidden-icon-trigger"
                >
                  {/* <a href="/"> */}
                  <i
                    className="far fa-ellipsis-h-alt YourClass"
                    onClick={handleclick}
                  ></i>
                  {/* </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom-wrap bg-theme-default d-md-block d-none header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-bottom-inner position-relative">
                <div className="header-bottom-left-wrap">
                  {/* <!-- navigation menu --> */}
                  <div className="header__navigation d-none d-xl-block">
                    <nav className="navigation-menu navigation-menu--text_white">
                      <ul>
                        <li className="has-children">
                          <NavLink to="/">
                            <span>Home</span>
                          </NavLink>
                        </li>
                        <li className="has-children has-children--multilevel-submenu">
                          <a href="/">
                            <span>Company</span>
                          </a>
                          <ul className="submenu">
                            <li className="has-children">
                              <NavLink to="/about">
                                <span>About us</span>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/contact">
                                <span>Contact us</span>
                              </NavLink>
                            </li>
                            <li>
                              <Link to="/leader">
                                <span>Leadership</span>
                              </Link>
                            </li>
                            <li>
                              <NavLink to="/choose">
                                <span>Why choose us</span>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/history">
                                <span>Our history</span>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/faqs">
                                <span>FAQs</span>
                              </NavLink>
                            </li>
                          </ul>
                        </li>
                        <li className="has-children has-children--multilevel-submenu">
                          <a href="/">
                            <span>Our Services</span>
                          </a>
                          <ul className="submenu">
                            <li>
                              <Link to="/IT">
                                <span>IT Services</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/digital">
                                <span>Digital Marketing</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/recruit">
                                <span>Recruitment Services</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="has-children">
                          <Link to="/casestudies">
                            <span>Case Studies</span>
                          </Link>
                        </li>
                        <li className="has-children">
                          <Link to="/blog">
                            <span>Blog</span>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="header-search-form ">
                  <form action="#" className="search-form-top style-03 ">
                    <input
                      className="search-field"
                      type="text"
                      placeholder="Search…"
                    />
                    <button className="search-submit">
                      <i className="search-btn-icon fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--====================  End of header area  ====================--> */}

      {/* <!--====================  scroll top ====================--> */}
      <a href="/" className="scroll-top" id="scroll-top">
        <i className="arrow-top fal fa-long-arrow-up"></i>
        <i className="arrow-bottom fal fa-long-arrow-up"></i>
      </a>
      {/* <!--====================  End of scroll top  ====================--> */}

      {/* <!-- Start Toolbar --> */}
      <div className="demo-option-container">
        {/* <!-- Start Toolbar --> */}
        {/* <div className="aeroland__toolbar">
          <div className="inner">
            <a
              className="quick-option hint--bounce hint--left hint--black primary-color-hover-important"
              href="/"
              aria-label="Quick Options"
            >
              <i className="fal fa-project-diagram"></i>
            </a>
            <a
              className="hint--bounce hint--left hint--black primary-color-hover-important"
              href="https://hasthemes.com/contact-us/"
              aria-label="Support Center"
            >
              <i className="fal fa-life-ring"></i>
            </a>
            <a
              className="hint--bounce hint--left hint--black primary-color-hover-important"
              href="https://1.envato.market/c/417168/275988/4415?subId1=hastheme&subId2=mitech-preview&subId3=https%3A%2F%2Fthemeforest.net%2Fcart%2Fconfigure_before_adding%2F24906742%3Flicense%3Dregular%26size%3Dsource&u=https%3A%2F%2Fthemeforest.net%2Fcart%2Fconfigure_before_adding%2F24906742%3Flicense%3Dregular%26size%3Dsource"
              aria-label="Purchase Mitech"
            >
              <i className="fal fa-shopping-cart"></i>
            </a>
          </div>
        </div> */}
        {/* <!-- End Toolbar --> */}
        {/* <!-- Start Quick Link --> */}
        <div className="demo-option-wrapper">
          <div className="demo-panel-header">
            <div className="title">
              <h6 className="heading mt-30">
                IT Solutions Mitech - Technology, IT Solutions & Services Html5
                Template
              </h6>
            </div>

            <div className="panel-btn mt-20">
              <a
                className="ht-btn ht-btn-md"
                href="https://1.envato.market/c/417168/275988/4415?subId1=hastheme&subId2=mitech-preview&subId3=https%3A%2F%2Fthemeforest.net%2Fcart%2Fconfigure_before_adding%2F24906742%3Flicense%3Dregular%26size%3Dsource&u=https%3A%2F%2Fthemeforest.net%2Fcart%2Fconfigure_before_adding%2F24906742%3Flicense%3Dregular%26size%3Dsource"
              >
                <i className="far fa-shopping-cart me-2"></i> Buy Now{" "}
              </a>
            </div>
          </div>
          <div className="demo-quick-option-list">
            <a
              className="link hint--bounce hint--black hint--top hint--dark"
              href="index-appointment.html"
              aria-label="Appointment"
            >
              <img
                className="img-fluid"
                src="assets/images/demo-images/home-01.webp"
                alt="Images"
              />
            </a>
            <a
              className="link hint--bounce hint--black hint--top hint--dark"
              href="index-infotechno.html"
              aria-label="Infotechno"
            >
              <img
                className="img-fluid"
                src="assets/images/demo-images/home-02.webp"
                alt="Images"
              />
            </a>
            <a
              className="link hint--bounce hint--black hint--top hint--dark"
              href="index-processing.html"
              aria-label="Processing"
            >
              <img
                className="img-fluid"
                src="assets/images/demo-images/home-03.webp"
                alt="Images"
              />
            </a>
            <a
              className="link hint--bounce hint--black hint--top hint--dark"
              href="index-services.html"
              aria-label="Services"
            >
              <img
                className="img-fluid"
                src="assets/images/demo-images/home-04.webp"
                alt="Images"
              />
            </a>
            <a
              className="link hint--bounce hint--black hint--top hint--dark"
              href="index-resolutions.html"
              aria-label="Resolutions"
            >
              <img
                className="img-fluid"
                src="assets/images/demo-images/home-05.webp"
                alt="Images"
              />
            </a>
            <a
              className="link hint--bounce hint--black hint--top hint--dark"
              href="index-cybersecurity.html"
              aria-label="Cybersecurity"
            >
              <img
                className="img-fluid"
                src="assets/images/demo-images/home-06.webp"
                alt="Images"
              />
            </a>
            <a
              className="link hint--bounce hint--black hint--top hint--dark"
              href="index-modern-it-company.html"
              aria-label="Modern IT Company"
            >
              <img
                className="img-fluid"
                src="assets/images/demo-images/modern-it-company.webp"
                alt="Images"
              />
            </a>
            <a
              className="link hint--bounce hint--black hint--top hint--dark"
              href="index-machine-learning.html"
              aria-label="Machine Learning"
            >
              <img
                className="img-fluid"
                src="assets/images/demo-images/machine-learning.webp"
                alt="Images"
              />
            </a>
            <a
              className="link hint--bounce hint--black hint--top hint--dark"
              href="index-software-innovation.html"
              aria-label="Software Innovation"
            >
              <img
                className="img-fluid"
                src="assets/images/demo-images/software-innovation.webp"
                alt="Images"
              />
            </a>
          </div>
        </div>
        {/* <!-- End Quick Link --> */}
      </div>
      {/* <!-- End Toolbar --> */}

      {/* <!--====================  mobile menu overlay ====================--> */}
      <div
        className={`mobile-menu-overlay${toggleClassCheck}`}
        id="mobile-menu-trigger"
      >
        <div className="mobile-menu-overlay__inner">
          <div className="mobile-menu-overlay__header">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-6 col-8">
                  {/* <!-- logo --> */}
                  <div className="logo">
                    <a href="index.html">
                      <img src={logo} className="img-fluid" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-4">
                  {/* <!-- mobile menu content --> */}
                  <div className="mobile-menu-content text-end">
                    <span
                      className="mobile-navigation-close-icon"
                      id="mobile-menu-close-trigger"
                      onClick={handleClick}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-menu-overlay__body">
            <nav className="offcanvas-navigation">
              <ul>
                <li className="has-children">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="has-children">
                  {/* <span className="menu-expand" onClick={HandleClick}>
                    <i></i>
                  </span> */}
                  <a href="/">Company</a>
                  <ul className="sub-menu">
                    <li className="has-children">
                      <NavLink to="/about">
                        <span>About us</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">
                        <span>Contact us</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/leader">
                        <span>Leadership</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/choose">
                        <span>Why choose us</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/history">
                        <span>Our history</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/faqs">
                        <span>FAQs</span>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  {/* <span className="menu-expand" onClick={HandleClick}>
                    <i></i>
                  </span> */}
                  <a href="/">Our Services</a>
                  <ul className="sub-menu">
                    <li>
                      <NavLink to="/recruit">
                        <span>Recruitment Services</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/digital">
                        <span>Digital Marketing</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/IT">
                        <span>IT Services</span>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <NavLink to="/casestudies">Case Studies</NavLink>
                </li>
                <li className="has-children">
                  <NavLink to="/blogs">Blogs</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* <!--====================  End of mobile menu overlay  ====================--> */}

      {/* <!--====================  search overlay ====================--> */}
      <div className="search-overlay" id="search-overlay">
        <div className="search-overlay__header">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-6 ms-auto col-4">
                {/* <!-- search content --> */}
                <div className="search-content text-end">
                  <span
                    className="mobile-navigation-close-icon"
                    id="search-close-trigger"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-overlay__inner">
          <div className="search-overlay__body">
            <div className="search-overlay__form">
              <form action="#">
                <input type="text" placeholder="Search" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!--====================  End of search overlay  ====================--> */}
    </>
  );
};

export default Header;
