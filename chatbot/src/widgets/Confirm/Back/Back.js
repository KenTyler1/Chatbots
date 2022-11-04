import Options from "./Options";

const Explore = (props) => {
  const options = [
    {
      id: 1,
      name: "Gia đình",
      handler: props.actionProvider.handleFamily,
    },
    {
      id: 2,
      name: "Bạn bè",
      handler: props.actionProvider.handleFriend,
    },
    {
        id: 3,
        name: "Một mình",
        handler: props.actionProvider.handleAlone,
      },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default Explore;
