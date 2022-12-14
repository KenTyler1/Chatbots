import { Link } from "react-router-dom";

const Options = (props) => {
  return (
    <div className="options">
      <div className="stats">
        <p>
          Nằm trong công viên với những khu vườn kiểng tươi tốt ở Trung Tâm
          Thành Phố trên Khu Ga Xe Lửa Cũ
        </p>
      </div>
      <div>
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/b9/93/58/caption.jpg?w=1100&h=-1&s=1"
          width={250}
          style={{ borderRadius: 20 }}
          alt={Image}
        />
      </div>
      <h1 className="options-header">{props.title}</h1>
      <div className="options-container">
        {props.options.map((option) => {
          return (
            <div
              className="option-item"
              onClick={option.handler}
              key={option.id}
            >
              <Link
                to="products/6384628d50f379737b888c80"
                style={{ fontSize: 12 }}
              >
                {option.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
