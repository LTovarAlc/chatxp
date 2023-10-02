import React from "react";
import RecentChat from "../components/RecentChats/RecentChats";

import "./Dashboard.css"


const Dashboard = () => {
    return(
    <>
        <section className="section">
            <RecentChat/>
            <div className="chat">
                <h1 className="title__dashboard">Chat</h1>
                
            </div>
            <div className="settings">
                <h1 className="title__dashboard">Settings</h1>
            </div>
        </section>
    </>
    )
}

export default Dashboard 