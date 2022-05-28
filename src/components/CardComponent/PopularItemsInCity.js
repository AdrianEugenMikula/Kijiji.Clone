import React from "react";
import "./CardAutos.css";

const PopularItemsInCity = () => {
  return (
    <section className="cards-wrapper">
      <div className="popularItems-grid-space">
        <a
          className="card"
          href="#"
          style={{
            backgroundImage: `url(https://ca.classistatic.com/service-static/frontend-service/condos.90e0c8eb.webp)`,
          }}
        >
          <div>
            <p>Appartments & Condos for rent</p>
          </div>
        </a>
      </div>
      <div className="popularItems-grid-space">
        <a
          className="card"
          href="#"
          style={{
            backgroundImage: `url(https://ca.classistatic.com/service-static/frontend-service/houses-rent.89f3ae17.webp)`,
          }}
        >
          <div>
            <p>Houses for Rent</p>
          </div>
        </a>
      </div>
      <div className="popularItems-grid-space">
        <a
          className="card"
          href="#"
          style={{
            backgroundImage: `url(https://ca.classistatic.com/service-static/frontend-service/houses-sale.64bbb9ed.webp)`,
          }}
        >
          <div>
            <p>Houses for Sale</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default PopularItemsInCity;
