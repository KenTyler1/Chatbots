import Options from "./Options";

const Beaches = (props) => {
  const options = [
    {
      id: 1,
      name: "Xem tour",
      handler: props.actionProvider.handleOrderExplore,
    },
    {
      id: 2,
      name: "Không, cảm ơn",
      handler: props.actionProvider.handleNo,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default Beaches;
