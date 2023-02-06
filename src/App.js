import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import Contact from "./components/Contact";
import Choose from "./components/Choose";
import History from "./components/History";
import Faqs from "./components/Faqs";
import Recruitment from "./components/Recruitment";
import Digital from "./components/Digital";
import It from "./components/It";
import Casestudies from "./components/Casestudies";
import Arm from "./components/Arm";
import Blog from "./components/Blog";
import Blog2 from "./components/Blog2";
import Leadership from "./components/Leadership";
import Ios from "./components/Ios";
import Android from "./components/Android";
import Flutter from "./components/Flutter";
import Native from "./components/Native";
import Angular from "./components/Angular";
import Reactjs from "./components/Reactjs";
import Vue from "./components/Vue";
import Node from "./components/Node";
import Golang from "./components/Golang";
import Laravel from "./components/Laravel";
import Php from "./components/Php";
import Wordpress from "./components/Wordpress";
import Seo from "./components/Seo";
import Smm from "./components/Smm";
import Ppc from "./components/Ppc";
import Crm from "./components/Crm";
import Pos from "./components/Pos";
import Mobile from "./components/Mobile";
import Website from "./components/Website";
import Game from "./components/Game";
import Iosdev from "./components/Iosdev";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../src/assets/css/vendor/bootstrap.min.css";
import "../src/assets/css/vendor/cerebrisans.css";
import "../src/assets/css/vendor/fontawesome-all.min.css";
import "../src/assets/css/vendor/linea-icons.css";
// import "../src/assets/css/vendor/vendor.min.css";
import "../src/assets/css/plugins/swiper.min.css";
import "../src/assets/css/plugins/animate-text.css";
import "../src/assets/css/plugins/animate.min.css";
import "../src/assets/css/plugins/lightgallery.min.css";
import "../src/assets/css/style.css";
// import "../src/assets/css/style.min.css";
import "../src/assets/css/plugins/plugins.min.css";
// import "../src/assets/css/vendor/vendor.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/history" element={<History />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/recruit" element={<Recruitment />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/IT" element={<It />} />
          <Route path="/casestudies" element={<Casestudies />} />
          <Route path="/ARM" element={<Arm />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogs" element={<Blog2 />} />
          <Route path="/leader" element={<Leadership />} />
          <Route path="/ios" element={<Ios />} />
          <Route path="/android" element={<Android />} />
          <Route path="/flutter" element={<Flutter />} />
          <Route path="/react-native" element={<Native />} />
          <Route path="/angularjs" element={<Angular />} />
          <Route path="/reactjs" element={<Reactjs />} />
          <Route path="/vuejs" element={<Vue />} />
          <Route path="/nodejs" element={<Node />} />
          <Route path="/golang" element={<Golang />} />
          <Route path="/laravel" element={<Laravel />} />
          <Route path="/php" element={<Php />} />
          <Route path="/wordpress" element={<Wordpress />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/smm" element={<Smm />} />
          <Route path="/ppc" element={<Ppc />} />
          <Route path="/crm" element={<Crm />} />
          <Route path="/pos" element={<Pos />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/website" element={<Website />} />
          <Route path="/game" element={<Game />} />
          <Route path="/iosdev" element={<Iosdev />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
