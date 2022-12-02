import Options from "./Options";

const Continue = (props) => {
  const options = [
    {
      id: 1,
      name: "Khám phá các tour ",
      handler: props.actionProvider.handleOrder,
    },
    {
      id: 2,
      name: "Dừng lại ở đây",
      handler: props.actionProvider.handleStopHere,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default Continue;
