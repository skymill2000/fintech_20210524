import logo from "./logo.svg";
import "./App.css";

const Welcome = ({ username, age }) => {
  console.log(username, age);
  return (
    <p>
      안녕하세요 {username} 님 ! {age} 세 입니다.
    </p>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>안녕 리액트야</p>
        <Welcome username="유관우" age="33세"></Welcome>
        <Welcome username="hong gil dong" age="43세"></Welcome>
        <Welcome username="go gil dong" age="53세"></Welcome>
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
