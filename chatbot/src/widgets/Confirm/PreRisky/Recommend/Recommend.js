import Options from "./Options";

const Recommend = (props) => {
  const options = [
    {
      id: 1,
      name: "Chi tiết tour",
      handler: props.actionProvider.handlerDetail,
    },
    {
      id: 2,
      name: "Quay lại",
      handler: props.actionProvider.handleBack,
    },
  ];
  return <Options options={options} title="Options" {...props}/>;
};

export default Recommend;
