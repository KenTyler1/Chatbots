import React, { useContext } from "react";
import "./DestinationsStyles.css";
import { DataContext } from "../cart/DataProvider";
import { Link } from "react-router-dom";

function Destinations() {
  const value = useContext(DataContext);
  const [products] = value.products;

  return (
    <div name="destinations" className="destinations">
      <div className="container">
        <h1>Tour du lịch giá rẻ nhất</h1>
        <p>Phù hợp cho mọi lứa tuổi</p>
        {products.slice(84, 85).map((item) => (
          <>
            <div className="img-container" key={item._id}>
              <img
                className="span-3 image-grid-row-2"
                src={item.images[1]}
                alt="/"
              />
              <img src={item.images[2]} alt="/" />
              <img src={item.images[3]} alt="/" />
              <img src={item.images[4]} alt="/" />
              <img src={item.images[5]} alt="/" />
            </div>
            <Link
              to={"/products/" + item._id}
              style={{ textTransform: "none" }}
            >
              <p style={{ fontSize: 20 }}>Khám phá tour du lịch</p>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
