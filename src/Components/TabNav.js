import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withRouter} from 'react-router-dom'
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function CenteredTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const navigate = (route) => {
      props.history.push(route)
    // if(route==='HOME')
    // {
    //     props.history.push('/')
    // }
    // else if (route==='MEN')
    // {
    //     props.history.push('/Men')
    // }
}

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        
        <Tab label="Home" onClick={()=>{navigate('/')}}/>
        <Tab label="Men" onClick={()=>{navigate('/Men')}} selected/>
        <Tab label="Kids" onClick={()=>{navigate('/Kids')}}/>
        <Tab label="Women" onClick={()=>{navigate('/Women')}}/>
      </Tabs>
    </Paper>
  );
}

export default withRouter(CenteredTabs)
