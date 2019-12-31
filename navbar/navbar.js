import React from 'react';
import './navbar.css'

const navbar= ()=> {
  return(
   <div>
  
      <section class="top-nav">
      <div>
        Leader Classes
      </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
      <div class='menu-button'></div>
    </label>
    <ul class="menu">
      <li className="menu-li">About</li>
      <li className="menu-li">FAQ</li>
      <li className="menu-li">Membership</li>
      <li className="menu-li">Videos</li>
      <li className="menu-li">Campus Partners</li>
      <li className="menu-li">Career</li>
      <li className="menu-li">Login</li>
    </ul>
  </section>

      <div className="content">
        
      </div>
      

  </div>
  )
}
export default navbar;
