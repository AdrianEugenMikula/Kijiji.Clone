import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostAd from "./components/CardComponent/PostAd";
import Register from "./components/Register";
import Login from './components/Login';
import CarsandVehicles from "./components/Products/Vehicles";
import { RealEstate } from "./components/Products/RealEstate";
import Jobs from "./components/Products/Jobs";
import Services from "./components/Products/Services";
import VacationRentals from "./components/Products/VacationRentals";
import Pets from "./components/Products/Pets"


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostAd/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/vehicles" element={<CarsandVehicles/>} />
        <Route path="/realestate" element={<RealEstate/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/rentals" element={<VacationRentals/>} />
        <Route path="/pets" element={<Pets/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
