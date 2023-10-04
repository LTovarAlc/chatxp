import { useState } from "react";
import React from "react";
import "./Settings.css";
import Modal from "../Modal/Modal";
import GeneralSettings from "./General/GeneralSettings";
import BackgroundSettings from "./Background/BackgroundSettings";
import ProfileSettings from "./Profile/ProfileSettings";
import TMSettings from "./T&M/T&M";
import SecuritySettings from "./SecuritySettings/Security";

const Settings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({ title: "", content: "" });

  // open Modal
  const openModal = (title, content) => {
    setModalInfo({ title, content });
    setIsModalOpen(true);
  };

  // close Modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="settings">
        <h1 className="title__dashboard">Settings</h1>
        <div className="profile__container">
          <div className="profile__data">
            <img src="./img/user.png" className="user" alt="User" />
            <span className="profile__name">User</span>
          </div>
          <button className="options" title="Log Out" onClick={() => openModal("Log Out", "Log Out")}>
            <img
              src="./img/logout.png"
              alt="Options"
              className="options__img"
            />
          </button>
        </div>
        <div className="settings__container">
          <div className="settings__card" onClick={() => openModal("General", <GeneralSettings/>)}>
            <span>General</span>
            <img src="./img/settings.png" alt="" className="settings__icon" />
          </div>
          <div className="settings__card" onClick={() => openModal("Edit background", <BackgroundSettings/>)}>
            <span>Edit background</span>
            <img src="./img/background.png" alt="" className="settings__icon" />
          </div>
          <div className="settings__card" onClick={() => openModal("Edit profile", <ProfileSettings/>)}>
            <span>Edit profile</span>
            <img src="./img/userSettings.png" className="settings__icon"/>
          </div>
          <div className="settings__card" onClick={() => openModal("Terms & Conditions", <TMSettings/>)}>
            <span>Terms & Conditions</span>
            <img src="./img/T&C.png" alt="" className="settings__icon" />
          </div>
          <div className="settings__card" onClick={() => openModal("Security", <SecuritySettings/>)}>
            <span>Security</span> 
            <img src="./img/security.png" alt="" className="settings__icon" />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          title={modalInfo.title}
          content={modalInfo.content}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Settings;
