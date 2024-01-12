import React from 'react';
import './topbar.css';
import Logo from '../images/Logo.png';
import Signup from '../images/signup.png';
import Login from '../images/Login.png';
import { useNavigate } from 'react-router-dom';

function Topbar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };
// more changes has to be done
  return (
    <>
      <nav className="navbar">
        <div className="left">
          <img src={Logo} onClick={handleLogoClick} alt="Logo" className="logo" />
        </div>
        <div className="right">
          <ul>
            <li>Build your resume</li>
            <li>Tutorial</li>
            <li>Contact us</li>
            <img src={Login} onClick={handleLoginClick} alt="Login" />
            <img src={Signup} onClick={handleSignupClick} alt="Signup" />
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Topbar;
