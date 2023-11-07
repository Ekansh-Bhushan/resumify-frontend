/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react-hooks/rules-of-hooks */
import './signup.css';
import { Link } from 'react-router-dom';
// import { GoogleLogin } from 'react-google-login';
// import Login from './login.jsx';

import React from 'react';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';



const clientId = "69644125219-vue1mmii893llk6mem3d5gvcftaftpmp.apps.googleusercontent.com"


function signup() {

    // const navigate = useNavigate();
    // const onSuccess = (res) => {

    //     console.log("LOGIN SUCCESS! Current user: ", res.profileobj);
    // };
    // const onFailure = (res) => {
    //     console.log("LOGIN FAILED! res: ", res);

    // };

    

    return (

        <section className='splitScreen'>
            <section className="topPanes">
                <div>
                    <span class="lefttext">Unlock your potential with a powerful resume, with Synergy</span>
                    
                </div>
            </section>
            <section className='bottomPane'>

                <section className='signinbox'>
                    <div className='text'>
                        SIGN UP</div>

                    <div className='inputs'>

                        <div className="input">
                            <input type="text" placeholder='Your Name' />
                        </div>
                        <div className="input">
                            <input type="email" placeholder='Your Email' />
                        </div>
                        <div className="input">
                            <input type="password" placeholder='Password' />
                            {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAwVJREFUWEfN1mvon2MYB/DPHGovRkwrbfOCeGF74/iGJY28UFtyauSQ06QoL6RoWcihvPACNYfJHOaQWiQkonhDOdRI5jiHlGJCDBv6rvu37v/teX7P/mq/v6t+9Xue57qu+3t/7+v6XvcsM2yzZnh9/0sA12AfrJ4EOy0DV+KusvB1uH13g2gBXIZ72Xk0ux1EVw0ExH3Vzq/HbQ0TC3Ew9sRv+BA//Re2+orwEjxQJQwTL+E8nI0FHYv9gI/wPJ7AJ7sCaFwXtCB2JV/t8xZuxnPjAofa8FLc35HgK7yHzfilMDIfx2Lfxv+1wtw3XUCGACSmZeJa3NGzq+Q7Amnlcyufz7C0AJ4S2gfgKjyJ74p3C2JlDzN18uPwaCnWvP8cR+HH2qkLwDI8i09xMr7oAfEI0g2/YiNuxc8NM3PwIo4v71MPyb/TWgCp7vexH/7AMSX5KOBirO2hP0CXoD3r/fEmDitxEbt7RjlaAE/hrPLxCqzpWOwiPNgD4gWc2vHt0LKR2diKQ/Bt/GoA2X12sRc24XD81bPQOBAHIJrQ2o24obxMe+74XwM4Ea8WhxTP+T2LDx3H0XinI7bO/1hpzSkAQs+XmIc/sRgfD4BomUjdhIFoQ2uvlFbM+9PwTMtAnq/GnSXy7VK9v08DRI4scv14E3N5VU+v44S+Ity7KNyi4rABZ46phVGelok8P1Q+noEU9x4lTzrr3T4AeZ8KjY6HytjTRQ2Hpl0LImJ1IG6q2IjA3V2z06eEUaxoeG5Gsa+LvEYdx9kFWNfjsAq3tN/GzYIj8TLmVkGp7ijbG6Vg08tty11Y0Z/QvxFNyUXnXzY0jCK1Ub5TBnaego1sj3R+BdaXNt+OPOcopw1gFHAOIqEZMH0WCT+pGmDRkYeLc7ojxZyinmJDDLT+B+H0MuFyNPklR8Ztfrk1fVAF1TURJiLzU0BMF8DASXR+ro9jG9KWmbY7bBIAsk7EKeM7lmGU2vp+kgCyVpjI9W55NXMmxsCI8dwNttQHNakj6K2dGQfwD5eIlSH/DQvMAAAAAElFTkSuQmCC" className='eye-icon'/> */}
                        </div>
                        <div className="input">
                            <input type="password" placeholder='Confirm Password' />
                            {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAwVJREFUWEfN1mvon2MYB/DPHGovRkwrbfOCeGF74/iGJY28UFtyauSQ06QoL6RoWcihvPACNYfJHOaQWiQkonhDOdRI5jiHlGJCDBv6rvu37v/teX7P/mq/v6t+9Xue57qu+3t/7+v6XvcsM2yzZnh9/0sA12AfrJ4EOy0DV+KusvB1uH13g2gBXIZ72Xk0ux1EVw0ExH3Vzq/HbQ0TC3Ew9sRv+BA//Re2+orwEjxQJQwTL+E8nI0FHYv9gI/wPJ7AJ7sCaFwXtCB2JV/t8xZuxnPjAofa8FLc35HgK7yHzfilMDIfx2Lfxv+1wtw3XUCGACSmZeJa3NGzq+Q7Amnlcyufz7C0AJ4S2gfgKjyJ74p3C2JlDzN18uPwaCnWvP8cR+HH2qkLwDI8i09xMr7oAfEI0g2/YiNuxc8NM3PwIo4v71MPyb/TWgCp7vexH/7AMSX5KOBirO2hP0CXoD3r/fEmDitxEbt7RjlaAE/hrPLxCqzpWOwiPNgD4gWc2vHt0LKR2diKQ/Bt/GoA2X12sRc24XD81bPQOBAHIJrQ2o24obxMe+74XwM4Ea8WhxTP+T2LDx3H0XinI7bO/1hpzSkAQs+XmIc/sRgfD4BomUjdhIFoQ2uvlFbM+9PwTMtAnq/GnSXy7VK9v08DRI4scv14E3N5VU+v44S+Ity7KNyi4rABZ46phVGelok8P1Q+noEU9x4lTzrr3T4AeZ8KjY6HytjTRQ2Hpl0LImJ1IG6q2IjA3V2z06eEUaxoeG5Gsa+LvEYdx9kFWNfjsAq3tN/GzYIj8TLmVkGp7ijbG6Vg08tty11Y0Z/QvxFNyUXnXzY0jCK1Ub5TBnaego1sj3R+BdaXNt+OPOcopw1gFHAOIqEZMH0WCT+pGmDRkYeLc7ojxZyinmJDDLT+B+H0MuFyNPklR8Ztfrk1fVAF1TURJiLzU0BMF8DASXR+ro9jG9KWmbY7bBIAsk7EKeM7lmGU2vp+kgCyVpjI9W55NXMmxsCI8dwNttQHNakj6K2dGQfwD5eIlSH/DQvMAAAAAElFTkSuQmCC" className='eye-icon'/> */}
                        </div>
                    </div>
                    <div className="continue">
                        <button className="btn">Continue</button>
                    </div>

                    <div className='or'>
                        <span>Already have an account?
                            <a href="Login">Log In</a>
                            {/* <button className='btn' onClick={() => navigate('/login')}>Login</button> */}
                        </span>
                    </div>

                    <div className='or'>or</div>

                    {/* <div id="signInButton">




                        <GoogleLogin


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
export default signup
// import React from 'react'

// const signin = () => {
//   return (
//     <div>signin</div>
//   )
// }

// export default signin