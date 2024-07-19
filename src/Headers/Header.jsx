import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div>
      <nav className="navbar">
            <div className="navdiv">
              <div className="logo">
                <a href="#">ABC College</a>
              </div>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
              </ul>
            </div>
          </nav>
    </div>
  )
}

export default Header
