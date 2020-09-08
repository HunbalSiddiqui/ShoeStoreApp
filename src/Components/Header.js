import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {SportsBasketballTwoTone} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  dark : {
      backgroundColor : '#DAE0E2',
      height : '10vh'
  },
  field : {
      margin : '10px',
      cursor : 'pointer',
      borderRight : '1px solid white',
      boxSizing : 'border-box',
      padding : '1rem 2rem',
      height : '50%',
      display : 'flex',
      justifyContent : 'center',alignItems:'center',
      color : 'black'
  },
  title: {
    flexGrow: 1,color : 'black'
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.dark}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <SportsBasketballTwoTone></SportsBasketballTwoTone>
          </Typography>
          <Typography variant="overline" display="block" gutterBottom className={classes.field}>
        Help
      </Typography>
      <Typography variant="overline" display="block" gutterBottom className={classes.field}>
        Join Us
      </Typography>
      <Typography variant="overline" display="block" gutterBottom className={classes.field}>
        Signin
      </Typography>
      <Typography variant="overline" display="block" gutterBottom className={classes.field}>
        Checkout
      </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
