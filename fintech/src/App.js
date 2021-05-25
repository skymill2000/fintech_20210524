import logo from "./logo.svg";
import "./App.css";
import Welcome from "./component/Welcome";
import { useState } from "react";

function App() {
  let [userName, setUserName] = useState("유관우");

  const handleChangeName = (e) => {
    const { value, name } = e.target;
    setUserName(value);
  };

  console.log(userName);
  return (
    <div className="App">
      <p>{userName} 님 안녕하세요</p>
      <input onChange={handleChangeName}></input>
    </div>
  );
}

export default App;
