import { Link } from "react-router-dom";

const Options = (props) => {
  return (
    <div className="options">
      <div className="stats">
        <p>
          Nhận một chuyến tham quan rộng lớn của Lac Tremblant chỉ trong một giờ
          trên du thuyền trên hồ này từ khu nghỉ mát Tremblant.
        </p>
      </div>
      <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/7a/b6/e7/mont-tremblant-lake-cruise.jpg?w=1200&h=-1&s=1"
        width={250}
        style={{ borderRadius: 20 }}
        alt={Image}
      />
      <h1 className="options-header">{props.title}</h1>
      <div className="options-container">
        {props.options.map((option) => {
          return (
            <div
              className="option-item"
              onClick={option.handler}
              key={option.id}
            >
              <Link to="/products/6388a3c3b2f38fed85728b23">{option.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
