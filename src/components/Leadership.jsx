import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/hero/leader-1.jpg";
import image2 from "../assets/images/hero/leader-2.jpg";
import image3 from "../assets/images/hero/leader-3.jpg";
import image4 from "../assets/images/hero/leader-4.jpg";
import image5 from "../assets/images/hero/leader-5.jpg";
import image6 from "../assets/images/hero/leader-6.jpg";
import image7 from "../assets/images/hero/leader-7.jpg";

const Leadership = () => {
  return (
    <>
      {/* <!-- breadcrumb-area start --> */}
      <div class="breadcrumb-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="breadcrumb_box text-center">
                <h2 class="breadcrumb-title">Leadership</h2>
                {/* <!-- breadcrumb-list start --> */}
                <ul class="breadcrumb-list">
                  <li class="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li class="breadcrumb-item active">Leadership</li>
                </ul>
                {/* <!-- breadcrumb-list end --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- breadcrumb-area end --> */}

      <div id="main-wrapper">
        <div class="site-wrapper-reveal">
          {/* <!-- ============ Team Member Wrapper Start =============== --> */}
          <div class="team-member-wrapper section-space--pt_100 section-space--pb_70">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="section-title section-space--mb_60 text-center">
                    <h3 class="heading">
                      We pride ourselves on having a team <br /> of{" "}
                      <span class="text-color-primary">highly-skilled</span>{" "}
                      experts
                    </h3>
                  </div>
                </div>
              </div>
              <div class="row ht-team-member-style-two">
                <div class="col-lg-4 col-md-6 wow move-up">
                  <div class="grid-item">
                    <div class="ht-team-member">
                      <div class="team-image">
                        <img class="img-fluid" src={image} alt="" />
                        <div class="social-networks">
                          <div class="inner">
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce  hint--top hint--theme-two"
                              aria-label="Facebook"
                            >
                              <i class="fab fa-facebook"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce hint--top hint--theme-two"
                              aria-label="Twitter"
                            >
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce hint--top hint--theme-two"
                              aria-label="Instagram"
                            >
                              <i class="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="team-info text-center">
                        <h5 class="name">Dollie Horton </h5>
                        <div class="position">Marketing</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 wow move-up">
                  <div class="grid-item">
                    <div class="ht-team-member">
                      <div class="team-image">
                        <img class="img-fluid" src={image2} alt="" />
                        <div class="social-networks">
                          <div class="inner">
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce  hint--top hint--theme-two"
                              aria-label="Facebook"
                            >
                              <i class="fab fa-facebook"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce hint--top hint--theme-two"
                              aria-label="Twitter"
                            >
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce hint--top hint--theme-two"
                              aria-label="Instagram"
                            >
                              <i class="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="team-info text-center">
                        <h5 class="name">Stephen Mearsley </h5>
                        <div class="position">President & CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 wow move-up">
                  <div class="grid-item">
                    <div class="ht-team-member">
                      <div class="team-image">
                        <img class="img-fluid" src={image3} alt="" />
                        <div class="social-networks">
                          <div class="inner">
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce  hint--top hint--theme-two"
                              aria-label="Facebook"
                            >
                              <i class="fab fa-facebook"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce hint--top hint--theme-two"
                              aria-label="Twitter"
                            >
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce hint--top hint--theme-two"
                              aria-label="Instagram"
                            >
                              <i class="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="team-info text-center">
                        <h5 class="name">Maggie Strickland </h5>
                        <div class="position">Financial Services</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row ht-team-member-style-three">
                <div class="col-lg-3 col-md-6 wow move-up">
                  <div class="grid-item mb-30">
                    <div class="ht-team-member">
                      <div class="team-image">
                        <img class="img-fluid" src={image4} alt="" />
                        <div class="social-networks">
                          <div class="inner">
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce  hint--top hint--theme-two"
                              aria-label="Facebook"
                            >
                              <i class="fab fa-facebook"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce hint--top hint--theme-two"
                              aria-label="Twitter"
                            >
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce hint--top hint--theme-two"
                              aria-label="Instagram"
                            >
                              <i class="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="team-info text-center">
                        <h6 class="name">Stephany Mearsley </h6>
                        <div class="position">Marketing</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 wow move-up">
                  <div class="grid-item  mb-30">
                    <div class="ht-team-member">
                      <div class="team-image">
                        <img class="img-fluid" src={image5} alt="" />
                        <div class="social-networks">
                          <div class="inner">
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce  hint--top hint--theme-two"
                              aria-label="Facebook"
                            >
                              <i class="fab fa-facebook"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce hint--top hint--theme-two"
                              aria-label="Twitter"
                            >
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce hint--top hint--theme-two"
                              aria-label="Instagram"
                            >
                              <i class="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="team-info text-center">
                        <h6 class="name">Monica Blews </h6>
                        <div class="position">Marketing</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 wow move-up">
                  <div class="grid-item mb-30">
                    <div class="ht-team-member">
                      <div class="team-image">
                        <img class="img-fluid" src={image6} alt="" />
                        <div class="social-networks">
                          <div class="inner">
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce  hint--top hint--theme-two"
                              aria-label="Facebook"
                            >
                              <i class="fab fa-facebook"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce hint--top hint--theme-two"
                              aria-label="Twitter"
                            >
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce hint--top hint--theme-two"
                              aria-label="Instagram"
                            >
                              <i class="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="team-info text-center">
                        <h6 class="name">Maggie Strickland </h6>
                        <div class="position">Marketing</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 wow move-up">
                  <div class="grid-item mb-30">
                    <div class="ht-team-member">
                      <div class="team-image">
                        <img class="img-fluid" src={image7} alt="" />
                        <div class="social-networks">
                          <div class="inner">
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce  hint--top hint--theme-two"
                              aria-label="Facebook"
                            >
                              <i class="fab fa-facebook"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce hint--top hint--theme-two"
                              aria-label="Twitter"
                            >
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a
                              target="_blank"
                              href="/"
                              class=" hint--bounce hint--top hint--theme-two"
                              aria-label="Instagram"
                            >
                              <i class="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="team-info text-center">
                        <h6 class="name">Dollie Horton </h6>
                        <div class="position">Marketing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ============ Team Member Wrapper End =============== --> */}

          <div class="list-member-area section-space--pb_70">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-6 team_member-list mb-30">
                  <h6 class="team__title mb-20">DEVELOPER</h6>
                  <ul class="footer-widget__list">
                    <li>
                      <a href="/" class="hover-style-default">
                        Gene Moreno
                      </a>
                    </li>
                    <li>
                      <a href="/" class="hover-style-default">
                        Carrie Greer
                      </a>
                    </li>
                    <li>
                      <a href="/" class="hover-style-default">
                        Brent Newman
                      </a>
                    </li>
                    <li>
                      <a href="/" class="hover-style-default">
                        Craig Stevenson
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-6 team_member-list mb-30">
                  <h6 class="team__title mb-20">Engineer</h6>
                  <ul class="footer-widget__list">
                    <li>
                      <a href="/" class="hover-style-default">
                        Albert Webster
                      </a>
                    </li>
                    <li>
                      <a href="/" class="hover-style-default">
                        Harry Castillo
                      </a>
                    </li>
                    <li>
                      <a href="/" class="hover-style-default">
                        Walter Reid
                      </a>
                    </li>
                    <li>
                      <a href="/" class="hover-style-default">
                        Gordon Baldwin
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-6 team_member-list mb-30">
                  <h6 class="team__title mb-20">Staff</h6>
                  <ul class="footer-widget__list">
                    <li>
                      <a href="/" class="hover-style-default">
                        Gene Moreno
                      </a>
                    </li>
                    <li>
                      <a href="/" class="hover-style-default">
                        Carrie Greer
                      </a>
                    </li>
                    <li>
                      <a href="/" class="hover-style-default">
                        Brent Newman
                      </a>
                    </li>
                    <li>
                      <a href="/" class="hover-style-default">
                        Craig Stevenson
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-6 team_member-list mb-30">
                  <h6 class="team__title mb-20">Design/Marketing</h6>
                  <ul class="footer-widget__list">
                    <li>
                      <a href="/" class="hover-style-default">
                        Charlotte Shaw
                      </a>
                    </li>
                    <li>
                      <a href="/" class="hover-style-default">
                        Kate Wong
                      </a>
                    </li>
                    <li>
                      <a href="/" class="hover-style-default">
                        Frederick Huff
                      </a>
                    </li>
                    <li>
                      <a href="/" class="hover-style-default">
                        Ora Johnson
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <!--====================  Conact us Section Start ====================--> */}
          <div class="contact-us-section-wrappaer infotechno-contact-us-bg section-space--ptb_120">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6 col-lg-6">
                  <div class="conact-us-wrap-one">
                    <h3 class="heading">
                      Obtaining further information by{" "}
                      <span class="text-color-primary">make a contact</span>{" "}
                      with our experienced IT staffs.{" "}
                    </h3>

                    <div class="sub-heading">
                      We're available for 8 hours a day!
                      <br />
                      Contact to require a detailed analysis and assessment of
                      your plan.
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 col-lg-6">
                  <div class="contact-info-one text-center">
                    <div class="icon">
                      <span class="fal fa-phone"></span>
                    </div>
                    <h6 class="heading font-weight--reguler">Reach out now!</h6>
                    <h2 class="call-us">
                      <a href="tel:190068668">1900 68668</a>
                    </h2>
                    <div class="contact-us-button mt-20">
                      <a href="/" class="btn btn--secondary">
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--====================  Conact us Section End  ====================--> */}
        </div>
      </div>
    </>
  );
};

export default Leadership;
