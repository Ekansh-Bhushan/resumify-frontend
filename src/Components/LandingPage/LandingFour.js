/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

import person1 from '../images/person1.jpg'
import person2 from '../images/person2.jpg'
import './LandingFour.css'

import Footer1 from '../footer/footer1'
function thpage() {
  return (
    <>
    <div className=''>
      

    
      <div className='testimonials'>Testimonials</div>
      <div className='text1'><b>What People Think Of Us</b></div>

      <div className="photo-box" style={{ position: 'relative' }}>
        <h3 className='wonderful'><b><i>ASTONISHING!</i></b></h3>
        <p>Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the “small” ideas of individual sentences to a “bigger” idea, paragraph structure is essential to any writing for organization, flow, and comprehension.</p>
        <img src={person1} style={{ position: 'absolute', bottom: '2px', right: '0' }} alt="Photo 1" />
        <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', right: '0' }}>
        <span className="responsive-span1"style={{marginRight:'72px',fontSize:'18px'}}><b>Jimmy Johnson</b></span>
        <span className="responsive-span2" style={{marginRight:'50px',fontSize:'16px'}}>CEO,Zepto</span>
      </div>

      </div>

      <div className="photo-box" style={{ position: 'relative' }}>
        <h4 class='wonderful'><b><i>WONDERFUL!</i></b></h4>
        <p className='para1'>Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the “small” ideas of individual sentences to a “bigger” idea, paragraph structure is essential to any writing for organization, flow, and comprehension.</p>
        <img src={person2} style={{ position: 'absolute', bottom: '2px', right: '0' }} alt="Photo 2" />
        <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', right: '0' }}>
        <span className="responsive-span1" style={{marginRight:'72px',fontSize:'18px'}}><b>Jimmy Johnson</b></span>
        <span className="responsive-span2" style={{marginRight:'50px',fontSize:'16px'}}>CEO,Zepto</span>
        </div>
      </div>
      
    </div>
    <ul className="bullet-list">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    <Footer1/>
    </>
  );
}
export default thpage;
