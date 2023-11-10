import React from 'react';
import './temppage.css';
import logo from '../../logo.svg';
import company from '../../Components/images/comapny-specific.png';
import minimal from '../../Components/images/minimal.png';
import modern from '../../Components/images/modern.png';
import professional from '../../Components/images/professional.png';

function temp() {
    return (
        <div className='background'>
            <nav className="navbar">
                <div className="left">
                    <img src= {logo} alt="Logo" className="logo" />
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
                Ready-to-Edit Resume <br/>Templates
            </div>
            <div className="text2">
                Resume templates that can help you land in your dream company.
            </div>

            <div className='button'>
                    <button className= "create_resume">
                        Create My Resume
                    </button>
                </div>
            <div className="container">
                <div className="column">
                    <div className='templates'>
                        <img src={company} alt="company-specific" className='icons'/>
                        <a href='/' className='links'>
                            Professional Templates
                        </a>
                    </div>
                    <div className='templates'>
                        <img src={modern} alt="modern" className='icons'/>
                        <a href='/' className='links'>
                            Modern Templates
                        </a>
                    </div>
                </div>
                
                <div className="column">
                    <div className='templates'>
                        <img src={minimal} alt="minimal" className='icons'/>
                        <a href='/' className='links'>
                            Company Specific Templates
                        </a>
                    </div>
                    <div className='templates'>
                        <img src={professional} alt="professional" className='icons'/>
                        <a href='/' className='links'>
                            Minimal Templates
                        </a>
                    </div>
                </div>
            </div>
            {/* <div className='icon'> */}
            {/* <iconify-icon icon="icon-park-outline:handbag">apple</iconify-icon> */}

            {/* </div> */}



        </div>

    )
}
export default temp