import logo from './../Images/logo.svg';
import about from './../Images/about.jpg';
import './../css/App.css';

export default function About() {
  return (
    <div className="App about">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={about} className="Description-Image" alt="About Image" />
        <p> ABOUT Component Edit <code>src/App.js</code> and save to reload. </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
      </header>
    </div>   
  );
}
