import React from "react";

const card = ({name,description,image}) => {
  return (
    // <div>card</div>
    <div>
      <div className="card">
        <img
          src={image}
          alt="Image"
        />
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default card;
