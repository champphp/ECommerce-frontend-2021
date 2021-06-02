import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  const [isOpened, setIsOpened] = useState(true);
  function toggleMenu () { setIsOpened(wasOpened => !wasOpened) }
  const handleResize = () => {
    if (window.innerWidth > 800) {
      setIsOpened(true)
    } else {
      setIsOpened(false)
    }
  }
  useEffect(()=> {
    window.addEventListener("resize", handleResize)
  },[])

  return (
      <div className="navber">
        <div className="logo">
          <img src="images/logo.png" width='125px' alt="logo" />
        </div>
        
        <nav>
        {isOpened && (
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Account</Link></li>
          </ul>
          )}
        </nav>
        
        <img src="images/cart.png" width="30px" height="30px" alt="" />
        <img 
          src="images/menu.png" 
          className="menu-icon" 
          alt="" 
          onClick={toggleMenu}
        />

      </div>
  )
}

export default Header
