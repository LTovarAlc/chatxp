import React from "react";

import "./Dashboard.css"

const Dashboard = () => {
    return(
    <>
        <section className="section">
            <div className="chats">
                <h1 className="title__dashboard">Recent chats</h1>
                <div className="search__container">
                    <input type="search" placeholder="Look a chat..." className="input__search"/>
                    <img src="./img/search.png" alt="Search" className="search" />
                </div>
                <div className="conversation__container">
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
            <div className="chat">
                <h1 className="title__dashboard">user/grupo</h1>
            </div>
            <div className="settings">
                <h1 className="title__dashboard">Settings</h1>
            </div>
        </section>
    </>
    )
}

export default Dashboard 