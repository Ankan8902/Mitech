import React from "react";
import flutterhero from "../assets/images/hero/flutterhero.webp";
import ios2 from "../assets/images/icons/mitech-box-image-style-05-image-01-60x60.webp";
import ios3 from "../assets/images/icons/mitech-box-image-style-05-image-02-60x60.webp";
import ios4 from "../assets/images/icons/mitech-box-image-style-05-image-03-60x60.webp";
import ios5 from "../assets/images/icons/mitech-box-image-style-05-image-04-60x60.webp";
import ios6 from "../assets/images/icons/mitech-box-image-style-05-image-05-60x60.webp";
// import ios7 from "../assets/images/icons/mitech-box-image-style-05-image-06-60x60.webp";
import snark from "../assets/images/hero/mrsnark.webp";
import polished from "../assets/images/hero/polished.webp";
import Gameday from "../assets/images/hero/gameday.webp";
import Queso from "../assets/images/hero/queso.webp";
import irpg from "../assets/images/hero/irpg.webp";
import ics from "../assets/images/hero/virtualics.webp";
import Hire from "../assets/images/icons/mitech-processing-service-image-01-80x83.webp";
import cost from "../assets/images/icons/mitech-processing-service-image-02-80x83.webp";
import diverse from "../assets/images/icons/mitech-processing-service-image-03-80x83.webp";
import best from "../assets/images/icons/mitech-processing-service-image-04-80x83.webp";

import { useState } from "react";

