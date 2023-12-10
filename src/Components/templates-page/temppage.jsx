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
import star from '../../Components/images/pepicons-pop_stars.png'
import temp1 from '../../Components/images/temp1.jpg'
import temp2 from '../../Components/images/temp2.png'
import temp3 from '../../Components/images/temp3.jpg'
import temp4 from '../../Components/images/temp4.png'
import page3_1 from '../../Components/images/page3_1.png'
import page3_2 from '../../Components/images/page3_2.png'
import page3_3 from '../../Components/images/page3_3.png'
import page3_4 from '../../Components/images/page3_4.png'
import vector from '../../Components/images/Vector.png'
import page4 from '../../Components/images/page4.png'

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
                <img src={hamburger} alt="hamburger" className='hamburger' />
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
            {/* <div className='top'> */}

            <div className='imgpg1'>
                <img src={bag} className="imgup" />

            </div>
            <div className="textpage21">
                Professional Templates
            </div>
            <div className="textpage22">
                Resume Templates with a professional look . Best suitable for placement drives and interviews
            </div>

            {/* </div> */}
            <div className='imgcontainer'>

                <div className='imgmain'>
                    <div>
                        <a href="#">
                            <img src={page1_1} className="imgbody" height='90%' width='90%' />
                        </a>
                            <div className='resumetitle'>
                            <div className='profkey'>Professional <br /></div>
                            Black and White Simple <br /> Corporate Resume
                        </div>
                    </div>
                    <div>
                        <a href="#">
                            <img src={page1_2} className="imgbody" height='90%' width='90%' />
                        </a>
                        <div className='resumetitle'>
                            <div className='profkey'>Professional</div>
                            <div className='minkey'>Minimalistic <br /></div>
                            Minimalistic White and grey <br /> Professional Resume
                        </div>
                    </div>
                    <div>
                        <a href="#">
                            <img src={page1_3} className="imgbody" height='90%' width='90%' />
                        </a>
                        <div className='resumetitle'>
                            <div className='profkey'>Professional</div>
                            <div className='modkey'>Modern <br /></div>
                            Modern CV resume
                        </div>

                    </div>
                    <div>
                        <a href="#">
                            <img src={page1_4} className="imgbody" height='90%' width='90%' />
                        </a>
                        <div className='resumetitle'>
                            <div className='profkey'>Professional</div>
                            <div className='modkey'>Modern <br /></div>
                            Modern CV resume
                        </div>
                    </div>
                </div>
            </div>
            <div className='imgpg2'>
                <img src={star} className="imgup" />

            </div>
            <div className="textpage21">
                Minimal Templates
            </div>
            <div className="textpage22">
                Explore the minimal yet professional templates for your next interview for placement drives and interviews
            </div>

            {/* </div> */}
            <div className='imgcontainer'>

                <div className='imgmain'>
                    <div>
                        <a href="#">
                            <img src={temp1} className="imgbody" height='90%' width='90%' />
                        </a>
                        <div className='resumetitle'>
                        <div className='profkey'>Professional <br /></div>
                            Black and White Simple Corporate <br /> Resume
                        </div>
                            
                        
                    </div>
                    <div>
                        <a href="#">
                            <img src={temp2} className="imgbody" height='90%' width='90%' />
                        </a>
                        <div className='resumetitle'>
                        <div className='minkey'>Minimalistic <br /></div>
                            Minimalistic White and grey <br /> Professional Resume
                        </div>
                    </div>
                    <div>
                        <a href="#">
                            <img src={temp3} className="imgbody" height='90%' width='90%' />
                        </a>
                        <div className='resumetitle'>
                        <div className='profkey'>Professional</div>
                        <div className='minkey'>Minimalistic <br /></div>
                            Modern CV resume
                        </div>

                    </div>
                    <div>
                        <a href="#">
                            <img src={temp4} className="imgbody" height='90%' width='90%' />
                        </a>
                        <div className='resumetitle'>
                        <div className='profkey'>Professional</div>
                        <div className='modkey'>Modern <br /></div>
                            Modern CV resume
                        </div>
                    </div>
                </div>
            </div>
            {/* vdfgsrfba */}
            <div className='imgpg3'>
                <img src={vector} className="imgup" />

            </div>
            <div className="textpage21">
                Modern Templates
            </div>
            <div className="textpage22">
            Modern resume templates that helps you present yourself by being creative and professional at the same time
            </div>

            {/* </div> */}
            <div className='imgcontainer'>

                <div className='imgmain'>
                    <div>
                        <a href="#">
                            <img src={page3_1} className="imgbody" height='90%' width='90%' />
                        </a>
                            <div className='resumetitle'>
                            <div className='profkey'>Professional <br /></div>
                            Black and White Simple <br /> Corporate Resume
                        </div>
                    </div>
                    <div>
                        <a href="#">
                            <img src={page3_2} className="imgbody" height='90%' width='90%' />
                        </a>
                        <div className='resumetitle'>
                            <div className='profkey'>Professional</div>
                            <div className='minkey'>Minimalistic <br /></div>
                            Minimalistic White and grey <br /> Professional Resume
                        </div>
                    </div>
                    <div>
                        <a href="#">
                            <img src={page3_3} className="imgbody" height='90%' width='90%' />
                        </a>
                        <div className='resumetitle'>
                            <div className='profkey'>Professional</div>
                            <div className='modkey'>Modern <br /></div>
                            Modern CV resume
                        </div>

                    </div>
                    <div>
                        <a href="#">
                            <img src={page3_4} className="imgbody" height='90%' width='90%' />
                        </a>
                        <div className='resumetitle'>
                            <div className='profkey'>Professional</div>
                            <div className='modkey'>Modern <br /></div>
                            Modern CV resume
                        </div>
                    </div>
                </div>
            </div>
            <div className='imgpg4'>
                <img src={bag} className="imgup" />

            </div>
            <div className="textpage21">
            Company specific Templates
            </div>
            <div className="textpage22">
            Resume templates that gives you undue advantage for you to crack the interview and be placed in your dream company
            </div>

            {/* </div> */}
            <div className='imgcontainer'>

                <div className='imgmain'>
                    <div>
                        <a href="#">
                            <img src={page4} className="imgbody" height='90%' width='90%' />
                        </a>
                            <div className='resumetitle'>
                            <div className='profkey'>Professional <br /></div>
                            Black and White Simple <br /> Corporate Resume
                        </div>
                    </div>
                    <div>
                        <a href="#">
                            <img src={page4} className="imgbody" height='90%' width='90%' />
                        </a>
                        <div className='resumetitle'>
                            <div className='profkey'>Professional</div>
                            <div className='minkey'>Minimalistic <br /></div>
                            Minimalistic White and grey <br /> Professional Resume
                        </div>
                    </div>
                    <div>
                        <a href="#">
                            <img src={page4} className="imgbody" height='90%' width='90%' />
                        </a>
                        <div className='resumetitle'>
                            <div className='profkey'>Professional</div>
                            <div className='modkey'>Modern <br /></div>
                            Modern CV resume
                        </div>

                    </div>
                    <div>
                        <a href="#">
                            <img src={page4} className="imgbody" height='90%' width='90%' />
                        </a>
                        <div className='resumetitle'>
                            <div className='profkey'>Professional</div>
                            <div className='modkey'>Modern <br /></div>
                            Modern CV resume
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}
export default temp