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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
