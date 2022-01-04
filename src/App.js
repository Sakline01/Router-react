import React from 'react';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Login from './Components/Login';
import Services from './Components/Services';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './Components/Navbar';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about-us" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  )
}

export default App