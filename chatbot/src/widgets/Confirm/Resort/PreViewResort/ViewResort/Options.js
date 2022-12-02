import {Link} from 'react-router-dom';


const Options = (props) => {
  return (
    <div className="options">
      <div className="stats">
        <p>
          Phú Quốc—một hòn đảo cát trắng bình dị gần biên giới Campuchia—có cả
          vẻ đẹp tự nhiên lẫn ý nghĩa văn hóa.
        </p>
      </div>
      <div>
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/42/71/da/vinpearl-resort-spa-phu.jpg?w=1200&h=-1&s=1"
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
              <Link to="/products/63863fb293228713acd8b32c">{option.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
