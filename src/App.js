import React from 'react';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Login from './Components/Login';
import Products from './Components/Products';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './Components/Navbar';
import Productcard from './Components/ProductCard';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about-us" component={About} />
          <Route path="/products" component={Products} exact />
          <Route path="/login" component={Login} />
          <Route path="/products/:productId" component={Productcard} />
        </Switch>
      </Router>
    </div>
  )
}

export default App