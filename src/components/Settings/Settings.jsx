import React from "react";

import "./Settings.css"

const Settings = () => {
    return<>
        <div className="settings">
            <h1 className="title__dashboard">Settings</h1>
            <div className="settings__container">
                <div className="settings__card">
                    <span>General</span>
                    <img src="./img/settings.png" alt="" className="settings__icon"/>
                </div>
                <div className="settings__card">
                    <span>Edit background</span>
                    <img src="./img/background.png" alt="" className="settings__icon"/>
                </div>
                <div className="settings__card">
                    <span>Edit profile</span>
                    <img src="./img/userSettings.png" alt="" className="settings__icon"/>
                </div>
                <div className="settings__card">
                    <span>Terms & Conditions</span>
                    <img src="./img/T&C.png" alt="" className="settings__icon"/>
                </div>
                <div className="settings__card">
                    <span>Security</span>
                    <img src="./img/security.png" alt="" className="settings__icon"/>
                </div>
            </div>
        </div>
    </>
}

export default Settings