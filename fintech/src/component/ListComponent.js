import React, { useState } from "react";

const ListComponent = () => {
  const [array, setarray] = useState([
    { name: "홍길동", age: "32", height: "184" },
    { name: "고길동", age: "42", height: "174" },
    { name: "둘리", age: "12", height: "174" },
  ]);
  return (
    <div>
      {array.map((user, index) => {
        return (
          <>
            <h1 key={index}>{user.name}</h1>
            <h2>{user.age}</h2>
            <h3>{user.height}</h3>
          </>
        );
      })}
    </div>
  );
};

export default ListComponent;
