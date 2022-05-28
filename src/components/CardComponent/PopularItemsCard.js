import React from 'react'
import './CardAutos.css'

const PopularItemsCard = () => {
  return (
    <section className="cards-wrapper">
        <div className="popularItems-grid-space">
          <a
            className="card"
            href="#"
            style={{
              backgroundImage: `url(https://ca.classistatic.com/service-static/frontend-service/furniture.2f6e93db.webp)`,
            }}
          >
            <div>
              <p>
              Furniture
              </p>
            </div>
          </a>
        </div>
        <div  className="popularItems-grid-space">
          <a
            className="card"
            href="#"
            style={{
              backgroundImage: `url(https://ca.classistatic.com/service-static/frontend-service/home-outdoor.c97f1a4a.webp)`,
            }}
          >
            <div>
              <p>
               Home & Outdoor & Garden
              </p>
            </div>
          </a>
        </div>
        <div  className="popularItems-grid-space">
          <a
            className="card"
            href="#"
            style={{
              backgroundImage: `url(https://ca.classistatic.com/service-static/frontend-service/tools.d6cf210a.webp)`,
            }}
          >
            <div>
              <p>
              Tools
              </p>
            </div>
          </a>
        </div>
      </section>
  )
}

export default PopularItemsCard