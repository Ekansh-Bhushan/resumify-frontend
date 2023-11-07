import React from 'react';
import './temppage.css';
// import Img from './src/background.png'


function temp() {
    return (
        <div className='background'>
            <nav className="navbar">
                <div className="left">
                    <img src="/" alt="Logo" className="logo" />
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
            <div className="text">
                Ready-to-Edit Resume Templates
            </div>
            <div className="text2">
                Resume templates that can help you land in your dream company.
            </div>
            <div className="container">
                <div className="row">
                    <a href='/' className='links'>
                        Professional Templates

                    </a>

                    <a href='/' className='links'>
                        Company Specific Templates
                    </a>
                </div>
                <div className="row">
                    <a href='/' className='links'>
                        Modern Templates
                        </a>
                    <a href='/' className='links'>
                        Minimal Templates
                    </a>
                </div>
            </div>
            {/* <div className='icon'> */}
            {/* <iconify-icon icon="icon-park-outline:handbag">apple</iconify-icon> */}

            {/* </div> */}



        </div>

    )
}
export default temp