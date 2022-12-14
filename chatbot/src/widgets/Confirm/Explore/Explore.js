import Options from "./Options";

const Explore = (props) => {
  const options = [
    {
      id: 1,
      name: "Chi tiết tour",
      handler: props.actionProvider.handleOrderExplore,
    },
    {
      id: 2,
      name: "Quay lại",
      handler: props.actionProvider.handleBack,
    },
  ];
  return <Options options={options} title="Options" {...props}/>;
};

export default Explore;
