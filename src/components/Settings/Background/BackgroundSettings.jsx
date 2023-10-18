import React, { useEffect, useState } from "react";
import "../ContentModal.css";

const BackgroundSettings = () => {
    const [primaryColor, setPrimaryColor] = useState("#000356");
    const [secondaryColor, setSecondaryColor] = useState("#9224D4");

    const updateStyles = () => {
        document.body.style.background = `linear-gradient(180deg, ${primaryColor} 5.84%, ${secondaryColor} 82.84%)`;
        // Almacena los colores del usuario para no perderlos
        localStorage.setItem("primaryColor", primaryColor);
        localStorage.setItem("secondaryColor", secondaryColor);
    };

    useEffect(() => {
        const storedPrimaryColor = localStorage.getItem("primaryColor");
        const storedSecondaryColor = localStorage.getItem("secondaryColor");

        if (storedPrimaryColor) {
            setPrimaryColor(storedPrimaryColor);
        }
        if (storedSecondaryColor) {
            setSecondaryColor(storedSecondaryColor);
        }

        updateStyles();
    }, [primaryColor, secondaryColor]);

    return (
        <section className="settings__section">
            <h1 className="settings__subtitle">Customize background</h1>
            <div className="settings__container-modal">
                <div className="settings__card-modal">Upload img</div>
                <div className="settings__card-modal">
                    <label htmlFor="primaryColor">Change primary color:</label>
                    <input
                        type="color"
                        id="primaryColor"
                        value={primaryColor}
                        onChange={(e) => {
                            setPrimaryColor(e.target.value);
                            updateStyles();
                        }}
                    />
                </div>
                <div className="settings__card-modal">
                    <label htmlFor="secondaryColor">Change secondary color:</label>
                    <input
                        type="color"
                        id="secondaryColor"
                        value={secondaryColor}
                        onChange={(e) => {
                            setSecondaryColor(e.target.value);
                            updateStyles();
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default BackgroundSettings;
