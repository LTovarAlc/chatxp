import React from "react";

import "../ContentModal.css"

const SecuritySettings = () => {
    return(
        <section className="settings__section">
            <h1 className="settings__subtitle">General settings</h1>
            <div className="settings__container-modal">
                <div className="settings__card-modal">Email</div>
                <div className="settings__card-modal">Password</div>
                <div className="settings__card-modal">Reset email</div>
                <div className="settings__card-modal">Reset password</div>
                <div className="settings__card-modal">Report user</div>
                <div className="settings__card-modal">Report a problem</div>
            </div>

        </section>
    )
}

export default SecuritySettings