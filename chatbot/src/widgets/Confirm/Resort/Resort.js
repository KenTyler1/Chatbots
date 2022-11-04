import Options from "./Options";

const Resort = (props) => {
  const options = [
    {
      id: 1,
      name: "Xem tour",
      handler: props.actionProvider.handleOrderResort,
    },
    {
      id: 2,
      name: "Quay lại",
      handler: props.actionProvider.handleBack,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default Resort;
