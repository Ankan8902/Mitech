import React from "react";

import heart from "../assets/images/svg/linea-basic-heart.svg";
import alarm from "../assets/images/svg/linea-basic-alarm.svg";
import basic from "../assets/images/svg/linea-basic-case.svg";
import geolocalize from "../assets/images/svg/linea-basic-geolocalize-05.svg";
import money from "../assets/images/svg/linea-ecommerce-money.svg";
import text from "../assets/images/svg/linea-basic-spread-text-bookmark.svg";

import home2 from "../assets/images/hero/home-2.jpg";
// import box from "../assets/images/box-image/blog-01-480x298.webp";
// import info from "../assets/images/box-image/mitech-home-infotechno-box-large-image-03-480x298.webp";
// import info2 from "../assets/images/box-image/mitech-home-infotechno-box-large-image-02-480x298.webp";
// import logo from "../assets/images/brand/mitech-client-logo-01.webp";
// import logo2 from "../assets/images/brand/mitech-client-logo-01-hover.webp";
// import logo3 from "../assets/images/brand/mitech-client-logo-02.webp";
// import logo4 from "../assets/images/brand/mitech-client-logo-02-hover.webp";
// import logo5 from "../assets/images/brand/mitech-client-logo-03.webp";
// import logo6 from "../assets/images/brand/mitech-client-logo-03-hover.webp";
// import logo7 from "../assets/images/brand/mitech-client-logo-04.webp";
// import logo8 from "../assets/images/brand/mitech-client-logo-04-hover.webp";
// import logo9 from "../assets/images/brand/mitech-client-logo-05.webp";
// import logo10 from "../assets/images/brand/mitech-client-logo-05-hover.webp";
// import logo11 from "../assets/images/brand/mitech-client-logo-06.webp";
// import logo12 from "../assets/images/brand/mitech-client-logo-06-hover.webp";
// import logo13 from "../assets/images/brand/mitech-client-logo-07.webp";
// import logo14 from "../assets/images/brand/mitech-client-logo-07.webp";
// import logo15 from "../assets/images/brand/mitech-client-logo-08.webp";
// import logo16 from "../assets/images/brand/mitech-client-logo-08-hover.webp";
// import logo17 from "../assets/images/brand/mitech-client-logo-09.webp";
// import logo18 from "../assets/images/brand/mitech-client-logo-09-hover.webp";

// import award from "../assets/images/award/mitech-company-award-01-161x110.webp";
// import award2 from "../assets/images/award/mitech-company-award-02-161x116.webp";
// import award3 from "../assets/images/award/mitech-company-award-03-161x112.webp";
// import award4 from "../assets/images/award/mitech-company-award-04-161x109.webp";

import member from "../assets/images/hero/home-3.jpg";
import member2 from "../assets/images/hero/home-4.jpg";
import member3 from "../assets/images/hero/home-5.jpg";
import member4 from "../assets/images/hero/home-6.jpg";

import study from "../assets/images/hero/home-7.jpg";
import study2 from "../assets/images/projects/case-study-02-480x298.webp";
import study3 from "../assets/images/projects/case-study-03-480x298.webp";
import study4 from "../assets/images/projects/case-study-04-480x298.webp";

import testimonial from "../assets/images/hero/logo-1.jpg";
import testimonial2 from "../assets/images/testimonial/mitech-testimonial-avata-03-90x90.webp";
import testimonial3 from "../assets/images/testimonial/mitech-testimonial-avata-04-90x90.webp";
import testimonial4 from "../assets/images/testimonial/mitech-testimonial-avata-01-90x90.webp";

import mail from "../assets/php/hero-mail.php";
import services from "../assets/php/services-mail.php";

