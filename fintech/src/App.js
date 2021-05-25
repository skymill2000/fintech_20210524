import logo from "./logo.svg";
import "./App.css";
import Welcome from "./component/Welcome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>안녕 리액트야</p>
        <Welcome userData={{ username: "관우", age: 32 }}></Welcome>
      </header>
    </div>
  );
}

export default App;
