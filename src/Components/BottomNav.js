import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Facebook,Twitter} from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    width: 500,
    backgroundColor : '#333945'
  },
  tabcolor : {
    color : 'white'
  }
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction className={classes.tabcolor} label="Recent" icon={<RestoreIcon />} />
      <BottomNavigationAction className={classes.tabcolor} label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction className={classes.tabcolor} label="Nearby" icon={<LocationOnIcon />} />
      <BottomNavigationAction className={classes.tabcolor} label="Nearby" icon={<Facebook />} />
      <BottomNavigationAction className={classes.tabcolor} label="Nearby" icon={<Twitter />} />
    </BottomNavigation>
  );
}
