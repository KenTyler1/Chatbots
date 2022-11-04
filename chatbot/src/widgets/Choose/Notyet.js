import Options from "../../widgets/Options";

const Notyet = (props) => {
  const options = [
    {
      id: 1,
      name: "Có nha",
      handler: props.actionProvider.handleBack,
    },
    {
      id: 2,
      name: "Không, cảm ơn",
      handler: props.actionProvider.handleNo,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default Notyet;
