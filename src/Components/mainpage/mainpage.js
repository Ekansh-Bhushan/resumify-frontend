import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
// import frame from '../../Components/images/Frame.png';
import Navbar from '../topbar/navbar';
import Footer from '../footer/footer';
import './mainpage.css';  
export default function Home() {
  return (
    <>
    <Navbar/>
    <div className='container'>
     
      <div className='main'>
        <h2>
        Why Synergy? 
        </h2>
        <h6>
        Custom Resumes for many companies and more! to differentiate you from the crowd.
        </h6>
        <div className='button'>
                <button className="create_resume">
                    Create My Resume
                </button>
            </div>
      </div>
      <div className='blockcontainer'>
        <div className='blocks1'>

          <div className='block'>
            <h1 className='topblock'>
            Make a Resume that wins Interview
            </h1>
            <h3 className='bottomblock'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.
            </h3>

          </div>
          <div className='block'>
            <div className='topblock'>
            Make a Resume that wins Interview
            </div>
            <div className='bottomblock'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.
            </div>

          </div>
        </div>
        <div className='blocks2'>

          <div className='block'>
            <div className='topblock'>
            Make a Resume that wins Interview
            </div>
            <div className='bottomblock'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.
            </div>

          </div>
          <div className='block'>
            <div className='topblock'>
            Make a Resume that wins Interview
            </div>
            <div className='bottomblock'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.
            </div>

            </div>
        </div>
      </div>
    </div>
    </>
  )
}
