
const Options = (props) => {
  return (
    <div className="options">
      <div className="stats">
        <p>BEACHES xin gửi bạn một vài điểm du lịch để bạn tham khảo nha</p>
      </div>
      <img
        src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/30/aa/f9.jpg"
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
                {option.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
