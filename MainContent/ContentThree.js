import React from 'react';
import './ContentThree.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    style: {
      background: '#2E4053', 
      color: '#F1C40F',
      textAlign:'center',
      fontSize:'20px',
      padding: '1rem',
      lineHeight: '2rem'


    },
    image: {
     borderRadius:'5rem'
    },
    names: {
      fontSize: '1.5rem',
      textTransform: 'uppercase'
    },
    card1: {
    textAlign: 'center',
    minWidth: 200,
    marginTop: 10,
    background: '',
    backgroundColor: '#222',
    
  

    
  },
   title1: {
    fontSize: 17,
  },
  
}));

export default function ContentThree(){
  const classes = useStyles();
  return(

    <div>

    <main class="grid">


      <article className={classes.style}>
      
        <div class="text">
          
            <img src="https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d22ce7f420c544e6a3d3d81_ram.jpg" className={classes.image} />
          <h4 className={classes.names}>Ram Gopal</h4>
          <h5>Chief Executive Officer Barclays India</h5>
        
        </div>
     </article>
     <article className={classes.style}>
      
      <div class="text">
        <h3>Executive Biography </h3>
        <p> An MBA from the University of Chicago & a CFA charter holder, Ram brings over 26+ of experience gained at Citibank, Standard Chartered & Barclays across various geographies & divisions to his current responsibility of designing & executing country strategy for Barclays in India , with accountability for financial performance & market position for the Bank.</p>
       
      </div>
    </article>
    <article className={classes.style}>
      
      <div class="text">
        <h3>Category - III - Budding Leaders Ms / Phd / me / M.tech Students</h3>
        <p> Ambitious MS, PhD, ME & M.Tech Students aspiring to progress to Director / GM / VP /  Higher level roles within 10-12 years of completing their education.</p>
       
      </div>
    </article>
    <article className={classes.style}>
      
      <div class="text">
        <img src="https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d2c54f5187e93ca69c6132b_459789-srivastava.jpg" className={classes.image} />

        <h4 className={classes.names}> Gunjan Srivastava</h4>
        <h5> Chairman - Region Asia Pacific Board. Bosch Siemens Home Appliances.</h5>
      
      </div>
    </article>
    <article className={classes.style}>
      
      <div class="text">
        <h3>Executive Biography </h3>
        <p> An Alumnus of IIT-BHU & IIMA, Gunjan brings over 28+ years at work at Gillette, Philips,Sennheiser & Bosch Siemens in Strategy, Consumer Marketing & Market Development across Europe & Asia to his current role as Chairman of the Region Asia Pacific Board of Bosch Siemens Home Appliances Asia Pacific Business.</p>
       
      </div>
    </article>
    <article className={classes.style}>
      
      <div class="text">
        <h3>Category - VI - Future Leaders</h3>
        <p>Ambitious Director / General Manager / Vice President level Professionals (Annual Gross Compensation exceeding INR 50 Lakhs per annum if  based in India & Over USD 200K p.a if  based outside India.) keen on accelerating their success to transition into a high performing C-Level Leader within the next 6-8 years.</p>
      
      </div>
    </article>

    <article className={classes.style}>
      
      <div class="text">
        <img src="https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d2c52ba9ea87fc6110e3b01_Achint_Setia.jpg" className={classes.image}/>
        <h4 className={classes.names}>   Achint Setia</h4>
        <h5>Vice President, Marketing at Myntra</h5>       
      </div>
    </article>
     <article className={classes.style}>
      
      <div class="text" >
        <h3>Executive Biography  </h3>
        <p>  An ISB Alumnus, Achint is an Industry Fast Tracker from the TMT sector, bringing his experience at Microsoft, McKinsey & Viacom across Product Development, Strategy, Corporate Development, Innovation & Market Development to his current role of building Myntra leveraging his Digital Strategy & Execution expertise.</p>
       
      </div>
    </article>

    <article className={classes.style}>
      
      <div class="text">
        <h3>Executive Biography  </h3>
        <p>  An ISB Alumnus, Achint is an Industry Fast Tracker from the TMT sector, bringing his experience at Microsoft, McKinsey & Viacom across Product Development, Strategy, Corporate Development, Innovation & Market Development to his current role of building Myntra leveraging his Digital Strategy & Execution expertise.</p>
       
      </div>
    </article>


    <article className={classes.style}>
      
      <div class="text">
        <img src="https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5d22e15cc79ae86fa59f3857_nitin.jpg" className={classes.image}/>
        <h4 className={classes.names}>Nitin Kochhar</h4>
        <h5>COO @ Hero Electronix </h5>       
      </div>
    </article>
     <article className={classes.style}>
      
      <div class="text">
        <h3>Executive Biography  </h3>
        <p> An IIFT Alumnus, Nitin is an Industry Fast Tracker from the E-Commerce & FMCG sectors, bringing his experience in Corporate Finance, Marketing, Category Management & Market Development at Flipkart, Shopclues & Rivigo to his current role of  heading the Consumer IoT</p>
       
      </div>
    </article>

    <article className={classes.style}>
      
      <div class="text">
        <h3>Executive Biography  </h3>
        <p>  An ISB Alumnus, Achint is an Industry Fast Tracker from the TMT sector, bringing his experience at Microsoft, McKinsey & Viacom across Product Development, Strategy, Corporate Development, Innovation & Market Development to his current role of building Myntra leveraging his Digital Strategy & Execution expertise.</p>
       
      </div>
    </article>
    



  </main>
  
      <h3 style={{textAlign: 'center'}}>Know more & Apply for Our Membership</h3>

      <h4 style={{textAlign: 'center'}}>Campus Partners</h4>
      <h5 style={{textAlign: 'center'}}>REPRESENTING AN  INSTITUTION  ?</h5>


 <Card className={classes.card1} variant="outlined">
      <CardContent>
        <Typography className={classes.title1} style={{fontFamily: 'Josefin Sans', color: 'orange'}} color="textSecondary" gutterBottom> 
      <p style={{textAlign: 'center',  fontSize:'20px' }}>LeaderClasses is at a very interesting phase of its growth & is actively looking to expand our Campus Partnerships Pan-India.</p>
      <p style={{textAlign: 'center',marginTop: '-1rem', fontSize:'20px'}}>If you are an Institutional Representative of a University / College interested in building a relationship with us , we invite you to review our "Campus Partners" page & submit your details via our Campus Partners form.</p>
      <p style={{textAlign: 'center',marginTop: '-1rem', fontSize:'20px'}}>We look forward to hearing from you soon & will advise interest/next steps within 5 Business Days of receipt of your "Campus Partners Form"</p>
      <p style={{textAlign: 'center', marginTop: '-1rem', fontSize:'20px' }}>Thanks for your Time and attention  </p>
      <p style={{textAlign: 'center', marginTop: '1rem', fontSize:'20px'}}>Team- LeaderClasses</p>
        </Typography>
      </CardContent>
    </Card>  

 <div class="footer" style={{marginTop: '10px', bottom: '-14px' }}>
  <div class="contain">
      <div class="col">
        <h2></h2>
        <ul>
          <li>CONTACT</li>
          <li>TERMS</li>
        
        </ul>
      </div>

      <div class="clearfix">  <p style={{color: '#fff',fontSize: '14px',textAlign: 'center', textTransform: 'uppercase'}}>© 2019 LeaderClasses ( Awesome Firms ) & its owners. All rights reserved.</p>
      <p style={{color: '#fff', textAlign: 'center', marginTop: '0.1rem', padding: '0.5rem', textTransform: 'uppercase'}}>All trademarks, logos & intellectual property featured belong to their respective owners. They do not endorse us in any way.</p>
      </div>
      
    
  </div>
</div>


      
</div>



  )
}