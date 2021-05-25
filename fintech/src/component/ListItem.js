import React from "react";

const ListItem = ({ user }) => {
  return (
    <div>
      <h1 style={{ color: "red", fontSize: "120px" }}>{user.name}</h1>
      <h2>{user.age}</h2>
      <h3>{user.height}</h3>
    </div>
  );
};

export default ListItem;
