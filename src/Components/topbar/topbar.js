import React from 'react'
import "./topbar.css"
import logo from "../images/synergy.png"
function topbar() {


  return (
    <>
    <nav className='topbar'>
      <div>
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
          Login IN 
        </li>
        <li>
          Sign IN
        </li>
      </div>
    </nav>
    <div className='logo'>
      Hey i am the top bar 
    </div>
    </>
  )
}

export default topbar
