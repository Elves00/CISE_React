import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://aut.ac.nz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agile is about Values and Principles in it to win it go team
          {/*Just making a change so it can be re pushed.*/}
          
        </a>
        <p>A minor change to show git proccess</p>
      </header>
    </div>
  );
}

export default App;
