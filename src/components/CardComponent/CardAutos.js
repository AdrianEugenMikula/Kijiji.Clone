import React from "react";
import "./CardAutos.css";

const CardAutos = () => {
  return (
    <>
      <section className="cards-wrapper">
        <div className="card-grid-space">
          <a
            className="card"
            href="#"
            style={{
              backgroundImage: `url(https://ca.classistatic.com/service-static/frontend-service/kijiji-autos-en-2x.f8da4482.webp)`, width:'200px', height:'120px',
            }}
          >
          </a>
        </div>
        <div className="card-grid-space">
          <a
            className="card"
            href="#"
            style={{
              backgroundImage: `url(https://ca.classistatic.com/service-static/frontend-service/cars.e83b5592.webp)`, width:'200px', height:'120px',
            }}
          >
            <div>
              <p>
               Cars & Trucks
              </p>
            </div>
          </a>
        </div>
        <div className="card-grid-space">
          <a
            className="card"
            href="#"
            style={{
              backgroundImage: `url(https://ca.classistatic.com/service-static/frontend-service/classic-cars.ba397828.webp)`, width:'200px', height:'120px',
            }}
          >
            <div>
              <p>
               Classic Cars
              </p>
            </div>
          </a>
        </div>
        <div className="card-grid-space">
          <a
            className="card"
            href="https://codetheweb.blog/2017/10/06/html-syntax/"
            style={{
              backgroundImage: `url(https://ca.classistatic.com/service-static/frontend-service/rvs.32d39187.webp)`, width:'200px', height:'120px',
            }}
          >
            <div>
              <p>
                RV's, Campers & Trailers
              </p>
            </div>
          </a>
        </div>
        <div className="card-grid-space">
          <a
            className="card"
            href="https://codetheweb.blog/2017/10/06/html-syntax/"
            style={{
              backgroundImage: `url(https://ca.classistatic.com/service-static/frontend-service/boats.527789ba.webp)`, width:'200px', height:'120px',
            }}
          >
            <div>
              <p>
               Boats & Watercraft
              </p>
            </div>
          </a>
        </div>
        <div className="card-grid-space">
          <a
            className="card"
            href="#"
            style={{
              backgroundImage: `url(https://ca.classistatic.com/service-static/frontend-service/motorcycles.6c1e577f.webp)`, width:'200px', height:'120px',
            }}
          >
            <div>
              <p>
                Motorcycles
              </p>
            </div>
          </a>
        </div>
        <div className="card-grid-space">
          <a
            className="card"
            href="#"
            style={{
              backgroundImage: `url(https://ca.classistatic.com/service-static/frontend-service/auto-parts.2afd3e29.webp)`, width:'200px', height:'120px',
            }}
          >
            <div>
              <p>
               Vehicle Parts, Tires, & Accessories
              </p>
            </div>
          </a>
        </div>
        <div className="card-grid-space">
          <a
            className="card"
            href="#"
            style={{
              backgroundImage: `url(https://ca.classistatic.com/service-static/frontend-service/heavy-equipment.07c8a105.webp)`, width:'200px', height:'120px',
            }}
          >
            <div>
              <p>
               Heavy Equipment
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default CardAutos;
