import React from 'react'
import Topbar from '../topbar/topbar'
function mainpage() {
  return (
    <>
    <Topbar/>
    <section id="header" className="">
     <div className="row">
      <div className="col-10 max-auto">
       <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
         <h1>
          BUILDING YOUR RESUME HAS NEVER BEEN MORE EASIER 
          <FontAwesomeIcon icon="fa-solid fa-wand-magic-sparkles" />
         </h1>
         <h2 className="my-3">
            Custom Resumes for many companies and more! to differentiate you from the crowd.
        </h2>
        <div className="mt-3"> 
         <a href="" className="btn-get-started">
          Create My Resume 
         </a>
        </div>
       </div>
<div className="col-lg-6 order-1 order-lg-2 header-img">
      <img src={} className="img-fluid aimated"
    </div>
    </>
  )
}

export default mainpage
