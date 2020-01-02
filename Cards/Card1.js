import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Card.css';

const useStyles = makeStyles({
  card1: {
    textAlign: 'center',
    minWidth: 275,
    marginTop: 90,
    backgroundColor: '#222'
  },
  title1: {
    fontSize: 22,
    color: 'orange'
  },
  pos1: {
    marginBottom: 12,
  },


  card2: {
    textAlign: 'center',
    marginTop: 20,
    backgroundColor: '#222',
    
  },
  title2: {
    fontSize: 20,
    color: 'orange'
  },
  pos2: {
    marginBottom: 12,
  },

});


export default function OutlinedCard() {
  const classes = useStyles();


  return (
    <div>
    <Card className={classes.card1} variant="outlined">
      <CardContent>
        <Typography className={classes.title1} style={{fontFamily: 'Josefin Sans'}} color="textSecondary" gutterBottom>
          Leader Classes harnesses the world's best Career Advancement & Leadership Development resources, helping you gain Expert Knowledge, Practical Guidance & Actionable Insights from Extraordinary Leaders & World Class Institutions through Specialized,  Affordable, Online & Offline Programs custom crafted to Accelerate your Career & Business Success while transforming you into a better & more effective Leader.
        </Typography>
      </CardContent>
      
    </Card>


    <Card className={classes.card2} variant="outlined">
      <CardContent>
        <Typography className={classes.title2} style={{fontFamily: 'Josefin Sans'}} color="textSecondary"  gutterBottom>
         To see for yourself the quality of our Video Content & how it can help you, we invite you to  view our Founder CEO's introductory Video providing <a  style={{color: 'red'}}href="https://www.leaderclasses.com/videos/career-acceleration-insights-video">'Expert Insights to Accelerate your Career'</a>  if you have not done the same already.
        </Typography>
      </CardContent>
      
    </Card>

  </div>
  );
}