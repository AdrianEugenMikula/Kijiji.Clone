import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="Main">
        <div>
          <Navbar />
          <div className="Home">
            <Home />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
