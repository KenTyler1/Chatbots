// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import Overview from "../widgets/Overview";
import CoBotAvatar from "../imagechatbot/CoBotAvatar";
import Contact from "../widgets/Contact";
import Confirm from "../widgets/Confirm/Confirm";
import Notyet from "../widgets/Choose/Notyet";
import Explore from "../widgets/Confirm/Explore/Explore";
import Resort from "../widgets/Confirm/Resort/Resort";
import Back from "../widgets/Confirm/Back/Back";
import Family from "../widgets/Confirm/Plan/Family/Family";
import Friend from "../widgets/Confirm/Plan/Friend/Friend";
import Alone from "../widgets/Confirm/Plan/Alone/Alone";
import Recommend from "../widgets/Confirm/Plan/Recommend/Recommend";
import Rating from "../widgets/Rating/Rating";
import Beaches from "../widgets/Sea/Sea";
import Mountain from "../widgets/Mountain/Mountain";
import DeliveryLink from "../widgets/Link/DeliveryLink"; 

const config = {
  initialMessages: [
    createChatBotMessage(`Chào bạn, tôi là AI. Rất vui được hỗ trợ bạn.`),
    createChatBotMessage(
      "Mùa đông đến rồi bạn đã chuẩn bị gì cho 1 chuyến đi du lịch đầy ấm áp cho mùa đông này chưa ?",
      {
        withAvatar: false,
        delay: 400,
        widget: "overview",
      }
    ),
  ],
  state: {},
  customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["messages"],
    },
    {
      widgetName: "confirm",
      widgetFunc: (props) => <Confirm {...props} />,
    },
    {
      widgetName: "notyet",
      widgetFunc: (props) => <Notyet {...props} />,
    },
    {
      widgetName: "contact",
      widgetFunc: () => <Contact />,
    },
    {
      widgetName: "explore",
      widgetFunc: (props) => <Explore {...props} />,
    },
    {
      widgetName: "resort",
      widgetFunc: (props) => <Resort {...props} />,
    },
    {
      widgetName: "back",
      widgetFunc: (props) => <Back {...props} />,
    },
    {
      widgetName: "family",
      widgetFunc: (props) => <Family {...props} />,
    },
    {
      widgetName: "friend",
      widgetFunc: (props) => <Friend {...props} />,
    },
    {
      widgetName: "alone",
      widgetFunc: (props) => <Alone {...props} />,
    },
    {
      widgetName: "recommend",
      widgetFunc: (props) => <Recommend {...props} />,
    },
    {
      widgetName: "rating",
      widgetFunc: () => <Rating />,
    },
    {
      widgetName: "beaches",
      widgetFunc: (props) => <Beaches {...props}/>,
    },
    {
      widgetName: "mountain",
      widgetFunc: (props) => <Mountain {...props}/>,
    },
    {
      widgetName: "viewproducts",
      widgetFunc: () => <DeliveryLink />,
    },
  ],
  botName: "Crazy Bot",
};

export default config;
