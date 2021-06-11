import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './components/ImageCard';
import activities from './components/activities';
import useWindowPosition from './hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
  },
}));

export default function Activities() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="cards">
      <ImageCard activity={activities[1]} checked={checked} />
      <ImageCard activity={activities[2]} checked={checked} />
    </div>
  );
}
