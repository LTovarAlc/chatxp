import React from "react";

import "../ContentModal.css"

const GeneralSettings = () => {
    return(
        <section className="settings__section">
            <h1 className="settings__subtitle">General settings</h1>
            <div className="settings__container-modal">
                <div className="settings__card-modal">Languaje & region</div>
                <div className="settings__card-modal">Conversation history</div>
                <div className="settings__card-modal">Permissions management</div>
                <div className="settings__card-modal">Contact and support information</div>
                <div className="settings__card-modal">Third Party Connections</div>
                <div className="settings__card-modal">Account management</div>
            </div>

        </section>
    )
}

export default GeneralSettings