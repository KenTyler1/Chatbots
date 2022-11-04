import Options from "./Options";

const Family = (props) => {
  const options = [
    {
      id: 1,
      name: "Tháng 11-12",
      handler: props.actionProvider.handleRecommend,
    },
    {
      id: 2,
      name: "Tháng 1-2",
      handler: props.actionProvider.handleRecommend,
    },
    {
        id: 3,
        name: "Tháng 3-4",
        handler: props.actionProvider.handleRecommend,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default Family;
