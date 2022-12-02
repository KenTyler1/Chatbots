import Options from "./Options";

const More = (props) => {
  const options = [
    {
      id: 1,
      name: "Tiếp tục",
      handler: props.actionProvider.handleContinue,
    },
    {
      id: 2,
      name: "Dừng lại ở đây",
      handler: props.actionProvider.handleStopHere,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default More;
