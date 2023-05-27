import React from 'react'

function Header() {
  return (
    <nav>
        <h3>Fable</h3>
        <ul>
            <li>Services</li>
            <li>Prokects</li>
            <li>About</li>
            <li>Contact</li>
            <div className="nav-togle">
                <p>______</p>
                <p>______</p>
            </div>
        </ul>
    </nav>
  )
}

export default Header