import React from "react";

export const Cards = ({ name, role, about, img }) => {
  return (
    <div className="card">
      <div className="profile">
        <img
          src={img}
          alt="Profile"
        />
        <h2>{name}</h2>
        <p>{role}</p>
      </div>

      <div className="about">
        <h2>About</h2>
        <p>
          {about}
        </p>
      </div>
      <button>
        View Profile
      </button>
    </div>
  );
};
