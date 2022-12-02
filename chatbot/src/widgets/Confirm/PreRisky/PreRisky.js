import Options from "./Options";

const PreRisky = (props) => {
  const options = [
    {
      id: 1,
      name: "Giới thiệu",
      handler: props.actionProvider.handleIntroduction6,
    },
    {
      id: 2,
      name: "Quay lại",
      handler: props.actionProvider.handleBack,
    },
  ];
  return <Options options={options} title="Options" {...props}/>;
};

export default PreRisky;
