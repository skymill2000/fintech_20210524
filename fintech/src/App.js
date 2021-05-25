import logo from "./logo.svg";
import "./App.css";

const Welcome = ({ userData }) => {
  console.log(userData);
  return (
    <p>
      안녕하세요 {userData.username} 님 ! {userData.age} 세 입니다.{" "}
    </p>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>안녕 리액트야</p>
        <Welcome userData={{ username: "관우", age: 32 }}></Welcome>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
