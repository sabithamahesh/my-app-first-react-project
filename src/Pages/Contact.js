import logo from './../Images/logo.svg';
import contact from './../Images/contact.jpg';
import './../css/App.css';

export default function Contact() {
  return (
    <div className="App contact">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={contact} className="Description-Image" alt="Hello Image" />
        <p> CONTACT Component Edit <code>src/App.js</code> and save to reload. </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
      </header>
    </div>   
  );
}
