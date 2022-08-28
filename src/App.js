import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import {BsFillCartCheckFill} from 'react-icons/bs'

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
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vamos con todo!
        </a>
        <Button variant="success">
        <BsFillCartCheckFill/>
          </Button>
      </header>
    </div>
  );
}

export default App;
