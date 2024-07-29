import React, { useEffect, useRef } from "react";
import "../chatPage/chatPage.css";
import NewPromptPage from "../../components/NewPrompt/NewPromptPage";
const chatPage = () => {

  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test Message from ai</div>

          <div className="message user">
            Test Message from ai Test Message from ai Test Message from ai Test
            Message from ai Test Message from ai Test Message from ai Test Message from ai
            Test Message from ai Test Message from ai Test Message from ai
          </div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message</div>
          <div className="message user">Test Message from user</div>

          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message</div>
          <div className="message user">Test Message from user</div>

          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message</div>
          <div className="message user">Test Message from user</div>

          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message</div>
          <div className="message user">Test Message from user</div>

          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message</div>
          <div className="message user">Test Message from user</div>

          <NewPromptPage/>

          
        </div>
      </div>
    </div>
  );
};

export default chatPage;
