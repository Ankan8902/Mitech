import React from "react";

import image from "../assets/images/icons/mitech-box-image-style-05-image-01-60x60.webp";
import image2 from "../assets/images/icons/mitech-box-image-style-05-image-02-60x60.webp";
import image3 from "../assets/images/icons/mitech-box-image-style-05-image-03-60x60.webp";
import image4 from "../assets/images/icons/mitech-box-image-style-05-image-04-60x60.webp";
import image5 from "../assets/images/icons/mitech-box-image-style-05-image-05-60x60.webp";
import image6 from "../assets/images/icons/mitech-box-image-style-05-image-06-60x60.webp";
import image7 from "../assets/images/hero/about-2.jpg";
import image8 from "../assets/images/hero/logo-1.jpg";
import image9 from "../assets/images/hero/digital.jpg";

const Digital = () => {
  return (
    <>
      <div id="main-wrapper">
        <div class="site-wrapper-reveal">
          <div class="bg-white">
            <div
              class="about-banner-wrap banner-space bg-img"
              data-bg="assets/images/bg/business-solution-hero-bg.webp"
              style={{ backgroundImage: `url(${image9})` }}
            >
              <div class="container">
                <div class="row">
                  <div class="col-lg-8 m-auto">
                    <div class="about-banner-content text-center">
                      <h1 class="mb-15 text-white">Digital Marketing</h1>
                      <h5 class="font-weight--normal text-white">
                        Reach out to the world's most reliable IT services.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--===========  feature-large-images-wrapper  Start =============--> */}
            <div class="feature-large-images-wrapper section-space--ptb_100">
              <div class="container">
                <div class="cybersecurity-about-box">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="conact-us-wrap-one managed-it">
                        <h5 class="heading ">
                          Mitech specializes in{" "}
                          <span class="text-color-primary">
                            {" "}
                            technological and IT-related services
                          </span>{" "}
                          such as product engineering, warranty management,
                          building cloud, infrastructure, network, etc.{" "}
                        </h5>
                      </div>
                    </div>
                    <div class="col-lg-7 offset-lg-1">
                      <div class="cybersecurity-about-text">
                        <div class="text">
                          The IT services that Mitech are running can be
                          segmented by the type of skills employed to deliver
                          the service (design, build, run). Technically, these
                          fall into three main categories: business process
                          services, application services, and infrastructure
                          services.
                        </div>
                        <div class="button-group-wrap">
                          <a href="/" class="ht-btn ht-btn-md me-md-3 mb-20">
                            Get a FREE no-obligation quote
                          </a>
                          <a href="/" class="ht-btn ht-btn-md ht-btn--solid">
                            Live chat with a consultant
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--===========  feature-large-images-wrapper  End =============--> */}

            {/* <!--===========  feature-images-wrapper  Start =============--> */}
            <div class="feature-images-wrapper bg-gray section-space--ptb_100">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    {/* <!-- section-title-wrap Start --> */}
                    <div class="section-title-wrap text-center section-space--mb_30">
                      <h3 class="heading">
                        Reliable IT Services for{" "}
                        <span class="text-color-primary"> Businesses</span>
                      </h3>
                    </div>
                    {/* <!-- section-title-wrap Start --> */}
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <div class="feature-images__four">
                      <div class=" row">
                        <div class="single-item col-lg-4 col-md-6 mt-30 wow move-up">
                          {/* <!-- ht-box-icon Start --> */}
                          <a href="/" class="ht-box-images style-04">
                            <div class="image-box-wrap">
                              <div class="box-image">
                                <img class="img-fulid" src={image} alt="" />
                              </div>
                              <div class="content">
                                <h5 class="heading">IT Design</h5>
                                <div class="text">
                                  We provide the most responsive and functional
                                  IT design for companies and businesses
                                  worldwide.
                                </div>
                              </div>
                            </div>
                          </a>
                          {/* <!-- ht-box-icon End --> */}
                        </div>
                        <div class="single-item col-lg-4 col-md-6 mt-30 wow move-up">
                          {/* <!-- ht-box-icon Start --> */}
                          <a href="/" class="ht-box-images style-04">
                            <div class="image-box-wrap">
                              <div class="box-image">
                                <img class="img-fulid" src={image2} alt="" />
                              </div>
                              <div class="content">
                                <h5 class="heading">IT Management </h5>
                                <div class="text">
                                  It's possible to simultaneously manage and
                                  transform information from one server to
                                  another.
                                </div>
                              </div>
                            </div>
                          </a>
                          {/* <!-- ht-box-icon End --> */}
                        </div>
                        <div class="single-item col-lg-4 col-md-6 mt-30 wow move-up">
                          {/* <!-- ht-box-icon Start --> */}
                          <a href="/" class="ht-box-images style-04">
                            <div class="image-box-wrap">
                              <div class="box-image">
                                <img class="img-fulid" src={image3} alt="" />
                              </div>
                              <div class="content">
                                <h5 class="heading">Data Security</h5>
                                <div class="text">
                                  Back up your database, store in a safe and
                                  secure place while still maintaining its
                                  accessibility.
                                </div>
                              </div>
                            </div>
                          </a>
                          {/* <!-- ht-box-icon End --> */}
                        </div>
                        <div class="single-item col-lg-4 col-md-6 mt-30 wow move-up">
                          {/* <!-- ht-box-icon Start --> */}
                          <a href="/" class="ht-box-images style-04">
                            <div class="image-box-wrap">
                              <div class="box-image">
                                <img class="img-fulid" src={image4} alt="" />
                              </div>
                              <div class="content">
                                <h5 class="heading">Workforce Management</h5>
                                <div class="text">
                                  Suspe ndisse suscipit sagittis leo sit met
                                  condime ntum esti laiolainx bulum iscipit
                                  sagittis leo sit met con ndisse suscipit
                                  sagittis leo sit met cone su
                                </div>
                              </div>
                            </div>
                          </a>
                          {/* <!-- ht-box-icon End --> */}
                        </div>
                        <div class="single-item col-lg-4 col-md-6 mt-30 wow move-up">
                          {/* <!-- ht-box-icon Start --> */}
                          <a href="/" class="ht-box-images style-04">
                            <div class="image-box-wrap">
                              <div class="box-image">
                                <img class="img-fulid" src={image5} alt="" />
                              </div>
                              <div class="content">
                                <h5 class="heading">Business Reform</h5>
                                <div class="text">
                                  We provide the most responsive and functional
                                  IT design for companies and businesses
                                  worldwide.
                                </div>
                              </div>
                            </div>
                          </a>
                          {/* <!-- ht-box-icon End --> */}
                        </div>
                        <div class="single-item col-lg-4 col-md-6 mt-30 wow move-up">
                          {/* <!-- ht-box-icon Start --> */}
                          <a href="/" class="ht-box-images style-04">
                            <div class="image-box-wrap">
                              <div class="box-image">
                                <img class="img-fulid" src={image6} alt="" />
                              </div>
                              <div class="content">
                                <h5 class="heading">Infrastructure Plan</h5>
                                <div class="text">
                                  Mitech takes into account all conditions and
                                  budgets needed for building infrastructure
                                  plan..
                                </div>
                              </div>
                            </div>
                          </a>
                          {/* <!-- ht-box-icon End --> */}
                        </div>
                      </div>
                    </div>

                    <div class="section-under-heading text-center section-space--mt_60">
                      Challenges are just opportunities in disguise.{" "}
                      <a href="/">Take the challenge!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--===========  feature-images-wrapper  End =============--> */}

            {/* <!--========= About Delivering Wrapper Start ===========--> */}
            <div class="about-delivering-wrapper section-space--ptb_100">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="section-title-wrap text-center section-space--mb_20">
                      <h3 class="heading">Business IT Support Features</h3>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="delivering-optimal-wrap">
                      <div class="list-item">
                        <div class="marker"></div>
                        <div class="title-wrap">
                          <h5 class="title">IT Design </h5>
                          <div class="desc">
                            We provide the most responsive and functional IT
                            design for companies and businesses worldwide.{" "}
                          </div>
                        </div>
                      </div>
                      <div class="list-item">
                        <div class="marker"></div>
                        <div class="title-wrap">
                          <h5 class="title"> Data Security </h5>
                          <div class="desc">
                            Back up your database, store in a safe and secure
                            place while still maintaining its accessibility.{" "}
                          </div>
                        </div>
                      </div>
                      <div class="list-item">
                        <div class="marker"></div>
                        <div class="title-wrap">
                          <h5 class="title">Infrastructure Plan </h5>
                          <div class="desc">
                            Mitech takes into account all conditions and budgets
                            needed for building infrastructure plan.{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="delivering-optimal-wrap">
                      <div class="list-item">
                        <div class="marker"></div>
                        <div class="title-wrap">
                          <h5 class="title">IT Management </h5>
                          <div class="desc">
                            It's possible to simultaneously manage and transform
                            key information from one server to another.{" "}
                          </div>
                        </div>
                      </div>
                      <div class="list-item">
                        <div class="marker"></div>
                        <div class="title-wrap">
                          <h5 class="title">Business Reform</h5>
                          <div class="desc">
                            We propose feasible & practical plans for
                            successfully transform businesses based on their
                            needs.{" "}
                          </div>
                        </div>
                      </div>
                      <div class="list-item">
                        <div class="marker"></div>
                        <div class="title-wrap">
                          <h5 class="title">Firewall Advancement </h5>
                          <div class="desc">
                            Enhancing the strength and security of firewalls to
                            protect online data from malicious sources.{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--========= About Resources Wrapper Start ===========--> */}
            <div class="about-resources-wrapper">
              <div class="container-fluid">
                <div class="row align-items-center">
                  <div class="col-lg-6 order-2 order-lg-1">
                    <div class="resources-left-box">
                      <div class="resources-inner">
                        <h6 class="sub-title mb-20">Resources</h6>
                        <h3 class="heading">
                          Get a copy of brochure on{" "}
                          <span class="text-color-primary">
                            {" "}
                            Brand New IT Tech.
                          </span>
                        </h3>
                        <div class="button mt-30">
                          <a href="/" class="ht-btn ht-btn-md">
                            Download now (3MB)
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 order-1 order-lg-2">
                    <div class="resources-right-box">
                      <div class="resources-right-inner text-center">
                        <div class="resources-images">
                          <img class="img-fluid" src={image7} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--========= About Resources Wrapper End ===========--> */}
            {/* <!--====================  testimonial section ====================--> */}
            <div class="testimonial-slider-area section-space--pt_100">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="section-title-wrap text-center section-space--mb_40">
                      <h6 class="section-sub-title mb-20">Testimonials</h6>
                      <h3 class="heading">
                        What do people praise about{" "}
                        <span class="text-color-primary"> Mitech?</span>
                      </h3>
                    </div>
                    <div class="testimonial-slider">
                      <div class="swiper-container testimonial-slider__container">
                        <div class="swiper-wrapper testimonial-slider__wrapper">
                          <div class="swiper-slide">
                            <div class="testimonial-slider__one wow move-up">
                              <div class="testimonial-slider--info">
                                <div class="testimonial-slider__media">
                                  <img src={image8} class="img-fluid" alt="" />
                                </div>

                                <div class="testimonial-slider__author">
                                  <div class="testimonial-rating">
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                  </div>
                                  <div class="author-info">
                                    <h6 class="name">Abbie Ferguson</h6>
                                    <span class="designation">Marketing</span>
                                  </div>
                                </div>
                              </div>

                              <div class="testimonial-slider__text">
                                I've been working with over 35 IT companies on
                                more than 200 projects of our company, but
                                @Mitech is one of the most impressive to me.
                              </div>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="testimonial-slider__one wow move-up">
                              <div class="testimonial-slider--info">
                                <div class="testimonial-slider__media">
                                  <img
                                    src="assets/images/testimonial/mitech-testimonial-avata-03-90x90.webp"
                                    class="img-fluid"
                                    alt=""
                                  />
                                </div>

                                <div class="testimonial-slider__author">
                                  <div class="testimonial-rating">
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                  </div>
                                  <div class="author-info">
                                    <h6 class="name">Monica Blews</h6>
                                    <span class="designation">
                                      Web designer
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div class="testimonial-slider__text">
                                I've been working with over 35 IT companies on
                                more than 200 projects of our company, but
                                @Mitech is one of the most impressive to me.
                              </div>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="testimonial-slider__one wow move-up">
                              <div class="testimonial-slider--info">
                                <div class="testimonial-slider__media">
                                  <img
                                    src="assets/images/testimonial/mitech-testimonial-avata-04-90x90.webp"
                                    class="img-fluid"
                                    alt=""
                                  />
                                </div>

                                <div class="testimonial-slider__author">
                                  <div class="testimonial-rating">
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                  </div>
                                  <div class="author-info">
                                    <h6 class="name">Abbie Ferguson</h6>
                                    <span class="designation">
                                      WEB DESIGNER
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div class="testimonial-slider__text">
                                I've been working with over 35 IT companies on
                                more than 200 projects of our company, but
                                @Mitech is one of the most impressive to me.
                              </div>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="testimonial-slider__one wow move-up">
                              <div class="testimonial-slider--info">
                                <div class="testimonial-slider__media">
                                  <img
                                    src="assets/images/testimonial/mitech-testimonial-avata-01-90x90.webp"
                                    class="img-fluid"
                                    alt=""
                                  />
                                </div>

                                <div class="testimonial-slider__author">
                                  <div class="testimonial-rating">
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                  </div>
                                  <div class="author-info">
                                    <h6 class="name">Abbie Ferguson</h6>
                                    <span class="designation">
                                      WEB DESIGNER
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div class="testimonial-slider__text">
                                I've been working with over 35 IT companies on
                                more than 200 projects of our company, but
                                @Mitech is one of the most impressive to me.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="swiper-pagination swiper-pagination-t01 section-space--mt_30"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--====================  End of testimonial section  ====================--> */}

            {/* <!--====================  brand logo slider area ====================--> */}
            <div class="brand-logo-slider-area section-space--ptb_60">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    {/* <!-- brand logo slider --> */}
                    <div class="brand-logo-slider__container-area">
                      <div class="swiper-container brand-logo-slider__container">
                        <div class="swiper-wrapper brand-logo-slider__one">
                          <div class="swiper-slide brand-logo brand-logo--slider">
                            <a href="/">
                              <div class="brand-logo__image">
                                <img
                                  src="assets/images/brand/mitech-client-logo-01.webp"
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div class="brand-logo__image-hover">
                                <img
                                  src="assets/images/brand/mitech-client-logo-01-hover.webp"
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                          <div class="swiper-slide brand-logo brand-logo--slider">
                            <a href="/">
                              <div class="brand-logo__image">
                                <img
                                  src="assets/images/brand/mitech-client-logo-02.webp"
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div class="brand-logo__image-hover">
                                <img
                                  src="assets/images/brand/mitech-client-logo-02-hover.webp"
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                          <div class="swiper-slide brand-logo brand-logo--slider">
                            <a href="/">
                              <div class="brand-logo__image">
                                <img
                                  src="assets/images/brand/mitech-client-logo-03.webp"
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div class="brand-logo__image-hover">
                                <img
                                  src="assets/images/brand/mitech-client-logo-03-hover.webp"
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                          <div class="swiper-slide brand-logo brand-logo--slider">
                            <a href="/">
                              <div class="brand-logo__image">
                                <img
                                  src="assets/images/brand/mitech-client-logo-04.webp"
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div class="brand-logo__image-hover">
                                <img
                                  src="assets/images/brand/mitech-client-logo-04-hover.webp"
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                          <div class="swiper-slide brand-logo brand-logo--slider">
                            <a href="/">
                              <div class="brand-logo__image">
                                <img
                                  src="assets/images/brand/mitech-client-logo-05.webp"
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div class="brand-logo__image-hover">
                                <img
                                  src="assets/images/brand/mitech-client-logo-05-hover.webp"
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                          <div class="swiper-slide brand-logo brand-logo--slider">
                            <a href="/">
                              <div class="brand-logo__image">
                                <img
                                  src="assets/images/brand/mitech-client-logo-06.webp"
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div class="brand-logo__image-hover">
                                <img
                                  src="assets/images/brand/mitech-client-logo-06-hover.webp"
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                          <div class="swiper-slide brand-logo brand-logo--slider">
                            <a href="/">
                              <div class="brand-logo__image">
                                <img
                                  src="assets/images/brand/mitech-client-logo-07.webp"
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div class="brand-logo__image-hover">
                                <img
                                  src="assets/images/brand/mitech-client-logo-07-hover.webp"
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                          <div class="swiper-slide brand-logo brand-logo--slider">
                            <a href="/">
                              <div class="brand-logo__image">
                                <img
                                  src="assets/images/brand/mitech-client-logo-08.webp"
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div class="brand-logo__image-hover">
                                <img
                                  src="assets/images/brand/mitech-client-logo-08-hover.webp"
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                          <div class="swiper-slide brand-logo brand-logo--slider">
                            <a href="/">
                              <div class="brand-logo__image">
                                <img
                                  src="assets/images/brand/mitech-client-logo-09.webp"
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div class="brand-logo__image-hover">
                                <img
                                  src="assets/images/brand/mitech-client-logo-09-hover.webp"
                                  class="img-fluid"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--====================  End of brand logo slider area  ====================--> */}
            {/* <!--============ Contact Us Area Start =================--> */}
            <div class="contact-us-area service-contact-bg section-space--ptb_100">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-lg-4 me-auto">
                    <div class="contact-info sytle-one text-left">
                      <div class="contact-info-title-wrap text-center">
                        <h3 class="heading text-white mb-10">4.9/5.0</h3>
                        <div class="ht-star-rating lg-style">
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                        </div>
                        <p class="sub-text">
                          by 700+ customers for 3200+ clients
                        </p>
                      </div>

                      <div class="contact-list-item">
                        <a href="tel:190068668" class="single-contact-list">
                          <div class="content-wrap">
                            <div class="content">
                              <div class="icon">
                                <span class="fal fa-phone"></span>
                              </div>
                              <div class="main-content">
                                <h6 class="heading">Call for advice now!</h6>
                                <div class="text">1900 68668</div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a
                          href="mailto:hello@mitech.com"
                          class="single-contact-list"
                        >
                          <div class="content-wrap">
                            <div class="content">
                              <div class="icon">
                                <span class="fal fa-envelope"></span>
                              </div>
                              <div class="main-content">
                                <h6 class="heading">Say hello</h6>
                                <div class="text">hello@mitech.com</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-5 me-auto ms-auto">
                    <div class="business-solution-form-wrap">
                      <div class="contact-title text-center section-space--mb_40">
                        <h5 class="mb-10">Book appointment</h5>
                        <p class="text">
                          It's out pleasure to have a chance to cooperate.
                        </p>
                      </div>

                      {/* <!-- <form id="contact-form" action="https://whizthemes.com/mail-php/jowel/mitech/php/hero-mail.php" method="post"> --> */}
                      <form
                        id="contact-form"
                        action="assets/php/hero-mail.php"
                        method="post"
                      >
                        <div class="contact-form__two">
                          <div class="contact-input">
                            <div class="contact-inner">
                              <input
                                name="con_name"
                                type="text"
                                placeholder="Name *"
                              />
                            </div>
                            <div class="contact-inner">
                              <input
                                name="con_email"
                                type="email"
                                placeholder="Email *"
                              />
                            </div>
                          </div>
                          <div class="contact-select">
                            <div class="form-item contact-inner">
                              <span class="inquiry">
                                <select id="Visiting" name="Visiting">
                                  <option disabled selected>
                                    Select Department to email
                                  </option>
                                  <option value="Your inquiry about">
                                    Your inquiry about
                                  </option>
                                  <option value="General Information Request">
                                    General Information Request
                                  </option>
                                  <option value="Partner Relations">
                                    Partner Relations
                                  </option>
                                  <option value="Careers">Careers</option>
                                  <option value="Software Licencing">
                                    Software Licencing
                                  </option>
                                </select>
                              </span>
                            </div>
                          </div>
                          <div class="contact-inner contact-message">
                            <textarea
                              name="con_message"
                              placeholder="Please describe what you need."
                            ></textarea>
                          </div>
                          <div class="comment-submit-btn">
                            <button class="ht-btn ht-btn-md" type="submit">
                              Get a free consultation
                            </button>
                            <p class="form-messege"></p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--============ Contact Us Area End =================--> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Digital;
