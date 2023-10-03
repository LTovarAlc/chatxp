import React from "react";

import "../ContentModal.css"

const BackgroundSettings = () => {
    return(
        <section className="settings__section">
            <h1 className="settings__subtitle">Customize backgrund</h1>
            <div className="settings__container-modal">
                <div className="settings__card-modal">Upload img</div>
                <div className="settings__card-modal">Change principal color</div>
                <div className="settings__card-modal">Change secundary color</div>
            </div>
        </section>
    )
}

export default BackgroundSettings