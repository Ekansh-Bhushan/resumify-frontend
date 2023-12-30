import React, {Component} from "react";
import { useNavigate } from "react-router-dom";
import './style.css'
import Topbar from '../topbar/navbar';

class Signup extends Component{
    render() {
      return (
        <>
        <Topbar/>
        <div className='body'>

          <div className="box">
            <form action="#">
            <div className="title">
                Sign-Up
                </div>
              <div className="info-box">
                <div className="user-box">
                  <input type="text" placeholder="FirstName" />
                </div>
                <div className="user-box">
                  <input type="text" placeholder="LastName" />
                </div>
                <div className="user-box">
                  <input type="tel" placeholder="Mobile Number" />
                </div>
                <div className="user-box">
                  <input type="email" placeholder="Email" />
                </div>
                <div className="user-box">
                  <input type="password" placeholder="Password" />
                </div>
                <div className="user-box">
                  <input type="password" placeholder="Confirm Password" />
                </div>
              </div>
              <button className='change-password-button-area' type="submit" >Change Password</button>
              {/* <div className="button">
                <input type="submit" defaultValue="Sign-Up" /> */}
              {/* </div> */}
            </form>
          </div>
        
        </div>
        </>
      );
    }
  }

export default Signup

