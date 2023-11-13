import React from 'react'
import "./topbar.css"
import logo from "../images/synergy.png"
function topbar() {


  return (
    <>
    <nav className='topbar'>
      <div className='logo'>
        {/* logo here */}
      <img src={logo} alt="" />
      
      </div>
      <div className='menu-list'>
        <li>
          Build Your Resume
        </li>
        <li>
          Tutorial
        </li>
        <li>
          Contact Us
        </li>
        <li>
          My Account 
        </li>
      </div>
      <div className='menu-list'>
        <li>
          Login In  
        </li>
        <li>
          Sign In
        </li>
      </div>
    </nav>
    
    </>
  )
}

export default topbar
