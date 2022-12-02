const Options = (props) => {
  return (
    <div className="options">
      <div className="stats">
        <p>
          Chuyến tham quan bằng thuyền ngắm hoàng hôn trên vịnh EMERALD trong
          GRATEFUL RED
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
              {option.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
