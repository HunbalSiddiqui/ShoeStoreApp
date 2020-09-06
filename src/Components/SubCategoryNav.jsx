import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {MergeType} from '@material-ui/icons'
const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SubCategoryNav(props) {
  var [subCategories,setSubCategories] = useState([])
  const fetchSubCategories = () =>{
      props.subCategories.forEach(category => {
          setSubCategories((prevState)=>[...prevState,category])
      });
  }
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  useEffect(()=>{
      fetchSubCategories()
  },[])
  var test = () => {
    return (
      <h1>Test test</h1>
    )
  }
  return (
   !subCategories ? 
    null
    :
    <BottomNavigation
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    showLabels
    className={classes.root}
  >
   {
     subCategories.map((category,index)=>{
       return (
      <BottomNavigationAction key={index} label={category} icon={<MergeType/>} />
       )
     })
   }

  </BottomNavigation>

  );
}
