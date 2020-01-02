import React from 'react';
import './ContentThree.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  <h3 style={{textAlign: 'center', fontSize: '2rem'}}>Not Yet Sure Of  Joining ?</h3>
  <p style={{textAlign: 'center',fontSize: '1.5rem'}}> Hear what Top Tier CEOs & Emerging CEO are saying about LeaderClasses Via their Video Testimonials below :-</p>
  <h3 style={{textAlign: 'center',fontSize: '1.2rem'}}>CEO TESTIMONIALS</h3>
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
        
  
       <iframe src="//fast.wistia.net/embed/iframe/tyz4jtbdeh" style={{width: '100%',height: '225px', marginTop: '7rem'}} />
       <a href="<%=video1[2]%>" target="iframe_video1"><img src="" /></a>
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
        <iframe src="//fast.wistia.net/embed/iframe/zy9cntdbjy" style={{width: '100%',height: '225px', marginTop: '7rem'}} />
      
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
        
               <iframe src="//fast.wistia.net/embed/iframe/2pzbkn5sl6" style={{width: '100%',height: '225px', marginTop: '7rem'}} />

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
          <iframe src="//fast.wistia.net/embed/iframe/ednmcs3w67" style={{width: '100%',height: '225px', marginTop: '7rem'}} />
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
         <a className="title" href="https://www.leaderclasses.com/contact"> <li>CONTACT</li></a>
         <a className="title" href="https://www.leaderclasses.com/terms-and-conditions">  <li>TERMS</li></a>
          <a className="title" href="https://www.leaderclasses.com/privacy"> <li>PRIVACY</li></a>
        
        </ul>
      </div>
  <FontAwesomeIcon style={{color:'#fff'}}icon={['fab', 'facebook-f']} />


      <div class="clearfix">  <p style={{color: '#fff',fontSize: '14px',textAlign: 'center', textTransform: 'uppercase'}}>© 2019 LeaderClasses ( Awesome Firms ) & its owners. All rights reserved.</p>
      <p style={{color: '#fff', textAlign: 'center', marginTop: '0.1rem', padding: '0.5rem', textTransform: 'uppercase'}}>All trademarks, logos & intellectual property featured belong to their respective owners. They do not endorse us in any way.</p>
      </div>
      
    
  </div>
</div>


      
</div>



  )
}