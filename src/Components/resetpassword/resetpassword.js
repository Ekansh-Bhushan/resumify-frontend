import React, { useState } from 'react';
import Topbar from '../topbar/topbar';
import '../passwordChange/changepassword.css'
function ResetPasswordPage() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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

  return (
    <>
    <Topbar/>
    <div className='body'>
      <div className='box'>

    
      
      <form className='form-making' onSubmit={handlePasswordChange}>
      <div className='cptext'>Reset Password</div>
        <div className='input-area-second'>
          <label className= 'newpassword-label-area'htmlFor="newPassword">New Password:</label>
          <input
            type="text"
            id="newPassword"
            className='newpassword-area'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            />
        </div>
        <div className='newpassword-label-area'>
          <label htmlFor="confirmPassword">Confirm New Password:</label>
          <input
            type="password"
            id="confirmPassword"
            className='confirmpassword-input-area'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
        </div>
        <button className='change-password-button-area' type="submit">Change Password</button>
      </form>
            </div>
    </div>
            </>
  );
}

export default ResetPasswordPage;
