import Options from "./Options";

const Mountain = (props) => {
  const options = [
    {
      id: 1,
      name: "Chi tiết tour",
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

export default Mountain;
