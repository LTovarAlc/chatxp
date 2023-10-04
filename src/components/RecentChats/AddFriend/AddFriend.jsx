import React from "react";

import "./AddFriendo.css"

const AddFriend = () => {
    return(
        <>
            <form action="" className="formAddF">
                <div className="input__container-modal">
                    <input type="text" className="input__modal" placeholder="User" />
                    <img src="./img/user.png" alt="" className="user"/>
                </div>
                <div className="input__container-modal">
                    <input type="text" className="input__modal" placeholder="Tag (#0000)"/>
                    <img src="./img/tag.png" alt="" className="user" />
                </div>
                <button className="sendFR">Send request</button>
            </form>
        </>
    )
}

export default AddFriend