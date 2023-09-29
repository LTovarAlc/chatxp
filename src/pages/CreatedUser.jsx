import React from "react";
import { Link } from "react-router-dom";

import "./CreatedUser.css"

const CreatedUser = () => {
    return(
        <>
            <div className="container__welcome">
                <img src="./img/welcome.png" alt="Welcome" className="welcome" />
                <h1 className="welcome__text">Welcome!</h1>
                <Link to={"/dashboard"}><button className="btn__welcome">start chatting</button></Link>
            </div>
        </>
    )
}

export default CreatedUser