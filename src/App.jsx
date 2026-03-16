import './App.css';
import kck_logo from "./images/kck_logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={kck_logo} alt="logo" />
        <p>
          Healthy original, vegan friendly cocoa for the holidays! <span className="heart"></span> React
        </p>
        <p className="small">
          By: Kenneth Edward King II
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
