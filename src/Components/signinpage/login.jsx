/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react-hooks/rules-of-hooks */
import './login.css';
import { Link } from 'react-router-dom';
// import { GoogleLogin } from 'react-google-login';

import React from 'react';
import { useState } from 'react';




const clientId = "69644125219-vue1mmii893llk6mem3d5gvcftaftpmp.apps.googleusercontent.com"


function login() {

    // const onSuccess = (res) => {

    //     console.log("LOGIN SUCCESS! Current user: ", res.profileobj);
    // };
    // const onFailure = (res) => {
    //     console.log("LOGIN FAILED! res: ", res);

    // };

    // const [isHovered, setIsHovered] = useState(false);

    // const handleHover = () => {
    //     setIsHovered(!isHovered);
    // };

    return (

        <section className='splitScreen'>
            <section className="topPane">
            <div>
                    <span class="lefttext">Unlock your potential with a powerful resume, with Synergy</span>
                    
                </div>
                
            </section>
            <section className='bottomPane'>

                <section className='signinbox'>
                    <div className='text'>
                        LOG IN</div>

                    <div className='inputs'>
                        <div className="input">
                            <input type="email" placeholder='Your Email' />
                        </div>
                        <div className="input">
                            <input type="password" placeholder='Password' />
                            <i class='bx bx-hide eye-icon'></i>
                        </div>
                    </div>
                    <div className='forgotpassword'>
                        <a href="/">Forgot Password?</a>
                    </div>
                    <div className="continue">
                        <button className="btn">Continue</button>
                    </div>

                    <div className='or'>
                        <span>Dont have an account?
                        <a href="Signup">Signup</a>
                        </span>
                    </div>

                    <div className='or'>or</div>

                    {/* <div id="signInButton"> */}




                        {/* <GoogleLogin


                            clientId={clientId}
                            buttonText="Login with Google"
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                        />
                    </div> */}
                    {/* <button onClick={e => loginWithRedirect()}>
                    Login with redirect
                </button> */}
                </section>
            </section>
        </section>
    )
}
export default login
// import React from 'react'

// const signin = () => {
//   return (
//     <div>signin</div>
//   )
// }

// export default signin