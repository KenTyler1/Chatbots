import Options from "../../widgets/Options";

const OptionsConfirm = (props) => {
  const options = [
    {
      id: 1,
      name: "Du lịch thám hiểm",
      handler: props.actionProvider.handleExplore,
    },
    {
      id: 2,
      name: "Du lịch nghỉ dưỡng",
      handler: props.actionProvider.handleResort,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default OptionsConfirm;
