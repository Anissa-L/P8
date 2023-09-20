import logo from "../../logo.svg";
import "../../App.css";
import {Router,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" element={<App/>} />
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>"Bonjour 🤚"</p>
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
