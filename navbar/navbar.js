import React from 'react';
import './navbar.css'

const navbar= ()=> {
  return(
   <div>
  
      <input id="burger" type="checkbox" />

<label for="burger">
    <span></span>
    <span></span>
    <span></span>
</label>

<nav>    

<h2  style={{color: '#222', textAlign: 'left', textTransform: 'uppercase',  fontFamily: 'Josefin Sans', marginTop: '2rem', fontSize: '20px',cursor: 'pointer', }}>
Leader Classes</h2>

  <ul>
    <li><a href="https://www.leaderclasses.com/about-us">About</a></li>
    <li><a href="https://www.leaderclasses.com/faq">FAQ</a></li>
    <li><a href="https://www.leaderclasses.com/membership">Membership</a></li>
    <li><a href="https://www.leaderclasses.com/videos/career-acceleration-insights-video">Videos</a></li>
    <li><a href="https://www.leaderclasses.com/campus-partners">Campus Partners</a></li>
    <li><a href="https://www.leaderclasses.com/careers">Career</a></li>
    <li><a href="#">Login</a></li>
  </ul>  
</nav>

  


  </div>
  )
}
export default navbar;
