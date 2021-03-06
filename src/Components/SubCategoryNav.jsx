import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {withRouter,Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function SubCategoryNav(props) {
  const classes = useStyles();

  
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className="flex">
        <Toolbar>
            {
              props.subCategories.map((category,index)=>{
                return(
                  <Link to={{pathname:`/${props.sourceRoute}/${category}`,
                  aboutProps:{name : 'testName'}}} key={index}>
                  <Button variant="outlined" key={index} className={classes.menuButton}>{category}</Button>
                  </Link>
                )
              })
            }
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withRouter(SubCategoryNav)