import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
}));

export default function () {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ImageCard card={}/>
    </div>
  );
}
