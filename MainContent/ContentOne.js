import React from 'react';

import './ContentOne.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

import ContentTwo from './ContentTwo';
// import GridOne from './GridOne';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  style: {
    
    color:'#fff',
    height:'4rem',
    textTransform: 'uppercase',
    width: '9rem',
    fontFamily: 'Josefin Sans',
    background:'#222', 
  },
  
}));

 const ContentOne = ()=>{
   const classes = useStyles();
  return(
    <div>
        <h2>To facilitate this Leader Classes :- </h2>

        <h3 style={{textAlign:'center', fontSize: '1.8rem',}}>1. Relentlessly tracks and learns from</h3>

        <h4 style={{textAlign:'center', fontSize: '1.5rem'}}>100+ ​FULLTIME/ EXECUTIVE DEVELOPMENT PROGRAMS AT PRE-EMINENT UNIVERSITIES</h4>
          <h3 style={{textAlign:'center'}}>LIKE</h3>


        <div className={classes.root} >
      <Chip label="Hardvard" variant="outlined"  className={classes.style}/>
      <Chip label="MIT" variant="outlined" className={classes.style}/>
      <Chip label="Yale" variant="outlined" className={classes.style}/>
      <Chip label="Oxford" variant="outlined" className={classes.style}/>
      <Chip label="UC Berkeley" variant="outlined" className={classes.style}/>
      <Chip label="Stanford" variant="outlined" className={classes.style}/>
      <Chip label="UPENN" variant="outlined" className={classes.style}/>
      <Chip label="INSEAD" variant="outlined" className={classes.style}/>
      <Chip label="IMD" variant="outlined" className={classes.style}/>
      <Chip label="LBS" variant="outlined" className={classes.style}/>
      <Chip label="CAMBRIDGE" variant="outlined" className={classes.style}/>
      <Chip label="Northwestern" variant="outlined" className={classes.style}/>
      </div>
  <h4 style={{textAlign:'center', fontSize: '1.5rem'}}>ECONOMY AND GLOBALIZATION ENABLERS</h4>
    <img src="https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5cee5e4e9e02e155e211b800_insti.-name-pg.png" alt="Images of Economy & Globalization Enablers are being tracked by LeaderClasses" className="image"  width="100%" style={{marginTop: '-5rem'}}/>

      <h3 style={{textAlign:'center', marginTop: '-3rem', fontSize: '1.5rem' }}> 50+ Renowned High Potential (HI-PO) & Executive Leadership Development programs of Top Tier Organisations</h3>
        <h3 style={{textAlign:'center'}}>LIKE</h3>

        <img 
        srcset="https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5cee60b4add0da9fd6fb1f81_Keep-Going.png 480w,https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5cee60b4add0da9fd6fb1f81_Keep-Going.png 800w"
         sizes="(max-width: 600px) 480px,800px"
        src="https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5cee60b4add0da9fd6fb1f81_Keep-Going.png" style={{width: '100%'}}/>

        
        <h3 style={{textAlign:'center'}}>Thoughts, Actions, Advice, Life  & Inspiration  of</h3>

       <img 
       srcset="https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5cee61989e02e114db11d186_final-leaders-500.jpg 480w,https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5cee61989e02e114db11d186_final-leaders-500.jpg 800w"

       sizes="(max-width: 600px) 480px,800px"
       src="https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5cee61989e02e114db11d186_final-leaders-500.jpg" style={{width: '50%', display:'block', marginLeft: 'auto', marginRight: 'auto'}}/>

        <h3 style={{textAlign: 'center', fontSize: '1.5rem', textTransform: 'uppercase'}}>of the foremost world leaders</h3>
        <h3 style={{textAlign: 'center'}}>LIKE</h3>
        <h3 style={{textAlign: 'center'}}>&</h3>
        <h3 style={{textAlign: 'center', fontSize: '1.5rem', textTransform: 'uppercase'}}>Other Leaders par excellence.</h3>
        <h3 style={{textAlign: 'center', fontSize: '1.5rem', textTransform: 'uppercase'}}>Ingesting an extra-ordinary amount of </h3>
        <h3 style={{textAlign: 'center', fontSize: '1.5rem', textTransform: 'uppercase'}}>this exceptionally valuable content </h3>
        <h3 style={{textAlign: 'center', fontSize: '1.5rem', textTransform: 'uppercase'}}>on 100+ Topics of Strategic Importance from</h3>

        <img src="https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5cee670d74fc2b3ac772ea55_funnel-final1.png" style={{width: '50%', display:'block', marginLeft: 'auto', marginRight: 'auto'}}/>

        <img src="https://uploads-ssl.webflow.com/5cee4a9d039b6f4c26addf6b/5cee674574fc2b922672ea8c_LSPG3.png" style={{width: '50%', display:'block', marginLeft: 'auto', marginRight: 'auto'}}/>

      <p style={{textAlign:'center', fontSize: '1.5rem'}}>Delivered via an Online Portal, </p>
      <p style={{textAlign:'center', fontSize: '1.5rem'}}>accessible to our Members through an extremely affordable, Annual Subscription - Our Membership</p>

        <ContentTwo />
      

    </div>
  );
 }

 export default ContentOne;