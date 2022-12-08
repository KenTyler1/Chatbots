import React, { useContext } from "react";
import "./ImgCarouselStyles.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import { DataContext } from "../cart/DataProvider";
import { Link } from "react-router-dom";

function ImgCarousel() {
  const value = useContext(DataContext);
  const [products] = value.products;

  return (
    <div name="carousel" className="container">
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={false}
        infiniteLoop={true}
      >
        {products.slice(0, 3).map((product) => (
          <Link to={"/products/" + product._id}>
            <div>
              <img src={product.images[2]} alt="/" />
              <p className="legend">{product.title}</p>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
