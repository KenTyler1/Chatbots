import React, { useState } from "react";
import pic from "./assets/chatbot.jpg";
import Chatbot from "react-chatbot-kit";
import Fade from "react-reveal/Fade";
import ActionProvider from "./config/ActionProvider";
import config from "./config/config";
import MessageParser from "./config/MessageParser";
import "react-chatbot-kit/build/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/routes";
import DefaultLayout from "./layouts/DefaultLayout";
import { Fragment } from "react";
import { DataProvider } from "./components/cart/DataProvider";

import "./App.css";

function App() {
  const [state, setState] = useState(false);

  const handleShowBot = () => {
    setState(!state);
  };

  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };

  return (
    <DataProvider>
      <Router>
        <div className="default">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>

          {state && (
            <Fade big>
              <div className="app-chatbot-container">
                <Chatbot
                  headerText="Crazy Bot"
                  placeholderText="Nhắn tin cho Bot"
                  config={config}
                  messageParser={MessageParser}
                  messageHistory={loadMessages()}
                  saveMessages={saveMessages}
                  actionProvider={ActionProvider}
                  runInitialMessagesWithHistory
                />
              </div>
            </Fade>
          )}
          <img
            width={120}
            style={{
              position: "fixed",
              right: 20,
              bottom: 20,
              cursor: "pointer",
              zIndex: 99,
            }}
            className="picture"
            src={pic}
            alt="Career Guidance Bot"
            onClick={handleShowBot}
          />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
