import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom'
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

  const navigate = (subRoute) =>{
    
  }
  
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className="flex">
        <Toolbar>
            {
              props.subCategories.map((category,index)=>{
                return(
                  <Button variant="outlined"  className={classes.menuButton}>{category}</Button>
                )
              })
            }
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withRouter(SubCategoryNav)