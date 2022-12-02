

const Options = (props) => {
  return (
    <div className="options">
      <div className="stats">
        <p>VINPEARL RESORT & SPA PHÚ QUỐC</p>
      </div>
      <div>
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/28/ec/88/pearl-club-vinpearl-membership.jpg?w=1200&h=-1&s=1"
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
              {option.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
