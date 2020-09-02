import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  dark : {
      backgroundColor : 'black',
      height : '10vh'
  },
  field : {
      margin : '10px',
      cursor : 'pointer'
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.dark}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Typography variant="overline" display="block" gutterBottom className={classes.field}>
        Help
      </Typography>
      <Typography variant="overline" display="block" gutterBottom className={classes.field}>
        JoinUs
      </Typography>
      <Typography variant="overline" display="block" gutterBottom className={classes.field}>
        Signin
      </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
