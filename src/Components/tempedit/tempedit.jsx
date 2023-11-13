/* eslint-disable no-dupe-keys */
import React, { useState } from 'react';
import './tempedit.css'; // Import the CSS file for styling
import resumeImage from "../../Components/images/blankdoc.png";
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react-hooks/rules-of-hooks */

function tempedit() {
    const TextBoxStyles = {
        borderRadius: '10px',
        border: '2px solid #D9D9D9',
        width: '240px',
        height: '35px',
        flexShrink: '0',
        background: '#010619',
        marginTop: '10px', // Adjust the margin based on your design
        // marginLeft: '-45px',
        padding: '5px', // Adjust the padding based on your design
        // paddingLeft:"40px"
        color: "white",
    };

    return (
        <><header>

            <nav className="navbar">
                <div className="left">
                    {/* <img src= {logo} alt="Logo" className="logo" /> */}
                </div>
                <div className="right">
                    <ul>
                        <li><a href="/">Build your resume</a></li>
                        <li><a href="/">Tutorial</a></li>
                        <li><a href="/">Contact us</a></li>
                        <li><img src="/" alt="Circular" className="circular-image" /></li>
                    </ul>
                </div>
            </nav>
        </header>
            <div className='splitScreen'>

                <section className='topPane'>
                    <div className='text1'>
                        Your Details
                    </div>
                    <div className='text2'>
                        How do you want employers to contact you?
                    </div>
                    {/* <span className='circle' > */}
                    <div className='container'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 128 128" fill="none">
                            <circle cx="64" cy="64" r="64" fill="white" />
                            {/* Position the plus sign at the bottom right of the circle */}
                            <svg x="90" y="80" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path
                                    d="M20 6.66675C19.5579 6.66675 19.134 6.84234 18.8214 7.1549C18.5089 7.46746 18.3333 7.89139 18.3333 8.33341V18.3334H8.33329C7.89127 18.3334 7.46734 18.509 7.15478 18.8216C6.84222 19.1341 6.66663 19.5581 6.66663 20.0001C6.66663 20.4421 6.84222 20.866 7.15478 21.1786C7.46734 21.4912 7.89127 21.6667 8.33329 21.6667H18.3333V31.6667C18.3333 32.1088 18.5089 32.5327 18.8214 32.8453C19.134 33.1578 19.5579 33.3334 20 33.3334C20.442 33.3334 20.8659 33.1578 21.1785 32.8453C21.491 32.5327 21.6666 32.1088 21.6666 31.6667V21.6667H31.6666C32.1087 21.6667 32.5326 21.4912 32.8451 21.1786C33.1577 20.866 33.3333 20.4421 33.3333 20.0001C33.3333 19.5581 33.1577 19.1341 32.8451 18.8216C32.5326 18.509 32.1087 18.3334 31.6666 18.3334H21.6666V8.33341C21.6666 7.89139 21.491 7.46746 21.1785 7.1549C20.8659 6.84234 20.442 6.66675 20 6.66675Z"
                                    fill="gray" />
                            </svg>
                        </svg>
                        <section className='box1'>

                            <div className='textcommon'>First name</div>
                            <input type="text" placeholder="Enter your first name" style={TextBoxStyles} />
                        </section>
                        <section className='box1'>

                            <div className='textcommon'>Second Name</div>
                            <input type="text" placeholder="Enter your last name" style={TextBoxStyles} />
                        </section>
                        <section className='box1'>

                            <div className='textcommon'>Job Position</div>
                            <input type="text" placeholder="Your job Position Here" style={TextBoxStyles} />
                        </section>
                        <section className='box1'>

                            <div className='textcommon'>Phone Number</div>
                            <input type="text" placeholder="Phone Number" style={TextBoxStyles} />
                        </section>
                        <section className='box1'>

                        <div className='textcommon'>Email</div>
                        <input type="text" placeholder="Email" style={TextBoxStyles} />
                        </section>
                        <section className='box1'>

                        <div className='textcommon'>Country</div>
                        <input type="text" placeholder="Your Country" style={TextBoxStyles} />
                        </section>
                        <section className='box1'>

                        <div className='textcommon'>City</div>
                        <input type="text" placeholder="Your City" style={TextBoxStyles} />
                        </section>
                        {/* <section className='box1'>

                        <span>Job Positio</span>
                        <input type="text" placeholder="Your job Position Here" style={TextBoxStyles} />
                        </section> */}
                    </div>

                </section>
                <section className='bottomPane'>
                    <div className="abc">
                        {/* <img src={resumeImage} alt="resume" /> */}
                    </div>
                </section>
            </div></>

    )
}
// export default EditableField;
export default tempedit
