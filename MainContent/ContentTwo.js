import React from 'react';

import './ContentTwo.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ContentThree from './ContentThree.js';


const useStyles = makeStyles(theme => ({
    style: {
  background: '#2E4053', 
  color: '#F1C40F',
  textAlign: 'center'
  },
   card1: {
    textAlign: 'center',
    minWidth: 275,
    marginTop: 30,
    background: '#222',
    
  },
  title1: {
    fontSize: 22,
  },
  pos1: {
    marginBottom: 12,
  },

  
}));

export default function ContentTwo(){
  const classes = useStyles();
  return(
    <div >
      <div class="container">

    <Card className={classes.card1} variant="outlined">
      <CardContent>
        <Typography className={classes.title1} style={{fontFamily: 'Josefin Sans'}} color="textSecondary" gutterBottom>
    <h3 style={{textAlign: 'center', fontSize: '1.5rem', textTransform: 'uppercase', marginTop: '3rem', color: 'orange'}}>High Impact offline events</h3>
       <p style={{display: 'flex', flexDirection: 'column', color: 'orange',marginTop:'1rem'}}>Members are also invited to Specialized, High Impact, One-Day, Career Advancement & Strategic Transformation (CAST) Workshops held Offline at select Cities & Countries, for an Immersive Learning & Networking experience enabling them :-</p>
      <p style={{fontWeight: 'bold',textTransform:'uppercase',color: 'orange', marginTop:'1rem' }}> Broaden & Deepen their Leadership Foundations while learning first hand with us.</p>
      <p style={{fontWeight: 'bold', marginTop: '1rem',color: 'orange',textTransform:'uppercase'}}> Efficiently Network & Build Relationships with their finest peers.</p>
        </Typography>
      </CardContent>
      
    </Card>


   
   
      
  <p style={{textAlign: 'center', fontSize: '1.5rem', marginTop: '3rem'}}>These High Impact, One Day, Offline CAST events are aligned to the Strategic Career Management & Leadership Development needs at Three stages of our Members' Life :-</p>
  
  <main class="grid" >


    <article className={classes.style}>
      
      <div class="text" >
        <h3>Category - I - Budding Leaders commerce & other students</h3>
        
        <p>Ambitious Chartered Accountants, Commerce, Business, Arts, Sciences & other Students aspiring to progress to Director / GM / VP /  Higher level roles within 10-12 years of completing their education.</p>
       
      </div>
    </article>
    <article className={classes.style}>
      
      <div class="text">
        <h3>Category - II - Budding Leaders Engineering Students</h3>
        <p>Ambitious  Engineering Students aspiring to progress to Director / GM / VP /  Higher level roles within 10-12 years of completing their education.</p>
       
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
        <h3>Category - IV - Budding Leaders MBA Students</h3>
        <p>Ambitious MBA Students aspiring to progress to Director / GM / VP /  Higher level roles within 10-12 years of completing their education.</p>
      
      </div>
    </article >
    <article className={classes.style}>
      
      <div class="text">
        <h3>Category - V - Budding Leaders Working Professionals</h3>
        <p>Ambitious Working Professionals ( Annual Gross Compensation Upto INR 50 Lakhs per annum if  based in India & Upto USD 200K p.a if  based outside India ). keen on accelerating their success to transition into our Future Leaders category within the next 6-8 years.</p>
       
      </div>
    </article>
    <article className={classes.style}>
      
      <div class="text">
        <h3>Category - VI - Future Leaders</h3>
        <p>Ambitious Director / General Manager / Vice President level Professionals (Annual Gross Compensation exceeding INR 50 Lakhs per annum if  based in India & Over USD 200K p.a if  based outside India.) keen on accelerating their success to transition into a high performing C-Level Leader within the next 6-8 years.</p>
      
      </div>
    </article>

    <article className={classes.style} >
      
      <div class="text">
        <h3 style={{textAlign: 'center'}}>Category VII - Emerging Leaders</h3>
        <p>Ambitious Country / Multi-Country / Global Business Heads / Function Heads / Country Heads / Country Managers / C-Level Professionals / Partners / Senior Partners / Managing Directors / Presidents ,  Entrepreneurs, Family Business Leaders,  Founders / Co-Founders / Founding Team Members of Growth & Expansion Stage Ventures ( Annual Compensation > INR 1 Crore p.a in India & Over US $ 500K if based outside India ) keen on evolving within the next decade to Global / Group C-Level / Board Level roles typically offering an Annual Compensation > US $ 1 Million in India & Over US $ 5 Million if based outside India.</p>
      
      </div>
     </article>
     
  </main>
  <p style={{textAlign: 'center', fontSize: '1.5rem', marginTop: '3rem'}}>To know more about & to join our exclusive, exceptional network of ambitious minds, we invite you to review our Membership page.  We look forward to hearing from & having you in our exceptional network, soon.</p>
</div>
<ContentThree />

  </div>
  )
}