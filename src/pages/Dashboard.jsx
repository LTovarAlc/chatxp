import React from "react";
import RecentChat from "../components/RecentChats/RecentChats";
import ChatBox from "../components/chatBox/ChatBox";
import Settings from "../components/Settings/Settings";

import "./Dashboard.css"



const Dashboard = () => {
    return(
    <>
        <section className="section">
            <RecentChat/>
            <ChatBox/>
            <Settings/>
        </section>
    </>
    )
}

export default Dashboard 