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
        <p className="para1"><span> Learner Classes</span> harnesses the world's best Career Advancement &amp; Leadership Development resources,&nbsp;helping  you gain Expert Knowledge, Practical Guidance & Actionable Insights from Extraordinary Leaders & World Class Institutions through Specialized,  Affordable, Online & Offline Programs custom crafted to Accelerate your Career & Business Success while transforming you into a better & more effective Leader.</p>
      </div>
      

  </div>
  )
}
export default navbar;
