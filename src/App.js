import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import Contact from "./components/Contact";
import Choose from "./components/Choose";
import History from "./components/History";
import Faqs from "./components/Faqs";
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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