export const Home = () => {
  return (
    <div id="main-wrapper">
      <div className="site-wrapper-reveal">
        {/* <!--============ Appointment Hero Start ============--> */}
        <div className="appointment-hero-wrapper appointment-hero-bg section-space--ptb_120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="appointment-hero-wrap wow move-up">
                  <div className="appointment-hero-text">
                    <h6 className="text-white">Secure & IT Services </h6>
                    <h1 className="font-weight--reguler text-white mb-30">
                      Excellent IT services for{" "}
                      <span className="text-line">your success</span>
                    </h1>
                    <div className="hero-button">
                      <div className="video-popup infotech-video-box">
                        <a
                          href="https://www.youtube.com/watch?v=9No-FiEInLAv"
                          className="single-popup-wrap video-link"
                        >
                          <div className="video-content">
                            <div className="ht-popup-video video-button">
                              <div className="video-mark">
                                <div className="wave-pulse wave-pulse-1"></div>
                                <div className="wave-pulse wave-pulse-2"></div>
                              </div>
                              <div className="video-button__two">
                                <div className="video-play">
                                  <span className="video-play-icon"></span>
                                </div>
                              </div>
                            </div>
                            <div className="video-text">How we work</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 me-auto ms-auto col-md-6">
              <div className="business-solution-form-wrap me-auto ms-auto">
                <div className="contact-title text-center section-space--mb_40">
                  <h5 className="mb-10">Book appointment</h5>
                  <p className="text">
                    It's out pleasure to have a chance to cooperate.
                  </p>
                </div>
                <form id="contact-form" action={mail} method="post">
                  {/* <!-- <form id="contact-form" action="https://whizthemes.com/mail-php/jowel/mitech/php/hero-mail.php" method="post"> --> */}
                  <div className="contact-form__two">
                    <div className="contact-inner">
                      <input name="con_name" type="text" placeholder="Name *" />
                    </div>
                    <div className="contact-inner">
                      <input
                        name="con_email"
                        type="email"
                        placeholder="Email *"
                      />
                    </div>
                    <div className="contact-select">
                      <div className="form-item contact-inner">
                        <span className="inquiry">
                          <select id="Visiting" name="Visiting">
                            <option defaultValue="Select Department to email"></option>
                            <option defaultValue="Your inquiry about"></option>
                            <option defaultValue="General Information Request"></option>
                            <option defaultValue="Partner Relations"></option>
                            <option defaultValue="Careers">Careers</option>
                            <option defaultValue="Software Licencing"></option>
                          </select>
                        </span>
                      </div>
                    </div>
                    <div className="comment-submit-btn text-center">
                      <button className="ht-btn ht-btn-md" type="submit">
                        Submit
                      </button>
                      <p className="form-messege"></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--============ Appointment Hero End ============--> */}

      {/* <!--===========  feature-icon-wrapper  Start =============--> */}
      <div className="feature-icon-wrapper section-space--ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-wrap text-center section-space--mb_40">
                <h6 className="section-sub-title mb-20">Industries we Serve</h6>
                <h3 className="heading">
                  Services We Deliver
                  <br /> we provide{" "}
                  <span className="text-color-primary">
                    {" "}
                    truly prominent IT solutions.
                  </span>
                </h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="feature-list__two">
                <div className="row">
                  <div className="col-lg-4 col-md-6 wow move-up">
                    <div className="ht-box-icon style-02 single-svg-icon-box">
                      <div className="icon-box-wrap">
                        <div className="icon">
                          <div
                            className="svg-icon"
                            id="svg-1"
                            data-svg-icon={heart}
                          >
                            <img src={heart} alt="" />
                          </div>
                        </div>
                        <div className="content">
                          <h5 className="heading">IT Design </h5>
                          <div className="text">
                            We provide the most responsive and functional IT
                            design for companies and businesses worldwide.
                          </div>
                          <div className="feature-btn">
                            <a href="/">
                              <span className="button-text">Discover now</span>
                              <i className="far fa-long-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow move-up">
                    <div className="ht-box-icon style-02 single-svg-icon-box">
                      <div className="icon-box-wrap">
                        <div className="icon">
                          <div
                            className="svg-icon"
                            id="svg-2"
                            data-svg-icon={basic}
                          >
                            <img src={basic} alt="" />
                          </div>
                        </div>
                        <div className="content">
                          <h5 className="heading">IT Management</h5>
                          <div className="text">
                            It's possible to simultaneously manage and transform
                            information from one server to another.
                          </div>
                          <div className="feature-btn">
                            <a href="/">
                              <span className="button-text">Discover now</span>
                              <i className="far fa-long-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow move-up">
                    <div className="ht-box-icon style-02 single-svg-icon-box">
                      {/* <!-- ht-box-icon Start --> */}
                      <div className="icon-box-wrap">
                        <div className="icon">
                          <div
                            className="svg-icon"
                            id="svg-3"
                            data-svg-icon={alarm}
                          >
                            <img src={alarm} alt="" />
                          </div>
                        </div>
                        <div className="content">
                          <h5 className="heading">Data Security</h5>
                          <div className="text">
                            We provide the most responsive and functional IT
                            design for companies and businesses worldwide.
                          </div>
                          <div className="feature-btn">
                            <a href="/">
                              <span className="button-text">Discover now</span>
                              <i className="far fa-long-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- ht-box-icon End --> */}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow move-up">
                    <div className="ht-box-icon style-02 single-svg-icon-box">
                      {/* <!-- ht-box-icon Start --> */}
                      <div className="icon-box-wrap">
                        <div className="icon">
                          <div
                            className="svg-icon"
                            id="svg-4"
                            data-svg-icon={geolocalize}
                          >
                            <img src={geolocalize} alt="" />
                          </div>
                        </div>
                        <div className="content">
                          <h5 className="heading">Business Reform</h5>
                          <div className="text">
                            We provide the most responsive and functional IT
                            design for companies and businesses worldwide.
                          </div>
                          <div className="feature-btn">
                            <a href="/">
                              <span className="button-text">Discover now</span>
                              <i className="far fa-long-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- ht-box-icon End --> */}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow move-up">
                    <div className="ht-box-icon style-02 single-svg-icon-box">
                      {/* <!-- ht-box-icon Start --> */}
                      <div className="icon-box-wrap">
                        <div className="icon">
                          <div
                            className="svg-icon"
                            id="svg-5"
                            data-svg-icon={money}
                          >
                            <img src={money} alt="" />
                          </div>
                        </div>
                        <div className="content">
                          <h5 className="heading">Infrastructure Plan</h5>
                          <div className="text">
                            We provide the most responsive and functional IT
                            design for companies and businesses worldwide.
                          </div>
                          <div className="feature-btn">
                            <a href="/">
                              <span className="button-text">Discover now</span>
                              <i className="far fa-long-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- ht-box-icon End --> */}
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow move-up">
                    <div className="ht-box-icon style-02 single-svg-icon-box">
                      {/* <!-- ht-box-icon Start --> */}
                      <div className="icon-box-wrap">
                        <div className="icon">
                          <div
                            className="svg-icon"
                            id="svg-6"
                            data-svg-icon={text}
                          >
                            <img src={text} alt="" />
                          </div>
                        </div>
                        <div className="content">
                          <h5 className="heading">Firewall Advance</h5>
                          <div className="text">
                            We provide the most responsive and functional IT
                            design for companies and businesses worldwide.
                          </div>
                          <div className="feature-btn">
                            <a href="/">
                              <span className="button-text">Discover now</span>
                              <i className="far fa-long-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- ht-box-icon End --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="feature-list-button-box mt-30 text-center">
                <a href="/" className="ht-btn ht-btn-md">
                  Talk to a consultant
                </a>
                <a href="/" className="ht-btn ht-btn-md ht-btn--outline">
                  Contact us now{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--===========  feature-icon-wrapper  End =============--> */}

      {/* <!--======== Tabs Wrapper Start ======== --> */}
      <div className="tabs-wrapper bg-gray section-space--ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-wrapper text-center section-space--mb_60 wow move-up">
                <h6 className="section-sub-title mb-20">
                  discover our company
                </h6>
                <h3 className="section-title">
                  We've been thriving in
                  <span className="text-color-primary"> 38 years</span>{" "}
                </h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 ht-tab-wrap">
              <div className="text-center  ">
                <ul
                  className="nav justify-content-center ht-tab-menu ht-tab-menu_two"
                  role="tablist"
                >
                  <li className="tab__item nav-item active">
                    <a
                      className="nav-link active"
                      id="nav-tab1"
                      data-bs-toggle="tab"
                      href="#tab_list_06"
                      role="tab"
                      aria-selected="true"
                    >
                      Our mission
                    </a>
                  </li>
                  <li className="tab__item nav-item">
                    <a
                      className="nav-link"
                      id="nav-tab2"
                      data-bs-toggle="tab"
                      href="#tab_list_07"
                      role="tab"
                      aria-selected="false"
                    >
                      Our services
                    </a>
                  </li>
                  <li className="tab__item nav-item ">
                    <a
                      className="nav-link"
                      id="nav-tab3"
                      data-bs-toggle="tab"
                      href="#tab_list_08"
                      role="tab"
                      aria-selected="false"
                    >
                      Technology partners
                    </a>
                  </li>
                  <li className="tab__item nav-item ">
                    <a
                      className="nav-link"
                      id="nav-tab5"
                      data-bs-toggle="tab"
                      href="#tab_list_09"
                      role="tab"
                      aria-selected="false"
                    >
                      Our awards
                    </a>
                  </li>
                </ul>
              </div>

              <div className="tab-content ht-tab__content">
                <div
                  className="tab-pane fade show active"
                  id="tab_list_06"
                  role="tabpanel"
                >
                  <div className="tab-history-wrap section-space--mt_40">
                    <div className="row">
                      <div className="col-lg-6 ">
                        <div className="tab-history-image video-popup mt-30">
                          <a
                            href="https://www.youtube.com/watch?v=9No-FiEInLAv"
                            className="video-link"
                          >
                            <div className="single-popup-wrap">
                              <img className="img-fluid" src={home2} alt="" />
                              <div className="ht-popup-video video-button">
                                <div className="video-mark">
                                  <div className="wave-pulse wave-pulse-1"></div>
                                  <div className="wave-pulse wave-pulse-2"></div>
                                </div>
                                <div className="video-button__two">
                                  <div className="video-play">
                                    <span className="video-play-icon"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 offset-lg-1 ">
                        <div className="tab-content-inner  mt-30">
                          <div className="text mb-30">
                            We're available for 8 hours a day! <br />
                            Contact to require a detailed analysis and
                            assessment of your plan.
                          </div>
                          <ul className="check-list section-space--mb_40">
                            <li className="list-item">IT Consultancy </li>
                            <li className="list-item">IT Design </li>
                            <li className="list-item">Desktop Computing </li>
                            <li className="list-item">Software Engineering </li>
                          </ul>

                          <div className="tab-button">
                            <a className="btn-text" href="/">
                              <span className="button-text">
                                Let's get started{" "}
                                <i className="far fa-long-arrow-right"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="tab-pane fade" id="tab_list_07" role="tabpanel">
                  <div className="tab-history-wrap section-space--mt_60">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <!-- ht-box-icon Start -->
                        <a href="/" className="ht-large-box-images style-04">
                          <div className="large-image-box">
                            <div className="box-image">
                              <div className="default-image">
                                <img className="img-fluid" src={box} alt="" />
                              </div>
                            </div>
                            <div className="content">
                              <h5 className="heading">
                                Quality Assurance System
                              </h5>
                              <div className="text">
                                At Mitech, we have a holistic and integrated
                                approach towards core modernization to
                                experience technological evolution.
                              </div>

                              <div className="box-images-arrow">
                                <span className="button-text">
                                  Discover now
                                </span>
                                <i className="far fa-long-arrow-right"></i>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <!-- ht-box-icon End -->
                </div> */}
                {/* <div className="col-lg-4 col-md-6">
                  <!-- ht-box-icon Start -->
                  <a href="/" className="ht-large-box-images style-04">
                    <div className="large-image-box">
                      <div className="box-image">
                        <div className="default-image">
                          <img className="img-fluid" src={info} alt="" />
                        </div>
                      </div>
                      <div className="content">
                        <h5 className="heading">Highly Professional Staffs</h5>
                        <div className="text">
                          Having obtained the official & formal training in IT
                          technology and technical fields, our staffs know best.
                        </div>
                        <div className="box-images-arrow">
                          <span className="button-text">Discover now</span>
                          <i className="far fa-long-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                  <!-- ht-box-icon End -->
                </div>
                <div className="col-lg-4 col-md-6">
                  <!-- ht-box-icon Start -->
                  <a href="/" className="ht-large-box-images">
                    <div className="large-image-box">
                      <div className="box-image">
                        <div className="default-image">
                          <img className="img-fluid" src={info2} alt="" />
                        </div>
                      </div>
                      <div className="content">
                        <h5 className="heading">Info Security Management</h5>
                        <div className="text">
                          At Mitech, we have a holistic and integrated approach
                          towards core modernization to experience technological
                          evolution.
                        </div>
                        <div className="box-images-arrow">
                          <span className="button-text">Discover now</span>
                          <i className="far fa-long-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                  <!-- ht-box-icon End -->
                </div> */}
              </div>
            </div>
          </div>

          {/* <div className="tab-pane fade" id="tab_list_08" role="tabpanel">
            <div className="tab-history-wrap section-space--mt_60 brand-logo-slider__one">
              <div className="modern-grid--6">
                <div className="brand-logo brand-logo--slider">
                  <a href="/">
                    <div className="brand-logo__image">
                      <img src={logo} className="img-fluid" alt="" />
                    </div>
                    <div className="brand-logo__image-hover">
                      <img src={logo2} className="img-fluid" alt="" />
                    </div>
                  </a>
                </div>
                <div className="brand-logo brand-logo--slider">
                  <a href="/">
                    <div className="brand-logo__image">
                      <img src={logo3} className="img-fluid" alt="" />
                    </div>
                    <div className="brand-logo__image-hover">
                      <img src={logo4} className="img-fluid" alt="" />
                    </div>
                  </a>
                </div>
                <div className="brand-logo brand-logo--slider">
                  <a href="/">
                    <div className="brand-logo__image">
                      <img src={logo5} className="img-fluid" alt="" />
                    </div>
                    <div className="brand-logo__image-hover">
                      <img src={logo6} className="img-fluid" alt="" />
                    </div>
                  </a>
                </div>
                <div className="brand-logo brand-logo--slider">
                  <a href="/">
                    <div className="brand-logo__image">
                      <img src={logo7} className="img-fluid" alt="" />
                    </div>
                    <div className="brand-logo__image-hover">
                      <img src={logo8} className="img-fluid" alt="" />
                    </div>
                  </a>
                </div>
                <div className="brand-logo brand-logo--slider">
                  <a href="/">
                    <div className="brand-logo__image">
                      <img src={logo9} className="img-fluid" alt="" />
                    </div>
                    <div className="brand-logo__image-hover">
                      <img src={logo10} className="img-fluid" alt="" />
                    </div>
                  </a>
                </div>
                <div className="brand-logo brand-logo--slider">
                  <a href="/">
                    <div className="brand-logo__image">
                      <img src={logo11} className="img-fluid" alt="" />
                    </div>
                    <div className="brand-logo__image-hover">
                      <img src={logo12} className="img-fluid" alt="" />
                    </div>
                  </a>
                </div>
                <div className="brand-logo brand-logo--slider">
                  <a href="/">
                    <div className="brand-logo__image">
                      <img src={logo13} className="img-fluid" alt="" />
                    </div>
                    <div className="brand-logo__image-hover">
                      <img src={logo14} className="img-fluid" alt="" />
                    </div>
                  </a>
                </div>
                <div className="brand-logo brand-logo--slider">
                  <a href="/">
                    <div className="brand-logo__image">
                      <img src={logo15} className="img-fluid" alt="" />
                    </div>
                    <div className="brand-logo__image-hover">
                      <img src={logo16} className="img-fluid" alt="" />
                    </div>
                  </a>
                </div>
                <div className="brand-logo brand-logo--slider">
                  <a href="/">
                    <div className="brand-logo__image">
                      <img src={logo17} className="img-fluid" alt="" />
                    </div>
                    <div className="brand-logo__image-hover">
                      <img src={logo18} className="img-fluid" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="tab-pane fade" id="tab_list_09" role="tabpanel">
            <div className="tab-history-wrap section-space--mt_20">
              <div className="row">
                <div className="col-lg-6">
                  <div className="ht-box-images style-08 move-up animate">
                    <div className="image-box-wrap">
                      <div className="box-image">
                        <div className="image">
                          <img src={award} alt="" />
                        </div>
                      </div>
                      <div className="content">
                        <h6 className="heading">
                          {" "}
                          Top Training Companies 2016{" "}
                        </h6>
                        <div className="text">
                          More than 40 years ago, our company's namesake,
                          LineThemes, pioneered a revolutionary sales training
                          program for businesses of every size.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="ht-box-images style-08 move-up animate">
                    <div className="image-box-wrap">
                      <div className="box-image">
                        <div className="image">
                          <img src={award2} alt="" />
                        </div>
                      </div>
                      <div className="content">
                        <h6 className="heading">CIO Big Data 100 </h6>
                        <div className="text">
                          More than 40 years ago, our company's namesake,
                          LineThemes, pioneered a revolutionary sales training
                          program for businesses of every size.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="ht-box-images style-08 move-up animate">
                    <div className="image-box-wrap">
                      <div className="box-image">
                        <div className="image">
                          <img src={award3} alt="" />
                        </div>
                      </div>
                      <div className="content">
                        <h6 className="heading">
                          Top 20 Sales Training Companies 2015{" "}
                        </h6>
                        <div className="text">
                          More than 40 years ago, our company's namesake,
                          LineThemes, pioneered a revolutionary sales training
                          program for businesses of every size.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="ht-box-images style-08 move-up animate">
                    <div className="image-box-wrap">
                      <div className="box-image">
                        <div className="image">
                          <img src={award4} alt="" />
                        </div>
                      </div>
                      <div className="content">
                        <h6 className="heading">Pharma Tech Outlook </h6>
                        <div className="text">
                          More than 40 years ago, our company's namesake,
                          LineThemes, pioneered a revolutionary sales training
                          program for businesses of every size.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <!--======== Tabs Wrapper End ======== --> */}

      {/* <!-- ============ Team Member Wrapper Start =============== --> */}
      <div className="team-member-wrapper section-space--pt_100 section-space--pb_40">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-title section-space--mb_60">
                <h3 className="heading">
                  Our <span className="text-color-primary">experience </span>{" "}
                  experts
                </h3>
                <p className="text mt-30">
                  Mitech specializes in technological and IT-related services
                  such as product engineering, warranty management, building
                  cloud, infrastructure, network, etc.{" "}
                </p>

                <div className="sider-title-button-box mt-30">
                  <a href="/" className="ht-btn ht-btn-md">
                    Join us now
                  </a>
                  <a
                    href="/"
                    className="btn-text font-weight--bold small-mt__20"
                  >
                    View all team{" "}
                    <i className="ml-1 button-icon far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 ht-team-member-style-one">
              <div className="row">
                <div className="col-lg-6 col-md-6 wow move-up">
                  <div className="grid-item">
                    <div className="ht-team-member">
                      <div className="team-image">
                        <img className="img-fluid" src={member} alt="" />
                        <div className="social-networks">
                          <div className="inner">
                            <a
                              target="_blank"
                              href="/"
                              className="hint--bounce  hint--top hint--theme-two"
                              aria-label="Facebook"
                            >
                              <i className="fab fa-facebook"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              className=" hint--bounce hint--top hint--theme-two"
                              aria-label="Twitter"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              className=" hint--bounce hint--top hint--theme-two"
                              aria-label="Instagram"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="team-info ">
                        <h5 className="name">Dollie Horton </h5>
                        <div className="position">Marketing</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 wow move-up">
                  <div className="grid-item">
                    <div className="ht-team-member">
                      <div className="team-image">
                        <img className="img-fluid" src={member2} alt="" />
                        <div className="social-networks">
                          <div className="inner">
                            <a
                              target="_blank"
                              href="/"
                              className=" hint--bounce  hint--top hint--theme-two"
                              aria-label="Facebook"
                            >
                              <i className="fab fa-facebook"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              className=" hint--bounce hint--top hint--theme-two"
                              aria-label="Twitter"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              className=" hint--bounce hint--top hint--theme-two"
                              aria-label="Instagram"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="team-info ">
                        <h5 className="name">Stephen Mearsley </h5>
                        <div className="position">President & CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 wow move-up">
                  <div className="grid-item">
                    <div className="ht-team-member">
                      <div className="team-image">
                        <img className="img-fluid" src={member3} alt="" />
                        <div className="social-networks">
                          <div className="inner">
                            <a
                              target="_blank"
                              href="/"
                              className=" hint--bounce  hint--top hint--theme-two"
                              aria-label="Facebook"
                            >
                              <i className="fab fa-facebook"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              className=" hint--bounce hint--top hint--theme-two"
                              aria-label="Twitter"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              className=" hint--bounce hint--top hint--theme-two"
                              aria-label="Instagram"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="team-info ">
                        <h5 className="name">Maggie Strickland </h5>
                        <div className="position">Financial Services</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 wow move-up">
                  <div className="grid-item">
                    <div className="ht-team-member">
                      <div className="team-image">
                        <img className="img-fluid" src={member4} alt="" />
                        <div className="social-networks">
                          <div className="inner">
                            <a
                              target="_blan/"
                              href="/"
                              className=" hint--bounce  hint--top hint--theme-two"
                              aria-label="Facebook"
                            >
                              <i className="fab fa-facebook"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              className=" hint--bounce hint--top hint--theme-two"
                              aria-label="Twitter"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              className=" hint--bounce hint--top hint--theme-two"
                              aria-label="Instagram"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="team-info ">
                        <h5 className="name">Monica Blews</h5>
                        <div className="position">Project manager</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ============ Team Member Wrapper End =============== --> */}

      {/* <!--========== Call to Action Area Start ============--> */}
      <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-7">
              <div className="cta-content md-text-center">
                <h3 className="heading">
                  We run all kinds of IT services that vow your{" "}
                  <span className="text-color-primary"> success</span>
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="cta-button-group--two text-center">
                <a href="/" className="btn btn--white btn-one">
                  <span className="btn-icon me-2">
                    <i className="far fa-comment-alt-dots"></i>
                  </span>{" "}
                  Let's talk
                </a>
                <a href="/" className="btn btn--secondary btn-two ">
                  <span className="btn-icon me-2">
                    <i className="far fa-info-circle"></i>
                  </span>{" "}
                  Get info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--========== Call to Action Area End ============--> */}

      {/* <!--===========  Projects wrapper Start =============--> */}
      <div className="projects-wrapper projectinfotechno-bg section-space--ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <!-- section-title-wrap Start --> */}
              <div className="section-title-wrap text-center section-space--mb_40">
                <h6 className="section-sub-title mb-20">Case studies</h6>
                <h3 className="heading">
                  Proud projects{" "}
                  <span className="text-color-primary"> make us excel</span>
                </h3>
              </div>
              {/* <!-- section-title-wrap Start --> */}
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="projects-wrap swiper-container projects-slider__container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    {/* <!-- Projects Wrap Start --> */}
                    <a href="/" className="projects-wrap style-01 wow move-up">
                      <div className="projects-image-box">
                        <div className="projects-image">
                          <img className="img-fluid" src={study} alt="" />
                        </div>
                        <div className="content">
                          <h6 className="heading">Mitech-Smart Vision</h6>
                          <div className="post-categories">Cyber Security</div>
                          <div className="text">
                            At Mitech, we have a holistic and integrated
                            approach towards core modernization to experience
                            technological evolution.
                          </div>
                          <div className="box-projects-arrow">
                            <span className="button-text">View case study</span>
                            <i className="fa fa-long-arrow-right ml-1"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* <!-- Projects Wrap End --> */}
                  </div>

                  <div className="swiper-slide">
                    {/* <!-- Projects Wrap Start --> */}
                    <a href="/" className="projects-wrap style-01 wow move-up">
                      <div className="projects-image-box">
                        <div className="projects-image">
                          <img className="img-fluid" src={study2} alt="" />
                        </div>
                        <div className="content">
                          <h6 className="heading">Arden-Internal Networking</h6>
                          <div className="post-categories">Cyber Security</div>
                          <div className="text">
                            The prospects for a company operating in this new
                            market are varied and exciting. The potential …
                          </div>
                          <div className="box-projects-arrow">
                            <span className="button-text">View case study</span>
                            <i className="fa fa-long-arrow-right ml-1"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* <!-- Projects Wrap End --> */}
                  </div>

                  <div className="swiper-slide">
                    {/* <!-- Projects Wrap Start --> */}
                    <a href="/" className="projects-wrap style-01 wow move-up">
                      <div className="projects-image-box">
                        <div className="projects-image">
                          <img className="img-fluid" src={study3} alt="" />
                        </div>
                        <div className="content">
                          <h6 className="heading">A Freeserve case study</h6>
                          <div className="post-categories">Cyber Security</div>
                          <div className="text">
                            The prospects for a company operating in this new
                            market are varied and exciting. The potential …
                          </div>
                          <div className="box-projects-arrow">
                            <span className="button-text">View case study</span>
                            <i className="fa fa-long-arrow-right ml-1"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* <!-- Projects Wrap End --> */}
                  </div>

                  <div className="swiper-slide">
                    {/* <!-- Projects Wrap Start --> */}
                    <div>
                      <a
                        href="/"
                        className="projects-wrap style-01 wow move-up"
                      >
                        <div className="projects-image-box">
                          <div className="projects-image">
                            <img className="img-fluid" src={study4} alt="" />
                          </div>
                          <div className="content">
                            <h6 className="heading">
                              Aqua - Research and Energy
                            </h6>
                            <div className="post-categories">
                              Cyber Security
                            </div>
                            <div className="text">
                              The prospects for a company operating in this new
                              market are varied and exciting. The potential …
                            </div>
                            <div className="box-projects-arrow">
                              <span className="button-text">
                                View case study
                              </span>
                              <i className="fa fa-long-arrow-right ml-1"></i>
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* <!-- Projects Wrap End --> */}
                    </div>
                  </div>
                  <div className="swiper-pagination swiper-pagination-project mt_20"></div>
                </div>

                <div className="section-under-heading text-center section-space--mt_40">
                  Challenges are just opportunities in disguise.{" "}
                  <a href="/">Take the challenge!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--===========  Projects wrapper End =============--> */}

        {/* <!--====================  testimonial section ====================--> */}
        <div className="testimonial-slider-area bg-gray section-space--ptb_100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-wrap text-center section-space--mb_40">
                  <h6 className="section-sub-title mb-20">Testimonials</h6>
                  <h3 className="heading">
                    What do people praise about{" "}
                    <span className="text-color-primary"> Mitech?</span>
                  </h3>
                </div>
                <div className="testimonial-slider">
                  <div className="swiper-container testimonial-slider__container">
                    <div className="swiper-wrapper testimonial-slider__wrapper">
                      <div className="swiper-slide">
                        <div className="testimonial-slider__one wow move-up">
                          <div className="testimonial-slider--info">
                            <div className="testimonial-slider__media">
                              <img
                                src={testimonial}
                                className="img-fluid"
                                alt=""
                              />
                            </div>

                            <div className="testimonial-slider__author">
                              <div className="testimonial-rating">
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                              </div>
                              <div className="author-info">
                                <h6 className="name">Abbie Ferguson</h6>
                                <span className="designation">Marketing</span>
                              </div>
                            </div>
                          </div>

                          <div className="testimonial-slider__text">
                            I've been working with over 35 IT companies on more
                            than 200 projects of our company, but @Mitech is one
                            of the most impressive to me.
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial-slider__one wow move-up">
                          <div className="testimonial-slider--info">
                            <div className="testimonial-slider__media">
                              <img
                                src={testimonial2}
                                className="img-fluid"
                                alt=""
                              />
                            </div>

                            <div className="testimonial-slider__author">
                              <div className="testimonial-rating">
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                              </div>
                              <div className="author-info">
                                <h6 className="name">Monica Blews</h6>
                                <span className="designation">
                                  Web designer
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="testimonial-slider__text">
                            I've been working with over 35 IT companies on more
                            than 200 projects of our company, but @Mitech is one
                            of the most impressive to me.
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial-slider__one wow move-up">
                          <div className="testimonial-slider--info">
                            <div className="testimonial-slider__media">
                              <img
                                src={testimonial3}
                                className="img-fluid"
                                alt=""
                              />
                            </div>

                            <div className="testimonial-slider__author">
                              <div className="testimonial-rating">
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                              </div>
                              <div className="author-info">
                                <h6 className="name">Abbie Ferguson</h6>
                                <span className="designation">
                                  WEB DESIGNER
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="testimonial-slider__text">
                            I've been working with over 35 IT companies on more
                            than 200 projects of our company, but @Mitech is one
                            of the most impressive to me.
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial-slider__one wow move-up">
                          <div className="testimonial-slider--info">
                            <div className="testimonial-slider__media">
                              <img
                                src={testimonial4}
                                className="img-fluid"
                                alt=""
                              />
                            </div>

                            <div className="testimonial-slider__author">
                              <div className="testimonial-rating">
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                              </div>
                              <div className="author-info">
                                <h6 className="name">Abbie Ferguson</h6>
                                <span className="designation">
                                  WEB DESIGNER
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="testimonial-slider__text">
                            I've been working with over 35 IT companies on more
                            than 200 projects of our company, but @Mitech is one
                            of the most impressive to me.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination swiper-pagination-t01 section-space--mt_30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--====================  End of testimonial section  ====================--> */}

        {/* <!--=========== fun fact Wrapper Start ==========--> */}
        <div className="fun-fact-wrapper bg-theme-default section-space--pb_30 section-space--pt_60">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 wow move-up">
                <div className="fun-fact--two text-center">
                  <div className="fun-fact__count counter">120</div>
                  <h6 className="fun-fact__text">Happy clients</h6>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 wow move-up">
                <div className="fun-fact--two text-center">
                  <div className="fun-fact__count counter">32</div>
                  <h6 className="fun-fact__text">Finished projects</h6>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 wow move-up">
                <div className="fun-fact--two text-center">
                  <div className="fun-fact__count counter">73</div>
                  <h6 className="fun-fact__text">Skilled Experts</h6>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 wow move-up">
                <div className="fun-fact--two text-center">
                  <div className="fun-fact__count counter">318</div>
                  <h6 className="fun-fact__text">Media Posts</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--=========== fun fact Wrapper End ==========--> */}

        {/* <!--============ Contact Us Area Start =================--> */}
        <div className="contact-us-area appointment-contact-bg section-space--ptb_100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-title section-space--mb_50">
                  <h3 className="mb-20">Need a hand?</h3>
                  <p className="sub-title">
                    Reach out to the world's most reliable IT services.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-form-wrap">
                  {/* <!-- <forv className="contact-form" id="contact-form-2" action="https://whizthemes.com/mail-php/jowel/mitech/php/services-mail.php" method="post"> --> */}
                  <form
                    className="contact-form"
                    id="contact-form-2"
                    action={services}
                    method="post"
                  >
                    <div className="contact-form__two">
                      <div className="contact-input">
                        <div className="contact-inner">
                          <input
                            name="con_name"
                            type="text"
                            placeholder="Name *"
                          />
                        </div>
                        <div className="contact-inner">
                          <input
                            name="con_email"
                            type="email"
                            placeholder="Email *"
                          />
                        </div>
                      </div>
                      <div className="contact-select">
                        <div className="form-item contact-inner">
                          <span className="inquiry">
                            <select id="Visiting" name="Visiting">
                              <option defaultValue="Select Department to email"></option>
                              <option defaultValue="Your inquiry about"></option>
                              <option defaultValue="General Information Request"></option>
                              <option defaultValue="Partner Relations"></option>
                              <option defaultValue="Careers">Careers</option>
                              <option defaultValue="Software Licencing"></option>
                            </select>
                          </span>
                        </div>
                      </div>
                      <div className="contact-inner contact-message">
                        <textarea
                          name="con_message"
                          placeholder="Please describe what you need."
                        ></textarea>
                      </div>
                      <div className="comment-submit-btn">
                        <button className="ht-btn ht-btn-md" type="submit">
                          Get a free consultation
                        </button>
                        <p className="form-messege-2"></p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-5 ms-auto">
                <div className="contact-info-three text-left">
                  <h6 className="heading font-weight--reguler">
                    Reach out now!
                  </h6>
                  <h3 className="call-us">
                    <a href="/">(+00) 123 567990</a>
                  </h3>
                  <div className="text">
                    Start the collaboration with us while figuring out the best
                    solution based on your needs.
                  </div>
                  <div className="location-button mt-20">
                    <div>
                      <a href="/" className="location-text-button">
                        <span className="button-icon"></span>{" "}
                        <span className="button-text">View on Google map</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--============ Contact Us Area End =================--> */}
      </div>
    </div>
  );
};
