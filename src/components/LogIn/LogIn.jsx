import React from "react";

import "./LogIn.css"

const LogIn = () => {

    return(
        <form action="" className="Signup">
            <div className="input__container">
                <input type="text" placeholder="Email" className="input"/>
                <span className="icon__container"><img src="../img/email.png" alt="Icon" className="icon"/></span>
            </div>
            <span className="error">*esto es un error de ejemplo*</span>
            <div className="input__container">
                <input type="text" placeholder="Password" className="input"/>
                <span className="icon__container"><img src="../img/password.png" alt="Icon" className="icon" /></span>
            </div>
            <span className="error">*esto es un error de ejemplo*</span>
            <button className="btn__signup">Log In</button>
        </form>
    )
}

export default LogIn