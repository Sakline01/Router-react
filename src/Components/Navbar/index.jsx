import React from 'react'
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', columnGap: '10px' }}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about-us">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default NavBar
