import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
      <div className="navber">
        <div className="logo">
          <img src="images/logo.png" width='125px' alt="logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Account</Link></li>
          </ul>
        </nav>
        <img src="images/cart.png" width="30px" height="30px" alt="" />
      </div>
  )
}

export default Header
