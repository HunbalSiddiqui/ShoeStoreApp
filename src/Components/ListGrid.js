import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor : '#EAF0F1'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
        <Paper className={classes.paper}>
            <ul >
                <li className="pointer">ORDER STATUS</li>
              <li className="pointer">DELIVERY</li>
              <li className="pointer">RETURNS</li>
            </ul>
          </Paper>
          <Paper className={classes.paper}>
            <ul>
                <li className="pointer">NEWS</li>
              <li className="pointer">CAREERS</li>
              <li className="pointer">INVESTORS</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
                <ul>
                <li className="pointer">PAYMENT OPTIONS</li>
              <li className="pointer">SUSTAINABILITY</li>
              <li className="pointer">CONTACT US</li>
                </ul>
          </Paper>
          <Paper className={classes.paper}>
                <ul>
                <li className="pointer">FIND A STORE</li>
              <li className="pointer">BECOME A MEMBER</li>
              <li className="pointer">SIGN UP FOR EMAIL</li>
                </ul>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
