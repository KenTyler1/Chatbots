import { Link } from "react-router-dom";

const Options = (props) => {
  return (
    <div className="options">
      <div className="stats">
        <p>BEACHES xin gửi bạn một vài điểm du lịch để bạn tham khảo nha</p>
      </div>
      <div>
        <img
          src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/6e/ef/ac.jpg"
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
                to="products/635e97a81447e9f3faff9ad1"
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