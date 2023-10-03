import React from "react";

import "../ContentModal.css"

const ProfileSettings = () => {
    return(
        <section className="settings__section">
            <h1 className="settings__subtitle">General settings</h1>
            <div className="settings__container-modal">
                <div className="settings__card-modal">Upload Photo/avatar</div>
                <div className="settings__card-modal">Change name</div>
                <div className="settings__card-modal">Email</div>
            </div>

        </section>
    )
}

export default ProfileSettings