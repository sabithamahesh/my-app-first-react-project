import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  NavLink
} from 'react-router-dom';

import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
            <NavLink to="/home" activeClassName="activeHome">Home</NavLink>
            </li>
            <li>
            <NavLink to="/about" activeClassName="activeAbout">About</NavLink>
            </li>
            <li>
            <NavLink to="/projects" activeClassName="activeProjects">Projects</NavLink>
            </li>
            <li>
            <NavLink to="/contact" activeClassName="activeContact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}

        <Switch>
          <Route path="/about">
           <About />

          </Route>
          <Route path="/projects">
           <Projects />

          </Route>
          <Route path="/contact">
           <Contact />

          </Route>
          <Route path="/">
            <Home />

          </Route>
        </Switch>
      </div>
    </Router>
      
  );
}


function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}



