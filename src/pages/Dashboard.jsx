import React from "react";
import RecentChat from "../components/RecentChats/RecentChats";
import ChatBox from "../components/chatBox/ChatBox";

import "./Dashboard.css"



const Dashboard = () => {
    return(
    <>
        <section className="section">
            <RecentChat/>
            <ChatBox/>
            <div className="settings">
                <h1 className="title__dashboard">Settings</h1>
            </div>
        </section>
    </>
    )
}

export default Dashboard 