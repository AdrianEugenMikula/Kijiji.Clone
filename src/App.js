import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostAd from "./components/CardComponent/PostAd";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostAd/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
