import React from 'react';
import './nav.css';
import {Link} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';


function nav() {
  const open = () => {
    document.getElementById("myNav").style.width = "100%";
  }
  const close = () => {
    document.getElementById("myNav").style.width = "0%";
  }
window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      document.getElementById("tutop").style.display = "block";
    } else {
      document.getElementById("tutop").style.display = "none";
    }
  }

  return <div className="nav">
    <div id="myNav" class="overlay">
    <button className="closebtn"onClick={close}>&times;</button>
  <div class="overlay-content">
  <Link className="link1" to="intro"smooth={true}duration={100}>intro</Link>
      <Link className="link1" to="about"smooth={true}duration={100}>Qualification</Link>
      <Link className="link1" to="course"smooth={true}duration={100}>Courses</Link>
      <Link className="link1" to="cont"smooth={true}duration={100}>Contact me</Link>
  </div>
</div>
      <Link className="link" to="intro"smooth={true}duration={100}>intro</Link>
      <Link className="link" to="about"smooth={true}duration={100}>Qualification</Link>
      <Link className="link" to="course"smooth={true}duration={100}>Courses</Link>
      <Link className="link" to="cont"smooth={true}duration={100}>Contact me</Link>
      
      <button className="Openbtn"onClick={open}>&#9776;</button>


      <div className="totop" id="tutop" onClick={()=>scroll.scrollToTop() }>&uarr;</div>
      
  </div>;
 
}

export default nav;
