import React from 'react'
import AirbnbImage from "../Images/logo512.png"
function Navbar() {
  return (
    <nav>
        <img src={AirbnbImage} className="nav--logo"/>      
    </nav>
  )
}

export default Navbar
