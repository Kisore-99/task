import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card1: {
    minWidth: 275,
    marginTop: 20,
    backgroundColor: 'blue'
  },
  title1: {
    fontSize: 20,
  },
  pos1: {
    marginBottom: 12,
  },


  card2: {
    minWidth: 275,
    marginTop: 20,
    backgroundColor: 'orange'
  },
  title2: {
    fontSize: 20,
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
        <Typography className={classes.title1} color="textSecondary" gutterBottom>
           harnesses the world's best Career Advancement & Leadership Development resources, helping you gain Expert Knowledge, Practical Guidance & Actionable Insights from Extraordinary Leaders & World Class Institutions through Specialized,  Affordable, Online & Offline Programs custom crafted to Accelerate your Career & Business Success while transforming you into a better & more effective Leader.
        </Typography>
      </CardContent>
      
    </Card>


    <Card className={classes.card2} variant="outlined">
      <CardContent>
        <Typography className={classes.title2} color="textSecondary" gutterBottom>
         To see for yourself the quality of our Video Content & how it can help you, we invite you to  view our Founder CEO's introductory Video providing if you have not done the same already.
        </Typography>
      </CardContent>
      
    </Card>

  </div>
  );
}