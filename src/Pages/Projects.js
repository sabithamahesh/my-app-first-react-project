import logo from './../Images/logo.svg';
import project from './../Images/project.jpg';
import './../css/App.css';

export default function Projects() {
  return (
    <div className="App projects">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={project} className="Description-Image" alt="Project Image" />
        <p> PROJECTS Component Edit <code>src/App.js</code> and save to reload. </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
      </header>
    </div>   
  );
}
