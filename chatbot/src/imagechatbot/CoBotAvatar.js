import React from "react";

import BotAvatar from '../assets/icon.png';

const CoBotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div
        className="react-chatbot-kit-chat-bot-avatar-container"
        style={{ background: "none" }}
      >
        <img alt="BotAvatar" src={BotAvatar}  width={100}/>
      </div>
    </div>
  );
};

export default CoBotAvatar;