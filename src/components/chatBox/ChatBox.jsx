import React from "react";

import "./ChatBox.css";

const ChatBox = () => {
  return (
    <>
      <div className="chat">
                <h1 className="title__dashboard">Chat</h1>
                <div className="chat__box">
                    <div className="message__box">
                        <div className="info__container">
                            <img src="./img/user.png" className="user__image" alt="User" />
                            <span className="name">USER</span>
                        </div>
                    </div>
                    <div className="input__message">
                        <input type="text" placeholder="Type a message"  className="message"/>
                        <button className="sendMessage"><img src="./img/send.png" alt="" className="send__icon" /></button>
                    </div>
                </div>
            </div>
    </>
  );
};

export default ChatBox;
