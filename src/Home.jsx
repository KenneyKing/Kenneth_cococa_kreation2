"homepage": "http//fireclient.github.io/kenneths_cocoa_kreations-app-react"
import kck_logo from "./images/kck_logo.png";
import './Home.css';

export default function Home() {
return(
    <div className="App">
      <div>
          <p className="Kenneth">
          <a
            className="App-link"
            href="https://forms.gle/z6DapJeqSfRN8Ti9A"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order now!
          </a>

        </p>
      </div>
      <header className="App-header">
        <img src={kck_logo} alt="logo" />
        <p className="heart">
          Healthy original, vegan friendly cocoa for the holidays! 
        </p>
        <p className="small">
          By: Kenneth Edward King II
        </p>


      </header>

    </div>
  );
};

