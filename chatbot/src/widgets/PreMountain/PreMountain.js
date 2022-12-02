import Options from "./Options";

const PreviousMountain = (props) => {
  const options = [
    {
      id: 1,
      name: "Giới thiệu",
      handler: props.actionProvider.handleDetailMountain,
    },
    {
      id: 2,
      name: "Không, cảm ơn",
      handler: props.actionProvider.handleNo,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default PreviousMountain;