const Native = () => {
  const [toggle, setToggle] = useState(false);
  const [Toggle, SetToggle] = useState(false);
  const [ToggleBtn, SetToggleBtn] = useState(false);
  const [Togglebtn, SetTogglebtn] = useState(false);
  const [togg, setTogg] = useState(false);
  const [tog, setTog] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
  };

  const togglestate = () => {
    SetToggle(!Toggle);
  };

  const togglestatebtn = () => {
    SetToggleBtn(!ToggleBtn);
  };

  const togglestateBtn = () => {
    SetTogglebtn(!Togglebtn);
  };

  const ToggleState = () => {
    setTogg(!togg);
  };

  const Togglebn = () => {
    setTog(!tog);
  };
  return (
    <>
      <div id="main-wrapper">
        <div class="site-wrapper-reveal">
          {/* <!--============ Infotechno Hero Start ============--> */}
          <div class="infotechno-hero infotechno-bg">
            <div class="container-fluid">
              <div class="row align-items-center">
                {/* <!--baseline--> */}
                <div class="col-lg-6 col-md-6">
                  <div class="infotechno-hero-text  wow move-up">
                    {/* <h6>IT Design & Consulting </h6> */}
                    <h1 class="font-weight--reguler mb-15">
                      React Native App <br /> Development Company{" "}
                    </h1>
                    <p>
                      Use the power of trusted and tested React Native framework
                      for developing high performance cross platform mobile and
                      web apps. Our React Native experience has shaped a
                      multitude of successful, industry-leading and widely
                      benchmarked cross platform apps with intuitive user
                      experience, rich native features, great scalability and
                      sophisticated user interface.
                    </p>
                    <div class="hero-button  mt-30">
                      <a href="/" class="ht-btn ht-btn-md">
                        Discuss Your Idea
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="infotechno-hero-inner-images">
                    <div class="infotechno-inner-one">
                      <img
                        class="img-fluid"
                        src="assets/images/hero/home-infotechno-main-slider-slide-01-image-01.webp"
                        alt=""
                      />
                    </div>
                    <div class="infotechno-inner-two  wow move-up">
                      <img
                        class="img-fluid android-img"
                        src={flutterhero}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--============ Infotechno Hero End ============--> */}
          {/* <!--===========  feature-images-wrapper  Start =============--> */}
          <div class="feature-images-wrapper bg-gray section-space--ptb_100">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  {/* <!-- section-title-wrap Start --> */}
                  <div class="section-title-wrap text-center section-space--mb_30">
                    <h3 class="heading">
                      Choose React-Native To Build An App Which Retains The User
                      <span class="text-color-primary"> Attention</span>
                    </h3>
                  </div>
                  {/* <!-- section-title-wrap Start --> */}
                </div>
              </div>

              <div class="feature-images__four">
                <div class=" row">
                  <div class="single-item col-lg-4 col-md-6 mt-30 wow move-up">
                    {/* <!-- ht-box-icon Start --> */}
                    <a href="/" class="ht-box-images style-04">
                      <div class="image-box-wrap">
                        <div class="box-image">
                          <img class="img-fulid" src={ios2} alt="" />
                        </div>
                        <div class="content">
                          <h5 class="heading">Full Cycle App Development</h5>
                          <div class="text">
                            We at OverNinja offer full cycle app development
                            services starting from conceptualization,
                            prototyping, design, development, app testing,
                            maintenance and post-development support.
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
                          <img class="img-fulid" src={ios3} alt="" />
                        </div>
                        <div class="content">
                          <h5 class="heading">MVP Development </h5>
                          <div class="text">
                            We offer React Native MVP development services to
                            help businesses build an app spending low initial
                            cost while remaining open for future value additions
                            through updates.
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
                          <img class="img-fulid" src={ios4} alt="" />
                        </div>
                        <div class="content">
                          <h5 class="heading">App Testing</h5>
                          <div class="text">
                            At OverNinja, with a dedicated QA testing team we
                            offer standalone app testing services for all mobile
                            and cross platform apps across all niches.
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
                          <img class="img-fulid" src={ios5} alt="" />
                        </div>
                        <div class="content">
                          <h5 class="heading">Flutter Offshore Development</h5>
                          <div class="text">
                            We help hiring offshore developers for all Flutter
                            app projects. We boast of several flexible hiring
                            models for offshore app projects across the niches.
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
                          <img class="img-fulid" src={ios6} alt="" />
                        </div>
                        <div class="content">
                          <h5 class="heading">Maintenance & Support</h5>
                          <div class="text">
                            With OverNinja we not only provide React Native
                            development services, but also take care of the
                            maintenance, post-development support and app
                            updates.
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* <!-- ht-box-icon End --> */}
                  </div>
                  {/* <div class="single-item col-lg-4 col-md-6 mt-30 wow move-up">
                    <!-- ht-box-icon Start -->
                    <a href="/" class="ht-box-images style-04">
                      <div class="image-box-wrap">
                        <div class="box-image">
                          <img class="img-fulid" src={ios7} alt="" />
                        </div>
                        <div class="content">
                          <h5 class="heading">
                            API Development And Integration
                          </h5>
                          <div class="text">
                            Our experienced team can help you with building and
                            deploying REST APIs to effectively meet your project
                            requirements.
                          </div>
                        </div>
                      </div>
                    </a>
                    <!-- ht-box-icon End -->
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!--===========  feature-images-wrapper  End =============--> */}
          {/* <!--===========  feature-large-images-wrapper  Start =============--> */}
          <div class="feature-large-images-wrapper section-space--ptb_100">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  {/* <!-- section-title-wrap Start --> */}
                  <div class="section-title-wrap text-center section-space--mb_60">
                    <h3 class="heading">
                      Our Recent <span class="text-color-primary"> Works</span>
                    </h3>
                  </div>
                  {/* <!-- section-title-wrap Start --> */}
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <div class="row">
                    <div class="col-lg-4 col-md-6 wow move-up">
                      {/* <!-- ht-box-icon Start --> */}
                      <a href="/" class="ht-large-box-images style-03">
                        <div class="large-image-box">
                          <div class="box-image">
                            <div class="default-image">
                              <img class="img-fluid" src={snark} alt="" />
                            </div>
                          </div>
                          <div class="content">
                            <h5 class="heading">Mr. SNARK</h5>
                            <div class="text">Cryptocurrency & Web 3</div>
                            <div href="/" class="box-images-arrow">
                              <span class="button-text">Discover now</span>
                              <i class="far fa-long-arrow-right"></i>
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* <!-- ht-box-icon End --> */}
                    </div>
                    <div class="col-lg-4 col-md-6 wow move-up">
                      {/* <!-- ht-box-icon Start --> */}
                      <a href="/" class="ht-large-box-images style-03">
                        <div class="large-image-box">
                          <div class="box-image">
                            <div class="default-image">
                              <img class="img-fluid" src={polished} alt="" />
                            </div>
                          </div>
                          <div class="content">
                            <h5 class="heading">Polished</h5>
                            <div class="text">Fashion E-Commerce App</div>
                            <div href="/" class="box-images-arrow">
                              <span class="button-text">Discover now</span>
                              <i class="far fa-long-arrow-right"></i>
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* <!-- ht-box-icon End --> */}
                    </div>
                    <div class="col-lg-4 col-md-6 wow move-up">
                      {/* <!-- ht-box-icon Start --> */}
                      <a href="/" class="ht-large-box-images style-03">
                        <div class="large-image-box">
                          <div class="box-image">
                            <div class="default-image">
                              <img class="img-fluid" src={Gameday} alt="" />
                            </div>
                          </div>
                          <div class="content">
                            <h5 class="heading">Gameday Guide</h5>
                            <div class="text">
                              Sports Ticket and Travel Package Booking
                            </div>
                            <div href="/" class="box-images-arrow">
                              <span class="button-text">Discover now</span>
                              <i class="far fa-long-arrow-right"></i>
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* <!-- ht-box-icon End --> */}
                    </div>
                    <div class="col-lg-4 col-md-6 wow move-up">
                      {/* <!-- ht-box-icon Start --> */}
                      <a href="/" class="ht-large-box-images style-03">
                        <div class="large-image-box">
                          <div class="box-image">
                            <div class="default-image">
                              <img class="img-fluid" src={Queso} alt="" />
                            </div>
                          </div>
                          <div class="content">
                            <h5 class="heading">Queso</h5>
                            <div class="text">Social Networking Mobile App</div>
                            <div href="/" class="box-images-arrow">
                              <span class="button-text">Discover now</span>
                              <i class="far fa-long-arrow-right"></i>
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* <!-- ht-box-icon End --> */}
                    </div>
                    <div class="col-lg-4 col-md-6 wow move-up">
                      {/* <!-- ht-box-icon Start --> */}
                      <a href="/" class="ht-large-box-images style-03">
                        <div class="large-image-box">
                          <div class="box-image">
                            <div class="default-image">
                              <img class="img-fluid" src={irpg} alt="" />
                            </div>
                          </div>
                          <div class="content">
                            <h5 class="heading">IRPG</h5>
                            <div class="text">
                              Safety on the fireline Mobile App
                            </div>
                            <div href="/" class="box-images-arrow">
                              <span class="button-text">Discover now</span>
                              <i class="far fa-long-arrow-right"></i>
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* <!-- ht-box-icon End --> */}
                    </div>
                    <div class="col-lg-4 col-md-6 wow move-up">
                      {/* <!-- ht-box-icon Start --> */}
                      <a href="/" class="ht-large-box-images style-03">
                        <div class="large-image-box">
                          <div class="box-image">
                            <div class="default-image">
                              <img class="img-fluid" src={ics} alt="" />
                            </div>
                          </div>
                          <div class="content">
                            <h5 class="heading">Virtual ICS</h5>
                            <div class="text">
                              Fire Incident Reporting Dashboard
                            </div>
                            <div href="/" class="box-images-arrow">
                              <span class="button-text">Discover now</span>
                              <i class="far fa-long-arrow-right"></i>
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* <!-- ht-box-icon End --> */}
                    </div>
                  </div>

                  {/* <div class="section-under-heading text-center section-space--mt_20"><a href="/">Learn more about how we work span <i class="ml-1 button-icon far fa-long-arrow-right"></i></a></div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!--===========  feature-large-images-wrapper  End =============--> */}
          <div class="row">
            <div class="col-lg-12">
              {/* <!-- section-title-wrap Start --> */}
              <div class="section-title-wrap text-center section-space--mb_60">
                <h3 class="heading">
                  Why choose<span class="text-color-primary"> OverNinja</span>{" "}
                  for Development?
                </h3>
              </div>
              {/* <!-- section-title-wrap Start --> */}
            </div>
          </div>
          {/* <!--===========  feature-images-wrapper  Start =============--> */}
          <div class="feature-images-wrapper">
            <div class="container-fluid ps-0 pe-0">
              <div class="row no-gutters">
                <div class="col-12">
                  <div class="feature-images__three modern-grid-image-4 row no-gutters">
                    <div class="col-lg-3  col-md-6">
                      {/* <!-- ht-box-icon Start --> */}
                      <a href="/" class="ht-box-images style-03 wow move-up">
                        <div class="image-box-wrap">
                          <div class="box-image">
                            <img class="img-fulid" src={Hire} alt="" />
                          </div>
                          <div class="content">
                            <h5 class="heading">100% Client Satisfaction </h5>
                            <div class="text">
                              We have made our presence known in 35+ countries
                              and have one of the highest client satisfaction
                              rate. We are widely trusted in the global
                              environment for our superior app quality and
                              services.
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* <!-- ht-box-icon End --> */}
                    </div>

                    <div class="col-lg-3  col-md-6">
                      {/* <!-- ht-box-icon Start --> */}
                      <a href="/" class="ht-box-images style-03 wow move-up">
                        <div class="image-box-wrap">
                          <div class="box-image">
                            <img class="img-fulid" src={cost} alt="" />
                          </div>
                          <div class="content">
                            <h5 class="heading">
                              Expert Android App Developers
                            </h5>
                            <div class="text">
                              We have one of the finest developer’s pools in the
                              world. We have efficient developers and designers
                              with the advanced skill set for developing modern
                              and feature-rich applications for higher ROI.
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* <!-- ht-box-icon End --> */}
                    </div>

                    <div class="col-lg-3  col-md-6">
                      {/* <!-- ht-box-icon Start --> */}
                      <a href="/" class="ht-box-images style-03 wow move-up">
                        <div class="image-box-wrap">
                          <div class="box-image">
                            <img class="img-fulid" src={diverse} alt="" />
                          </div>
                          <div class="content">
                            <h5 class="heading">
                              Advanced Tools and Technologies{" "}
                            </h5>
                            <div class="text">
                              We use Agile development practices and advanced
                              tools and technologies that bring more flare to
                              our android app development tactics; our efforts
                              are to reduce the cost and time of the
                              development.
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* <!-- ht-box-icon End --> */}
                    </div>

                    <div class="col-lg-3 col-md-6">
                      {/* <!-- ht-box-icon Start --> */}
                      <a href="/" class="ht-box-images style-03 wow move-up">
                        <div class="image-box-wrap">
                          <div class="box-image">
                            <img class="img-fulid" src={best} alt="" />
                          </div>
                          <div class="content">
                            <h5 class="heading">24 X 7 Assistance </h5>
                            <div class="text">
                              We have 24*7*365 days support and assistance to
                              ensure maximum uptime for your application. We
                              keep your application bug-free and up and running
                              all throughout the year for improved retention.
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* <!-- ht-box-icon End --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--===========  feature-images-wrapper  End =============--> */}
          <div id="main-wrapper">
            <div class="site-wrapper-reveal">
              {/* <!--====================  Accordion area ====================--> */}
              <div class="accordion-wrapper section-space--ptb_100">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      {/* <!-- section-title-wrap Start --> */}
                      <div class="section-title-wrap text-center section-space--mb_20">
                        <h3 class="heading">Frequently asked questions</h3>
                      </div>
                      {/* <!-- section-title-wrap Start --> */}
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="faq-wrapper  section-space--mt_40">
                        <div id="accordion">
                          <div class="card">
                            <div class="card-header" id="headingTwo">
                              <h5 class="mb-0">
                                <button
                                  class="btn-link collapsed"
                                  className={
                                    toggle ? "btn-link" : "btn-link collapsed"
                                  }
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded={toggle ? "true" : "false"}
                                  aria-controls="collapseTwo"
                                  onClick={toggleState}
                                >
                                  How can we help your business?
                                  <span>
                                    {" "}
                                    <i class="fas fa-chevron-down"></i>
                                    <i class="fas fa-chevron-up"></i>{" "}
                                  </span>
                                </button>
                              </h5>
                            </div>
                            <div
                              id="collapseTwo"
                              class="collapse"
                              className={toggle ? "collapse show" : "collapse"}
                              aria-labelledby="headingTwo"
                              data-bs-parent="#accordion"
                            >
                              <div class="card-body">
                                <p>
                                  Mitech takes into consideration every little
                                  detail to make sure the system run smoothly
                                  and responsively. Mitech employs a new
                                  technique called Minified Technology for
                                  securing customers' database & building up
                                  highly confidential firewalls.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="card">
                            <div class="card-header" id="headingThree">
                              <h5 class="mb-0">
                                <button
                                  class="btn-link collapsed"
                                  className={
                                    Toggle ? "btn-link" : "btn-link collapsed"
                                  }
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseThree"
                                  aria-expanded={Toggle ? "true" : "false"}
                                  aria-controls="collapseThree"
                                  onClick={togglestate}
                                >
                                  What are the advantages of OverNinja?{" "}
                                  <span>
                                    {" "}
                                    <i class="fas fa-chevron-down"></i>
                                    <i class="fas fa-chevron-up"></i>{" "}
                                  </span>
                                </button>
                              </h5>
                            </div>
                            <div
                              id="collapseThree"
                              class="collapse"
                              className={Toggle ? "collapse show" : "collapse"}
                              aria-labelledby="headingThree"
                              data-bs-parent="#accordion"
                            >
                              <div class="card-body">
                                <p>
                                  We reduce redundant complex calculations and
                                  lengthy erroneous code texts with simpler ones
                                  to ensure Mitech would run seamlessly and the
                                  design is reserved in its best form when
                                  viewed from a wide range of mobile devices &
                                  browsers.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="card">
                            <div class="card-header" id="headingFour">
                              <h5 class="mb-0">
                                <button
                                  class="btn-link collapsed"
                                  className={
                                    ToggleBtn
                                      ? "btn-link"
                                      : "btn-link collapsed"
                                  }
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseFour"
                                  aria-expanded={ToggleBtn ? "true" : "false"}
                                  aria-controls="collapseFour"
                                  onClick={togglestatebtn}
                                >
                                  How working process is simplified?
                                  <span>
                                    {" "}
                                    <i class="fas fa-chevron-down"></i>
                                    <i class="fas fa-chevron-up"></i>{" "}
                                  </span>
                                </button>
                              </h5>
                            </div>
                            <div
                              id="collapseFour"
                              class="collapse"
                              className={
                                ToggleBtn ? "collapse show" : "collapse"
                              }
                              aria-labelledby="headingFour"
                              data-bs-parent="#accordion"
                            >
                              <div class="card-body">
                                <p>
                                  Our service offerings to enhance customer
                                  experience throughout the product lifecycle
                                  includes – test and repair, service
                                  management, and end-to-end warranty
                                  management.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      {/* <!-- Start toggles --> */}
                      <div class="toggles-wrapper section-space--mt_40">
                        <div class="faq-wrapper">
                          <div id="faq-toggles">
                            <div class="card">
                              <div class="card-header" id="faq_2">
                                <h5 class="mb-0">
                                  <button
                                    class="btn-link collapsed"
                                    className={
                                      Togglebtn
                                        ? "btn-link"
                                        : "btn-link collapsed"
                                    }
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq_two"
                                    aria-expanded={Togglebtn ? "true" : "false"}
                                    aria-controls="faq_two"
                                    onClick={togglestateBtn}
                                  >
                                    Do you make responsive mobile applications?
                                    <span>
                                      {" "}
                                      <i class="fas fa-chevron-down"></i>
                                      <i class="fas fa-chevron-up"></i>{" "}
                                    </span>
                                  </button>
                                </h5>
                              </div>
                              <div
                                id="faq_two"
                                class="collapse"
                                className={
                                  Togglebtn ? "collapse show" : "collapse"
                                }
                                aria-labelledby="faq_2"
                              >
                                <div class="card-body">
                                  <p>
                                    Mitech takes into consideration every little
                                    detail to make sure the system run smoothly
                                    and responsively. Mitech employs a new
                                    technique called Minified Technology for
                                    securing customers' database & building up
                                    highly confidential firewalls.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="card">
                              <div class="card-header" id="faq_3">
                                <h5 class="mb-0">
                                  <button
                                    class="btn-link collapsed"
                                    className={
                                      togg ? "btn-link" : "btn-link collapsed"
                                    }
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq_three"
                                    aria-expanded={togg ? "true" : "false"}
                                    aria-controls="faq_three"
                                    onClick={ToggleState}
                                  >
                                    Do you use any project management tools?{" "}
                                    <span>
                                      {" "}
                                      <i class="fas fa-chevron-down"></i>
                                      <i class="fas fa-chevron-up"></i>{" "}
                                    </span>
                                  </button>
                                </h5>
                              </div>
                              <div
                                id="faq_three"
                                class="collapse"
                                className={togg ? "collapse show" : "collapse"}
                                aria-labelledby="faq_3"
                              >
                                <div class="card-body">
                                  <p>
                                    We reduce redundant complex calculations and
                                    lengthy erroneous code texts with simpler
                                    ones to ensure Mitech would run seamlessly
                                    and the design is reserved in its best form
                                    when viewed from a wide range of mobile
                                    devices & browsers.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="card">
                              <div class="card-header" id="faq_4">
                                <h5 class="mb-0">
                                  <button
                                    class="btn-link collapsed"
                                    className={
                                      tog ? "btn-link" : "btn-link collapsed"
                                    }
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq_four"
                                    aria-expanded={tog ? "true" : "false"}
                                    aria-controls="faq_four"
                                    onClick={Togglebn}
                                  >
                                    How long does it take to create an mobile
                                    application?{" "}
                                    <span>
                                      {" "}
                                      <i class="fas fa-chevron-down"></i>
                                      <i class="fas fa-chevron-up"></i>{" "}
                                    </span>
                                  </button>
                                </h5>
                              </div>
                              <div
                                id="faq_four"
                                class="collapse"
                                className={tog ? "collapse show" : "collapse"}
                                aria-labelledby="faq_4"
                                data-bs-parent="#faq-toggles"
                              >
                                <div class="card-body">
                                  <p>
                                    We are available to freelance hiring with
                                    on-demand extra services, including
                                    WordPress site design/ redesign, WordPress
                                    installation, all-in-one customization,
                                    video production, video editing and stop
                                    motion video producing.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End toggles --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="main-wrapper">
            <div className="site-wrapper-reveal">
              {/* <!--====================  Conact us Section Start ====================--> */}
              <div className="contact-us-section-wrappaer section-space--pt_100 section-space--pb_70">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-lg-6">
                      <div className="conact-us-wrap-one mb-30">
                        <h3 className="heading">
                          Let's Transform <br />
                          Your Vision into
                          <br />
                          <span className="text-color-primary">Value</span>{" "}
                          {/* via our social channels.{" "} */}
                        </h3>
                        <div className="sub-heading">
                          Have an Idea! Not sure of how to start? <br />
                          Talk to us. Whether you need to build a project from
                          scratch or redesign the existing, we can help you
                          anywhere in the project. We help you to develop,
                          design and build a prototype and drive your project
                          from concept to reality, or help you build a new team.
                          Contact us to make things simpler for you.
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-lg-6">
                      <div className="contact-form-wrap">
                        {/* <!-- <form id="contact-form" action="http://whizthemes.com/mail-php/jowel/mitech/php/mail.php" method="post"> --> */}
                        <form
                          id="contact-form"
                          action="assets/php/mail.php"
                          method="post"
                        >
                          <div className="contact-form">
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
                            <div className="contact-inner">
                              <input
                                name="con_subject"
                                type="text"
                                placeholder="Contact No. *"
                              />
                            </div>
                            <div className="contact-inner contact-message">
                              <textarea
                                name="con_message"
                                placeholder="Please describe what you need."
                              ></textarea>
                            </div>
                            <div className="submit-btn mt-20">
                              <button
                                className="ht-btn ht-btn-md"
                                type="submit"
                              >
                                Send message
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
              {/* <!--====================  Conact us Section End  ====================--> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Native;
