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
<h2 style={{color: '#222', textAlign: 'left', textTransform: 'uppercase',  fontFamily: 'Josefin Sans', marginTop: '2rem', fontSize: '20px'}}>Leader Classes</h2>
  <ul>
    <li><a href="#">About</a></li>
    <li><a href="#">FAQ</a></li>
    <li><a href="#">Membership</a></li>
    <li><a href="#">Videos</a></li>
    <li><a href="#">Campus Partners</a></li>
    <li><a href="#">Career</a></li>
    <li><a href="#">Login</a></li>
  </ul>  
</nav>

  


  </div>
  )
}
export default navbar;
