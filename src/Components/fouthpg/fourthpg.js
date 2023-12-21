import React from 'react'
import person1 from '../images/person1.jpg'
import person2 from '../images/person2.jpg'
import shade from '../images/shade1.jpg'
import '../fouthpg/fourthpage.css'
import background from '../images/background.png'
function thpage() {
  return (
    <>
    

    <div className=''>

    
      <h2>Testimonials</h2>
      <h1><b>What People Think Of Us</b></h1>

      <div className="photo-box" style={{ position: 'relative' }}>
        <h3><b><i>ASTONISHING!</i></b></h3>
        <p>Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the “small” ideas of individual sentences to a “bigger” idea, paragraph structure is essential to any writing for organization, flow, and comprehension.</p>
        <img src={person1} style={{ position: 'absolute', bottom: '2px', right: '0' }} alt="Photo 1" />
        <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', right: '0' }}>
        <span className="responsive-span1"style={{marginRight:'72px',fontSize:'18px'}}><b>Jimmy Johnson</b></span>
        <span className="responsive-span2" style={{marginRight:'50px',fontSize:'16px'}}>CEO,Zepto</span>
      </div>

      </div>

      <div className="photo-box" style={{ position: 'relative' }}>
        <h3><b><i>WONDERFULL!</i></b></h3>
        <p>Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the “small” ideas of individual sentences to a “bigger” idea, paragraph structure is essential to any writing for organization, flow, and comprehension.</p>
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

    </>
  );

           
    

}



export default thpage;
