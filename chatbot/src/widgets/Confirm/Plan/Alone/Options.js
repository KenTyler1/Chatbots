const Options = (props) => {
  return (
    <div className="options">
      <div className="stats">
        <p>Bạn có dự định đi vào khoảng thời gian nào nhỉ?</p>
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
