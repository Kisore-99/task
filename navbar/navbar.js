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
  <ul>
    <li><a href="#">Link #1</a></li>
    <li><a href="#">Link #2</a></li>
    <li><a href="#">Link #3</a></li>
    <li><a href="#">Link #4</a></li>
    <li><a href="#">Link #5</a></li>
    <li><a href="#">Link #6</a></li>
    <li><a href="#">Link #7</a></li>
  </ul>  
</nav>

  


  </div>
  )
}
export default navbar;
