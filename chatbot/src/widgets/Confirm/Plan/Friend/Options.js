const Options = (props) => {
  return (
    <div className="options">
      <div className="stats">
        <p>Bạn và hội bạn đang có dự định đi du lịch trong khoảng thời gian nào?</p>
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
