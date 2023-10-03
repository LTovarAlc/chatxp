import React from "react";

import "./Modal.css"

const Modal = ({title, content, onClose}) => {
    return(
        <div className="modal">
            <div className="modal__content">
                <h2>{title}</h2>
                <section>{content}</section>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default Modal