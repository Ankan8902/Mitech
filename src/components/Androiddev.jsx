import React from "react";
import androidhero from "../assets/images/hero/android-hero-hire.png";
import ios2 from "../assets/images/icons/mitech-box-image-style-05-image-01-60x60.webp";
import ios3 from "../assets/images/icons/mitech-box-image-style-05-image-02-60x60.webp";
import ios4 from "../assets/images/icons/mitech-box-image-style-05-image-03-60x60.webp";
import ios5 from "../assets/images/icons/mitech-box-image-style-05-image-04-60x60.webp";
import ios6 from "../assets/images/icons/mitech-box-image-style-05-image-05-60x60.webp";
import ios7 from "../assets/images/icons/mitech-box-image-style-05-image-06-60x60.webp";

import backup from "../assets/images/icons/mitech-processing-service-image-01-80x83.webp";
import cloud from "../assets/images/icons/mitech-processing-service-image-02-80x83.webp";
import IT from "../assets/images/icons/mitech-processing-service-image-03-80x83.webp";
import soft from "../assets/images/icons/mitech-processing-service-image-04-80x83.webp";
import manage from "../assets/images/icons/mitech-processing-service-image-05-80x83.webp";
import consult from "../assets/images/icons/mitech-processing-service-image-06-80x83.webp";

import snark from "../assets/images/hero/mrsnark.webp";
import polished from "../assets/images/hero/polished.webp";
import Gameday from "../assets/images/hero/gameday.webp";
import Queso from "../assets/images/hero/queso.webp";
import irpg from "../assets/images/hero/irpg.webp";
import ics from "../assets/images/hero/virtualics.webp";
// import Hire from "../assets/images/icons/mitech-processing-service-image-01-80x83.webp";
// import cost from "../assets/images/icons/mitech-processing-service-image-02-80x83.webp";
// import diverse from "../assets/images/icons/mitech-processing-service-image-03-80x83.webp";
// import best from "../assets/images/icons/mitech-processing-service-image-04-80x83.webp";
import { useState } from "react";

