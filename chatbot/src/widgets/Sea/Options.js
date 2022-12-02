import { Link } from "react-router-dom";

const Options = (props) => {
  return (
    <div className="options">
      <div className="stats">
        <p>
          - Nâng cao yếu tố lãng mạn trong chuyến đi đến Hồ Tahoe với dịch vụ thuê
          thuyền riêng này. 
          &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          - Bỏ lại đám đông phía sau bằng cách dong buồm trên
          một chiếc thuyền trang nhã.
        </p>
      </div>
      <img
        src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/92/f6/49.jpg"
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
