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
import Story from "../widgets/Story/Story";
import MoreStory from "../widgets/Story/More/MoreStory";
import Continue from "../widgets/Story/More/Continue/Continue";
import PreExplore from "../widgets/Confirm/PreExplore/PreExplore";
import PreResort from "../widgets/Confirm/PreResort/PreResort";
import PreviousSea from "../widgets/PreSea/PreSea";
import PreviousMountain from "../widgets/PreMountain/PreMountain";
import PreViewResort from "../widgets/Confirm/Resort/PreViewResort/PreViewResort";
import ViewResort from "../widgets/Confirm/Resort/PreViewResort/ViewResort/ViewResort";
import PreRisky from "../widgets/Confirm/PreRisky/PreRisky";
import Recommend1 from "../widgets/Confirm/PreRisky/Recommend/Recommend";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Chào mừng bạn đến với BEACHES. Nơi sẽ giúp cho chuyến đi du lịch của bạn trở nên dễ dàng và vui vẻ hơn.`
    ),
    createChatBotMessage(
      `Tôi xin tự giới thiệu, tôi là CrazyBot. Một trí tuệ nhân tạo được BEACHES tạo ra nhằm mục đích hỗ trợ bạn 24/7.`,
      {
        withAvatar: true,
        delay: 400,
      }
    ),
    createChatBotMessage(
      "Bạn đã chuẩn bị gì cho 1 chuyến đi du lịch đầy niềm vui và ấm áp này chưa ?",
      {
        withAvatar: true,
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
      widgetFunc: (props) => <PreExplore {...props} />,
    },
    {
      widgetName: "resort",
      widgetFunc: (props) => <PreResort {...props} />,
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
      widgetFunc: (props) => <PreviousSea {...props} />,
    },
    {
      widgetName: "mountain",
      widgetFunc: (props) => <PreviousMountain {...props} />,
    },
    {
      widgetName: "viewproducts",
      widgetFunc: () => <DeliveryLink />,
    },
    {
      widgetName: "story",
      widgetFunc: (props) => <Story {...props} />,
    },
    {
      widgetName: "morestory",
      widgetFunc: (props) => <MoreStory {...props} />,
    },
    {
      widgetName: "continue",
      widgetFunc: (props) => <Continue {...props} />,
    },
    {
      widgetName: "introduction",
      widgetFunc: (props) => <Explore {...props} />,
    },
    {
      widgetName: "introduction1",
      widgetFunc: (props) => <Resort {...props} />,
    },
    {
      widgetName: "introduction2",
      widgetFunc: (props) => <Beaches {...props} />,
    },
    {
      widgetName: "introduction3",
      widgetFunc: (props) => <Mountain {...props} />,
    },
    {
      widgetName: "viewresort",
      widgetFunc: (props) => <PreViewResort {...props} />,
    },
    {
      widgetName: "introresort",
      widgetFunc: (props) => <ViewResort {...props} />,
    },
    {
      widgetName: "viewresort",
      widgetFunc: (props) => <PreRisky {...props} />,
    },
    {
      widgetName: "viewresort1",
      widgetFunc: (props) => <Recommend1 {...props} />,
    },
  ],
  botName: "Crazy Bot",
};

export default config;
