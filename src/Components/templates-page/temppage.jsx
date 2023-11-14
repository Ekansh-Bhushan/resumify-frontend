import React from 'react';
import './temppage.css';
import logo from '../../logo.svg';
import company from '../../Components/images/comapny-specific.png';
import minimal from '../../Components/images/minimal.png';
import modern from '../../Components/images/modern.png';
import professional from '../../Components/images/professional.png';
import bag from '../../Components/images/icon-park-outline_handbag_2.png'
import page1_1 from '../../Components/images/page1_1.png'
import page1_2 from '../../Components/images/page1_2.png'
import page1_3 from '../../Components/images/page1_3.png'
import page1_4 from '../../Components/images/page1_4.png'
import hamburger from '../../Components/images/ci_hamburger-lg.png';
function temp() {
    return (
        <div className='background'>
            <nav className="navbar">
                <div className="left">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <div className="right">
                    <ul>
                        <li><a href="/">Build your resume</a></li>
                        <li><a href="/">Tutorial</a></li>
                        <li><a href="/">Contact us</a></li>
                        <li><img src="/" alt="Circular" className="circular-image" /></li>
                    </ul>
                </div>
                <img src={hamburger} alt="hamburger" className='hamburger'/>
            </nav>
            <div className="text">
                Ready-to-Edit Resume <br />Templates
            </div>
            <div className="text2">
                Resume templates that can help you land in your dream company.
            </div>

            <div className='button'>
                <button className="create_resume">
                    Create My Resume
                </button>
            </div>
            <div className="container">
                <div className="column">
                    <div className='templates'>
                        <img src={company} alt="company-specific" className='icons' />
                        <a href='/' className='links'>
                            Professional Templates
                        </a>
                    </div>
                    <div className='templates'>
                        <img src={modern} alt="modern" className='icons' />
                        <a href='/' className='links'>
                            Modern Templates
                        </a>
                    </div>
                </div>

                <div className="column">
                    <div className='templates'>
                        <img src={minimal} alt="minimal" className='icons' />
                        <a href='/' className='links'>
                            Company Specific Templates
                        </a>
                    </div>
                    <div className='templates'>
                        <img src={professional} alt="professional" className='icons' />
                        <a href='/' className='links'>
                            Minimal Templates
                        </a>
                    </div>
                </div>
            </div>
            {/* <div className='icon'> */}
            {/* <iconify-icon icon="icon-park-outline:handbag">apple</iconify-icon> */}

            {/* </div> */}
            <div className='top'>

                <div className='imgpg'>
                    <img src={bag} className="imgup" />

                </div>
                <div className="textpage21">
                    Professional Templates
                </div>
                <div className="textpage22">
                    Resume Templates with a professional look . Best suitable for placement drives and interviews
                </div>

            </div>
            <div className='imgcontainer'>

                <div className='imgmain'>
                    <div>
                        <a href="#">
                            <img src={page1_1} />
                        </a>
                        <div className='resumetitle'>
                            Black and White Simple Corporate <br /> Resume
                        </div>
                    </div>
                    <div>
                        <a href="#">
                            <img src={page1_2} />
                        </a>
                        <div className='resumetitle'>
                            Minimalistic White and grey <br /> Professional Resume
                        </div>
                    </div>
                    <div>
                        <a href="#">
                            <img src={page1_3} />
                        </a>
                        <div className='resumetitle'>
                            Modern CV resume
                        </div>

                    </div>
                    <div>
                        <a href="#">
                            <img src={page1_4} />
                        </a>
                        <div className='resumetitle'>
                            Modern CV resume
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}
export default temp