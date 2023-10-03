import React from "react";

import "./Modal.css"

const Modal = ({title, content, onClose}) => {
    return(
        <div className="modal">
            <div className="modal__content">
                <h2 className="title__modal">{title}</h2>
                <section>{content}</section>
                <button onClick={onClose} className="btn__close">Close</button>
            </div>
        </div>
    )
}

export default Modal