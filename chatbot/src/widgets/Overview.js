import Options from "./Options";

const GeneralOptions = (props) => {
  const options = [
    {
      id: 1,
      name: "Rồi nha bạn ơi",
      handler: props.actionProvider.handleConfirm,
    },
    {
      id: 2,
      name: "Chưa có, hiu hiu",
      handler: props.actionProvider.handleNotyet,
    },
    {
      id: 3,
      name: "Mình muốn xem các tour ",
      handler: props.actionProvider.handleOrder,
    },
    {
      id: 4,
      name: "Liên hệ với chúng tôi",
      handler: props.actionProvider.handleContact,
    },
    {
      id: 5,
      name: "Lịch sử hình thành BEACHES",
      handler: props.actionProvider.handleHistory,
    }
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
