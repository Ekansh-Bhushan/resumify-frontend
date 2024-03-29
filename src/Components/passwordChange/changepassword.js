import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../passwordChange/changepassword.css'
import Topbar from '../topbar/topbar';
function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password don't match.");
      return;
    }

    // You can implement your password change logic here.
    // You may want to send an API request to your server to update the password.

    // Reset the form after a successful password change.
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleForgotPassword = () => {
    // Implement the logic to navigate to the password recovery page.
    navigate('/forgotPassword');
  };
  
  return (
    <>
    <Topbar/>
    <div className='body'>
      <div className='box'>
       
        <form className='form-making' onSubmit={handlePasswordChange}>
        <div className='cptext'>Change Password</div>
          <div className='input-area'>
            <label className='label-area' htmlFor="currentPassword">Current Password:</label>
            <input
              type="password"
              id="currentPassword"
              className='changepasswordarea'
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div className='input-area-second'>
            <label className='newpassword-label-area' htmlFor="newPassword">New Password:</label>
            <input
              type="text"
              id="newPassword"
              className='newpassword-area'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              />
          </div>
          <div className='confirmPassword-area'>
            <label className='newpassword-label-area' htmlFor="confirmPassword">Confirm New Password:</label>
            <input
              type="password"
              id="confirmPassword"
              className='confirmpassword-input-area'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className='change-password-button-area' type="submit" onClick={() => navigate('/homepage')}>Change Password</button>
        </form>
      </div>

    </div>
              </>
  );
}

export default ChangePasswordPage;