const Androiddev = () => {
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
                      Hire Android App Developers{" "}
                    </h1>
                    <p>
                      Hire the industry's best minds for the development of
                      modern-day Android applications for devices of varying
                      screen sizes. As a leading Android app development
                      company, we have android app developers for hire for
                      wearables, Android TV, tablets, etc.
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
                      <img class="img-fluid" src={androidhero} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--============ Infotechno Hero End ============--> */}
          {/* <!--=============Computing area start============-->*/}
          <div className="processing-computing-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="text-center">
                    <h2>Hire Dedicated Android Developer</h2>
                    <div className="section-under-iosdev text-center mt-30">
                      Being a top-notch Android app development company means
                      providing you the best solutions. And that is ensured by
                      our highly seasoned resources. Find android developers for
                      hire with proficiency in leading mobile app development
                      technologies and frameworks. With us, you can hire Android
                      app programmer with 5+ years of experience in developing
                      top-rated mobile applications. Our developers have
                      in-depth industry knowledge of more than 15 leading
                      industries, including retail, healthcare, education, and
                      more. You can hire android application developers on a
                      part-time, full-time, and hourly basis through our
                      flexible hiring model. With our experience and knowledge,
                      we are sure we would become a great technology partner in
                      your business journey.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--=============Computing area end============-->*/}
          {/* <!--========= About Delivering Wrapper Start ===========--> */}
          <div className="about-delivering-wrapper section-space--ptb_100">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title-wrap text-center section-space--mb_20">
                    <h3 className="heading">
                      How Hiring Android Developers Will Help to Develop Dynamic
                      and Cutting-Edge Applications?
                    </h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="delivering-optimal-wrap">
                    <div className="list-item">
                      <div className="marker"></div>
                      <div className="title-wrap">
                        <h5 className="title"> Enhanced Security </h5>
                        <div className="desc">
                          Our service offerings enhance customer experience
                          throughout secure &amp; highly functional end-to-end
                          warranty management.{" "}
                        </div>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="marker"></div>
                      <div className="title-wrap">
                        <h5 className="title"> Filtered Audience </h5>
                        <div className="desc">
                          It's more than a responsibility but a guarantee from
                          us to gain customer trust with highly reliable quality
                          control system.{" "}
                        </div>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="marker"></div>
                      <div className="title-wrap">
                        <h5 className="title">Better Customer Experience </h5>
                        <div className="desc">
                          Having obtained the official & formal training in IT
                          technology and technical fields, our staffs know more
                          than what they show.{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="delivering-optimal-wrap">
                    <div className="list-item">
                      <div className="marker"></div>
                      <div className="title-wrap">
                        <h5 className="title">Secure Transactions </h5>
                        <div className="desc">
                          Develop and propose product improvements through
                          periodical and accurate testing, repairing & refining
                          every version.{" "}
                        </div>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="marker"></div>
                      <div className="title-wrap">
                        <h5 className="title">Better Scalability </h5>
                        <div className="desc">
                          At Mitech, we have a holistic and integrated approach
                          towards core modernization to experience technological
                          evolution.{" "}
                        </div>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="marker"></div>
                      <div className="title-wrap">
                        <h5 className="title">Flexible User Interface </h5>
                        <div className="desc">
                          Information security has been a rising issue lately
                          due to a series of scandals from big companies, rest
                          assured, we're here.{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--========= About Delivering Wrapper End ===========--> */}
          {/* <!--===========  feature-images-wrapper  Start =============--> */}
          <div class="feature-images-wrapper bg-gray section-space--ptb_100">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  {/* <!-- section-title-wrap Start --> */}
                  <div class="section-title-wrap text-center section-space--mb_0">
                    {/* <h6 class="section-sub-title mb-20">Our services</h6> */}
                    <h3 class="heading">
                      Our Android App Development{" "}
                      <span class="text-color-primary"> Services</span>
                    </h3>
                  </div>
                  {/* <!-- section-title-wrap Start --> */}
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <div class="feature-images__two small-mt__10">
                    <div class="modern-grid-image-box row row--30">
                      <div class="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60  small-mt__40">
                        {/* <!-- ht-box-icon Start --> */}
                        <a href="/" class="ht-box-images style-02">
                          <div class="image-box-wrap">
                            <div class="box-image">
                              <img class="img-fulid" src={backup} alt="" />
                            </div>
                            <div class="content">
                              <h6 class="heading">Custom app development </h6>
                            </div>
                          </div>
                        </a>
                        {/* <!-- ht-box-icon End --> */}
                      </div>

                      <div class="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">
                        {/* <!-- ht-box-icon Start --> */}
                        <a href="/" class="ht-box-images style-02">
                          <div class="image-box-wrap">
                            <div class="box-image">
                              <img class="img-fulid" src={cloud} alt="" />
                            </div>
                            <div class="content">
                              <h6 class="heading">App technology consulting</h6>
                            </div>
                          </div>
                        </a>
                        {/* <!-- ht-box-icon End --> */}
                      </div>

                      <div class="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">
                        {/* <!-- ht-box-icon Start --> */}
                        <a href="/" class="ht-box-images style-02">
                          <div class="image-box-wrap">
                            <div class="box-image">
                              <img class="img-fulid" src={IT} alt="" />
                            </div>
                            <div class="content">
                              <h6 class="heading">Hybrid app development</h6>
                            </div>
                          </div>
                        </a>
                        {/* <!-- ht-box-icon End --> */}
                      </div>

                      <div class="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">
                        {/* <!-- ht-box-icon Start --> */}
                        <a href="/" class="ht-box-images style-02">
                          <div class="image-box-wrap">
                            <div class="box-image">
                              <img class="img-fulid" src={soft} alt="" />
                            </div>
                            <div class="content">
                              <h6 class="heading">Native app development</h6>
                            </div>
                          </div>
                        </a>
                        {/* <!-- ht-box-icon End --> */}
                      </div>

                      <div class="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">
                        {/* <!-- ht-box-icon Start --> */}
                        <a href="/" class="ht-box-images style-02">
                          <div class="image-box-wrap">
                            <div class="box-image">
                              <img class="img-fulid" src={manage} alt="" />
                            </div>
                            <div class="content">
                              <h6 class="heading">Wearable app development</h6>
                            </div>
                          </div>
                        </a>
                        {/* <!-- ht-box-icon End --> */}
                      </div>

                      <div class="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">
                        {/* <!-- ht-box-icon Start --> */}
                        <a href="/" class="ht-box-images style-02">
                          <div class="image-box-wrap">
                            <div class="box-image">
                              <img class="img-fulid" src={consult} alt="" />
                            </div>
                            <div class="content">
                              <h6 class="heading">Digital transformation</h6>
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
          </div>
          {/* <!--===========  feature-images-wrapper  End =============--> */}
          {/* <!--========= Pricing Table Area Start ==========--> */}
          <div class="pricing-table-area section-space--ptb_100 bg-gray">
            <div class="pricing-table-title-area position-relative">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="section-title-wrapper text-center section-space--mb_60 wow move-up">
                      {/* <h6 class="section-sub-title mb-20">Pricing and plan</h6> */}
                      <h3 class="section-title">
                        Our <span class="text-color-primary">Hiring</span>{" "}
                        Models
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pricing-table-content-area">
              <div class="container">
                <div class="row pricing-table-one">
                  <div class="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table wow move-up">
                    <div class="pricing-table__inner">
                      <div class="pricing-table__header">
                        <h6 class="sub-title">Full Time Hiring</h6>
                        {/* <div class="pricing-table__image">
                          <img
                            src="assets/images/icons/mitech-pricing-box-icon-01-90x90.webp"
                            class="img-fluid"
                            alt=""
                          />
                        </div> */}
                        <div class="pricing-table__price-wrap">
                          {/* <h6 class="currency">$</h6> */}
                          <h6 class="price">9 Hours</h6>
                          <h6 class="period">/day</h6>
                        </div>
                      </div>
                      <div class="pricing-table__body">
                        {/* <div class="pricing-table__footer">
                          <a href="/" class="ht-btn ht-btn-md ht-btn--outline">
                            Get started
                          </a>
                        </div> */}
                        <ul class="pricing-table__list text-left">
                          <li>03 projects</li>
                          <li>Quality &amp; Customer Experience</li>
                          <li>Minimum Days: 2 Weeks</li>
                          {/* <li>
                            <span class="featured">Minimum Days: 2 Weeks</span>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table pricing-table--popular wow move-up">
                    <div class="pricing-table__inner">
                      {/* <div class="pricing-table__feature-mark">
                        <span>Popular Choice</span>
                      </div> */}
                      <div class="pricing-table__header">
                        <h6 class="sub-title">Part Time Hiring</h6>
                        {/* <div class="pricing-table__image">
                          <img
                            src="assets/images/icons/mitech-pricing-box-icon-02-88x88.webp"
                            class="img-fluid"
                            alt=""
                          />
                        </div> */}
                        <div class="pricing-table__price-wrap">
                          {/* <h6 class="currency">$</h6> */}
                          <h6 class="price">4 Hours</h6>
                          <h6 class="period">/day</h6>
                        </div>
                      </div>
                      <div class="pricing-table__body">
                        {/* <div class="pricing-table__footer">
                          <a href="/" class="ht-btn  ht-btn-md ">
                            Get started
                          </a>
                        </div> */}
                        <ul class="pricing-table__list text-left">
                          <li>Unlimited project</li>
                          <li>Power And Predictive Dialing</li>
                          {/* <li>Quality &amp; Customer Experience</li> */}
                          <li>Minimum Days: 2 Weeks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table wow move-up">
                    <div class="pricing-table__inner">
                      <div class="pricing-table__header">
                        <h6 class="sub-title">Hourly Time Hiring</h6>
                        {/* <div class="pricing-table__image">
                          <img
                            src="assets/images/icons/mitech-pricing-box-icon-03-90x90.webp"
                            class="img-fluid"
                            alt=""
                          />
                        </div> */}
                        <div class="pricing-table__price-wrap">
                          {/* <h6 class="currency">$</h6> */}
                          <h6 class="price">Flexible Hours</h6>
                          {/* <h6 class="period">/mo</h6> */}
                        </div>
                      </div>
                      <div class="pricing-table__body">
                        {/* <div class="pricing-table__footer">
                          <a href="/" class="ht-btn ht-btn-md ht-btn--outline">
                            Get started
                          </a>
                        </div> */}
                        <ul class="pricing-table__list text-left">
                          <li>10 projects</li>
                          <li>Power And Predictive Dialing </li>
                          <li>Minimum Days: 50 Hours</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--========= Pricing Table Area End ==========--> */}

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
          {/* <!--===========  feature-images-wrapper  Start =============--> */}
          <div class="feature-images-wrapper bg-gray section-space--ptb_100">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  {/* <!-- section-title-wrap Start --> */}
                  <div class="section-title-wrap text-center section-space--mb_30">
                    <h3 class="heading">
                      Why Hire Android App Programmer From
                      <span class="text-color-primary"> OverNinja?</span>
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
                          <h5 class="heading">Enhanced Efficiency</h5>
                          <div class="text">
                            We use modern technology that gives us an
                            opportunity to develop and test applications with
                            superior efficiency.
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
                          <h5 class="heading">Future-proof Applications </h5>
                          <div class="text">
                            iPhone app programmers for hire that offer you
                            innovative solutions such as AI, ML, AR, VR,
                            Chatbots, etc.
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
                          <h5 class="heading">Hassle-free procedure</h5>
                          <div class="text">
                            We help you in removing the obstacles as much as
                            possible by offering you a hassle-free process.
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
                          <h5 class="heading">Deployment Services</h5>
                          <div class="text">
                            Apart from the development, designing, testing, and
                            maintenance services, we also offer you to deploy it
                            on AppStore.
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
                          <h5 class="heading">Cost-effective Maintenance</h5>
                          <div class="text">
                            Contact our customer executive team anytime for the
                            maintenance of the applications built by us.
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
                          <img class="img-fulid" src={ios7} alt="" />
                        </div>
                        <div class="content">
                          <h5 class="heading">Innovate & Compete</h5>
                          <div class="text">
                            Our in-depth research and understanding of the
                            industry give us a sharper edge in building
                            innovative solutions.
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

export default Androiddev;
