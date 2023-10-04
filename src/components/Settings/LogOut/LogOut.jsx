import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../Modal/Modal";

import "./LogOut.css"

const LogOut = () => {

    const navigate = useNavigate();

    const handleLogOut = () => {
        navigate("/")
    }
    return(
        <>
            <div className="logout__container">
                <h3 className="logout__title">Are you sure you want to log out?</h3>
                <div className="btns__container">
                    <button className="yes" onClick={handleLogOut}>Yes</button>
                </div>
            </div>
        </>
    )
}

export default LogOut