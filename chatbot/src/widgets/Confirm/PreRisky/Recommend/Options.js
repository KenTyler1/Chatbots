import { Link } from "react-router-dom";

const Options = (props) => {
  return (
    <div className="options">
      <div className="stats">
        <p>
          • Ngôi nhà của những Rondoval "Original‟, đã được tân trang lại để có
          phòng tắm lớn hơn với vòi sen trên cao. Những phòng trong khu vườn đã
          được nâng cấp lộng lẫy với khu bảo tồn hồ bơi riêng.
        </p>
      </div>
      <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/37/aa/5c/sandals-grande-antigua.jpg?w=1200&h=-1&s=1"
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
              <Link to="/products/638315b2f5ac696a2e61e5f7">{option.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
