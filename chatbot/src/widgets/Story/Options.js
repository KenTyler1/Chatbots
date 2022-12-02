import logo from "../../assets/logo.png";

const Options = (props) => {
  return (
    <div className="options">
      <img src={logo} width={250} style={{ borderRadius: 20 }} alt={Image} />
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
