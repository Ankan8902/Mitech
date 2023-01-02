import React from "react";
import image from "../assets/images/hero/recruit-1.jpg";
import image2 from "../assets/images/hero/about-2.jpg";
import image3 from "../assets/images/hero/logo-1.jpg";

const Recruitment = () => {
  return (
    <>
      <div id="main-wrapper">
        <div class="site-wrapper-reveal">
          <div
            class="about-banner-wrap banner-space bg-img"
            data-bg={image}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-8 m-auto">
                  <div class="about-banner-content text-center">
                    <h1 class="mb-15 text-white">Recruitment Services</h1>
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
                    <div class="modern-number-01">
                      <h2 class="heading  me-5">
                        <span class="mark-text">38</span>Year's Experience in IT
                      </h2>
                      <h3 class="heading mt-30">
                        Learn More About Our{" "}
                        <span class="text-color-primary">
                          {" "}
                          Success <br /> Stories
                        </span>
                      </h3>
                    </div>
                  </div>
                  <div class="col-lg-7 offset-lg-1">
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

                      <div class="sub-heading">
                        We're available for 8 hours a day!
                        <br />
                        Contact to require a detailed analysis and assessment of
                        your plan.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--===========  feature-large-images-wrapper  End =============--> */}

          {/* <!--=========== fun fact Wrapper Start ==========--> */}
          <div class="managed-it-fun-fact-wrapper section-space--pb_100">
            <div class="container">
              <div class="fun-fact-grid-4">
                <div class="grid-item  wow move-up">
                  <div class="fun-fact--one text-center">
                    <h5 class="fun-fact__title">
                      Successfully work <br /> with{" "}
                    </h5>
                    <div class="fun-fact__count counter">1056</div>
                    <span class="fun-fact__text">HAPPY CLIENTS</span>
                  </div>
                </div>
                <div class="grid-item  wow move-up">
                  <div class="fun-fact--one text-center">
                    <h5 class="fun-fact__title">
                      Successfully <br /> completed
                    </h5>
                    <div class="fun-fact__count counter">491</div>
                    <span class="fun-fact__text">Finished projects</span>
                  </div>
                </div>
                <div class="grid-item  wow move-up">
                  <div class="fun-fact--one text-center">
                    <h5 class="fun-fact__title">
                      Recruit more <br /> than
                    </h5>
                    <div class="fun-fact__count counter">245</div>
                    <span class="fun-fact__text">SKilled Experts</span>
                  </div>
                </div>
                <div class="grid-item  wow move-up">
                  <div class="fun-fact--one text-center">
                    <h5 class="fun-fact__title">
                      Blog <br /> update{" "}
                    </h5>
                    <div class="fun-fact__count counter">1090</div>
                    <span class="fun-fact__text">Media Posts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--=========== fun fact Wrapper End ==========--> */}
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
                        <img class="img-fluid" src={image2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--========= About Resources Wrapper End ===========--> */}
          {/* <!--===========  feature-icon-wrapper  Start =============--> */}
          <div class="feature-icon-wrapper section-space--pt_100 section-space--pb_70">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="section-title-wrap text-center section-space--mb_20">
                    <h3 class="heading">Prominent IT Security Services</h3>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="feature-list__three">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="grid-item animate">
                          <div class="ht-box-icon style-03">
                            <div class="icon-box-wrap">
                              <div class="content-header">
                                <div class="icon">
                                  <i class="fal fa-shield-check"></i>
                                </div>
                                <h5 class="heading">
                                  Mitech Management Systems
                                </h5>
                              </div>
                              <div class="content">
                                <div class="text">
                                  Our service offerings enhance customer
                                  experience throughout secure & highly
                                  functional end-to-end warranty management.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="grid-item animate">
                          <div class="ht-box-icon style-03">
                            <div class="icon-box-wrap">
                              <div class="content-header">
                                <div class="icon">
                                  <i class="fal fa-lock-alt"></i>
                                </div>
                                <h5 class="heading">
                                  Reliable Multi-function Technology
                                </h5>
                              </div>
                              <div class="content">
                                <div class="text">
                                  Develop and propose product improvements
                                  through periodical and accurate testing,
                                  repairing & refining every version.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="grid-item animate">
                          <div class="ht-box-icon style-03">
                            <div class="icon-box-wrap">
                              <div class="content-header">
                                <div class="icon">
                                  <i class="fal fa-magnet"></i>
                                </div>
                                <h5 class="heading">
                                  Highly Professional Staffs
                                </h5>
                              </div>
                              <div class="content">
                                <div class="text">
                                  Develop and propose product improvements
                                  through periodical and accurate testing,
                                  repairing & refining every version.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="grid-item animate">
                          <div class="ht-box-icon style-03">
                            <div class="icon-box-wrap">
                              <div class="content-header">
                                <div class="icon">
                                  <i class="fal fa-medal"></i>
                                </div>
                                <h5 class="heading">
                                  Infrastructure Integration Technology
                                </h5>
                              </div>
                              <div class="content">
                                <div class="text">
                                  At Mitech, we have a holistic and integrated
                                  approach towards core modernization to
                                  experience technological evolution.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--===========  feature-icon-wrapper  End =============--> */}

          {/* <!--====================  testimonial section ====================--> */}
          <div class="testimonial-slider-area bg-gray section-space--ptb_100">
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
                                <img src={image3} class="img-fluid" alt="" />
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
                              more than 200 projects of our company, but @Mitech
                              is one of the most impressive to me.
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
                                  <span class="designation">Web designer</span>
                                </div>
                              </div>
                            </div>

                            <div class="testimonial-slider__text">
                              I've been working with over 35 IT companies on
                              more than 200 projects of our company, but @Mitech
                              is one of the most impressive to me.
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
                                  <span class="designation">WEB DESIGNER</span>
                                </div>
                              </div>
                            </div>

                            <div class="testimonial-slider__text">
                              I've been working with over 35 IT companies on
                              more than 200 projects of our company, but @Mitech
                              is one of the most impressive to me.
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
                                  <span class="designation">WEB DESIGNER</span>
                                </div>
                              </div>
                            </div>

                            <div class="testimonial-slider__text">
                              I've been working with over 35 IT companies on
                              more than 200 projects of our company, but @Mitech
                              is one of the most impressive to me.
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

          {/* <!--========== Call to Action Area Start ============--> */}
          <div class="cta-image-area_one section-space--ptb_80 cta-bg-image_one">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-xl-8 col-lg-7">
                  <div class="cta-content md-text-center">
                    <h3 class="heading text-white">
                      We run all kinds of IT services that vow your{" "}
                      <span class="text-color-secondary"> success</span>
                    </h3>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-5">
                  <div class="cta-button-group--one text-center">
                    <a href="/" class="btn btn--white btn-one">
                      <span class="btn-icon me-2">
                        <i class="far fa-comment-alt-dots"></i>
                      </span>{" "}
                      Let's talk
                    </a>
                    <a href="/" class="btn btn--secondary  btn-two">
                      <span class="btn-icon me-2">
                        <i class="far fa-info-circle"></i>
                      </span>{" "}
                      Get info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--========== Call to Action Area End ============--> */}
        </div>
      </div>
    </>
  );
};

export default Recruitment;
