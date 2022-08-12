import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee'

function App() {
  console.log('listing employees');
  const showEmployees = 1;
  return (
    <div className="App">
      {showEmployees ?
        <Employee /> :
        <p>unable to view</p>  
      }
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
          Learn React now!
        </a>
      </header>
    </div>
  );
}

export default App;
