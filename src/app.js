import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import Contact from './contact';
import About from './about';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1> React Router </h1>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto" style={{ color: '#fff' }}>
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    )
  }
}
