import React from "react";

import "./RecentChats.css"

const RecentChat = () => {
  return (
    <>
      <div className="chats">
        <h1 className="title__dashboard">Recent chats</h1>
        <div className="search__container">
          <input
            type="search"
            placeholder="Look a chat..."
            className="input__search"
          />
          <img src="./img/search.png" alt="Search" className="search" />
        </div>
        <div className="conversation__container">
          <button className="addFriend" title="Add Friend/chat">+</button>
          <div className="chat__container">
            <img src="./img/user.png" alt="User" className="user__image" />
            <div className="chat__info">
              <h1 className="chat__name">CR7</h1>
              <span className="last__message">*ejemplo de mensaje*</span>
            </div>
          </div>
          <div className="chat__container">
            <img src="./img/user.png" alt="User" className="user__image" />
            <div className="chat__info">
              <h1 className="chat__name">CR7</h1>
              <span className="last__message">*ejemplo de mensaje*</span>
            </div>
          </div>
          <div className="chat__container">
            <img src="./img/user.png" alt="User" className="user__image" />
            <div className="chat__info">
              <h1 className="chat__name">CR7</h1>
              <span className="last__message">*ejemplo de mensaje*</span>
            </div>
          </div>
          <div className="chat__container">
            <img src="./img/user.png" alt="User" className="user__image" />
            <div className="chat__info">
              <h1 className="chat__name">CR7</h1>
              <span className="last__message">*ejemplo de mensaje*</span>
            </div>
          </div>
          <div className="chat__container">
            <img src="./img/user.png" alt="User" className="user__image" />
            <div className="chat__info">
              <h1 className="chat__name">CR7</h1>
              <span className="last__message">*ejemplo de mensaje*</span>
            </div>
          </div>
          <div className="chat__container">
            <img src="./img/user.png" alt="User" className="user__image" />
            <div className="chat__info">
              <h1 className="chat__name">CR7</h1>
              <span className="last__message">*ejemplo de mensaje*</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentChat;
