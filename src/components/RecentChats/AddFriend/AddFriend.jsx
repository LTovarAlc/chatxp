import React, { useState } from "react";

import "./AddFriendo.css";

const AddFriend = () => {
  const [user, setUser] = useState("");
  const [tag, setTag] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !tag) {
      setError("Please enter a valid user and tag.");
      return;
    }

    try {
      const response = await fetch("https://fake-apicxpusers.vercel.app/");
      const users = await response.json();

      const userExists = users.some((u) => u.username === user);
      const tagExists = users.some((u) => u.tag === tag);

      if (userExists && tagExists) {
        console.log("Invitation sent");
        setError("");
        setUser("")
        setTag("")
      } else {
        setError("Invalid username or tag.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while processing your request.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="formAddF">
        <div className="input__container-modal">
          <input
            type="text"
            className="input__modal"
            placeholder="User"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <img src="./img/user.png" alt="" className="user" />
        </div>
        <div className="input__container-modal">
          <input
            type="text"
            className="input__modal"
            placeholder="Tag (#0000)"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
          <img src="./img/tag.png" alt="" className="user" />
        </div>
        <button type="submit" className="sendFR">
          Send request
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </>
  );
};

export default AddFriend;
