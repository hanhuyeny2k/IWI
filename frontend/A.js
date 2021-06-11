import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
}));

export default function Abc() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
	  THIS THIS THIS
	  {/*<ImageCard activity={cards[0]} />*/}
    </div>
  );
}

