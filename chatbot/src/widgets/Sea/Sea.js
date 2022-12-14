import Options from "./Options";

const Beaches = (props) => {
  const options = [
    {
      id: 1,
      name: "Xem chi tiết",
      handler: props.actionProvider.handleDetailBeaches,
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
