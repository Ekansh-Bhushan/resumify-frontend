import React, { useState } from 'react';
import '../passwordChange/changepassword.css'
import Topbar from '../topbar/topbar';
function ResetPasswordEmail() {
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
          <label className= 'newpassword-label-area'htmlFor="newPassword">Enter Your Email :</label>
          <input
            type="email"
            id="newPassword"
            className='newpassword-area'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            />
        </div>

        <button className='change-password-button-area' type="submit" >Submit</button>
      </form>
    </div>
            </div>
            </>
  );
}

export default ResetPasswordEmail;
