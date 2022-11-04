import { Link } from "react-router-dom";

const Options = (props) => {
  return (
    <div className="options">
      <div className="stats">
        <p>Domaine Saint-Bernard</p>
      </div>
      <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/3f/42/82/domaine-saint-bernard.jpg?w=1200&h=-1&s=1"
        width={250}
        style={{ borderRadius: 20 }}
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
              <Link
                to="products/635e97a81447e9f3faff9ad2"
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
