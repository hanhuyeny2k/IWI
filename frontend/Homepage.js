import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { CssBaseline, IconButton, Collapse } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import userpageWallpaperImage from '../assets/userpageWallpaper.jpg';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Activities from './Activities';
import { Link as Scroll } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
   root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Nunito',
  },
   colorText: {
     color: '#fb8fb1',
  },
   title: {
     color: '#fff',
     fontSize: '4.5rem',
  },
   goDown: {
     color: '#fb8fb1',
     fontSize: '4rem',
  },
}));

export default function Homepage() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(()=>{
    setChecked(true);
  },[])

  return (
    <div className={classes.root} id="header">
      <CssBaseline />
    <Collapse
      in={checked}
      {...(checked ? { timeout: 1000 } : {})}
      collapseHeight={50}>
      <div>
	<h1 className={classes.title}>
	  Let's Get <br />
	  <span className={classes.colorText}>Connected</span> !
	</h1>
	<Scroll to="cards" smooth={true}>
	<IconButton>
	  <ExpandMoreIcon className={classes.goDown} />
	</IconButton>
	</Scroll>
      </div>
    </Collapse>
    </div>
  );
}
