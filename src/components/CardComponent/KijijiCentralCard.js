import React from "react";
import "./CardAutos.css";

const KijijiCentralCard = () => {
  return (
    <section className="cards-wrapper">
      <div className="popularItems-grid-space">
        <a
          className="card"
          href="#"
          style={{
            backgroundImage: `url(https://ca.classistatic.com/service-static/frontend-service/kijiji-central-save-money-from-home.ef18d7a7.webp)`,
          }}
        >
          <div>
            <p>How to make and save money from home</p>
          </div>
        </a>
      </div>
      <div className="popularItems-grid-space">
        <a
          className="card"
          href="#"
          style={{
            backgroundImage: `url(https://ca.classistatic.com/service-static/frontend-service/kijiji-central-find-perfect-apartment.2b441881.webp)`,
          }}
        >
          <div>
            <p>How to find the perfect apartment for rent</p>
          </div>
        </a>
      </div>
      <div className="popularItems-grid-space">
        <a
          className="card"
          href="#"
          style={{
            backgroundImage: `url(https://ca.classistatic.com/service-static/frontend-service/kijiji-central-8-essential-tools.b395337e.webp)`,
          }}
        >
          <div>
            <p>8 essential tools to have on hand for jobs around your home</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default KijijiCentralCard;
