import React from 'react'
import "./css/notFound.css";

function NotFound() {
  return (
    <div className='body'>
    <section id="not-found">
      <div id="title">Simple Pure CSS3 &bull; 404 Error Page</div>
      <div className="circles">
        <p className='p' style={{color: "rgb(71, 71, 71)", marginBottom: "0"}} >404 <br />
         <small>PAGE NOT FOUND</small>
        </p>
        <span className="circle big"></span>
        <span className="circle med"></span>
        <span className="circle small"></span>
      </div>
    </section>
   </div>
  
  )
}

export default NotFound