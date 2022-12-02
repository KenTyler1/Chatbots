import Options from "./Options";

const Story = (props) => {
  const options = [
    {
      id: 1,
      name: "Xem danh sách các tour",
      handler: props.actionProvider.handleOrder,
    },
    {
      id: 2,
      name: "Tìm hiểu thêm về BEACHES",
      handler: props.actionProvider.handleMore,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default Story;
