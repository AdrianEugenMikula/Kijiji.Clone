//import Map from "./MapComponent/Map";
import "./Home.css";
import NavMenu from "./NavMenu";

import CardCarousel from "./CardComponent/CardCarousel";
import RecommendationsCarousel from "./CardComponent/RecommendationsCarousel";
import CardAutos from "./CardComponent/CardAutos";
import PopularItemsCard from "./CardComponent/PopularItemsCard";
import PopularItemsInCity from "./CardComponent/PopularItemsInCity";
import KijijiCentralCard from "./CardComponent/KijijiCentralCard";

const Home = () => {
  return (
    <>
      <NavMenu />
      <div className="mainContainer">
        <div className="heading1">
          <h2>
            <span>Is your</span>
            <span> moving day around the corner?</span>
            <span style={{ color: "#37A864" }}> Find or list your home</span>
            <span> today!</span>
          </h2>
        </div>
        <div className="coverpictures">
          <a href="#">
            <img
              className="img1"
              src="https://images.ctfassets.net/rb55mbb1m3hk/1XrNXMWt566zjqliWcaBLc/2d6af4a2b9d92ae63c52dcfd0d9d267d/Stocksy_txpfb02c43eo4K300_Medium_3793064.jpg"
            />
            <div>
              <span className="imgText">List your space</span>
            </div>
          </a>
        </div>
        <div className="coverpictures">
          <a href="#">
            <img
              className="img2"
              src="https://images.ctfassets.net/rb55mbb1m3hk/vkHHaRZahrMKlaBqxCaRy/f904805c70b26f561669be709197047e/Find_a_new_home_large.jpg"
            />
            <div>
              <span className="imgText">Find a new home</span>
            </div>
          </a>
        </div>
      </div>
      <div className="cardStyling">
        <h2>Recommended for you</h2>
        <div>
          <RecommendationsCarousel />
        </div>
      </div>
      <div className="cardStyling">
        <h2>Homepage Gallery</h2>
        <div>
          <CardCarousel />
        </div>
      </div>
      <div className="cardStyling">
        <h2>Popular in Autos in City of Montréal</h2>
        {/* <a href="#">Browse all Autos in City of Montréal</a> */}
        <div>
          <CardAutos />
        </div>
      </div>
      <div className="cardStyling">
        <h2>Popular in Buy and Sell in City of Montreal </h2>

        <div>
          <PopularItemsCard />
        </div>
      </div>
      <div className="banner">
        <div className="card-banner">
          <h1>Kijiji’s better when you’re a member</h1>
          <h2>
            See more relevant listings, find what you’re looking for quicker,
            and more!
          </h2>
          <button>Sign In</button>
        </div>
      </div>

      <div className="cardStyling">
        <h2>Popular in Real Estate in City of Montréal</h2>

        <div>
          <PopularItemsInCity />
        </div>
      </div>
      <div className="cardStyling">
        <h2>Kijijj Central</h2>
        <div>
            <KijijiCentralCard/>
        </div>
      </div>
       <div className="banner">
        <div className="card-banner">
          <h1>Take Canada's #1 Website with you</h1>
          <h2>
            Buy and sell new or used items wherever you go!
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;
