import Options from "./Options";

const PreviousSea = (props) => {
  const options = [
    {
      id: 1,
      name: "Giới thiệu",
      handler: props.actionProvider.handleIntroduce,
    },
    {
      id: 2,
      name: "Không, cảm ơn",
      handler: props.actionProvider.handleNo,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default PreviousSea;
