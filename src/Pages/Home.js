import logo from './../Images/logo.svg';
import coding from './../Images/coding.jpg';
import './../css/App.css';

export default function Home() {
  return (
    <div className="App home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={coding} className="Description-Image" alt="Coding Image" />
        <p> Home Edit <code>src/App.js</code> and save to reload. </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
      </header>
    </div>   
  );
}
