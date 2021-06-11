import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../../../assets/iwilogo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserNavbar from './UserNavbar';
import GuestNavbar from './GuestNavbar';

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: 'none',
  },
  appbarTitle: {
    flexGrow: '1',
    marginRight: '10px',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#f48fb1',
  },
  title: {
    color: '#fff',
    fontSize: '3rem',
  },
  logo: {
    maxWidth: 100,
  },
}));


export default function Navbar() {
  const currentUser = useSelector((state) => state.currentUser);
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appbar} elevation={0}>
	<Toolbar className={classes.appbarWrapper}>
	  <img src={Logo} alt="logo" className={classes.logo} />
	  <h1 className={classes.appbarTitle}>..I<span className={classes.colorText}>W</span>I..
	  </h1>
	<IconButton>
	  <SortIcon className={classes.icon} />
	</IconButton>
	</Toolbar>
      </AppBar>
    </div>
  );
}
  /* return (
    <>
      {
        currentUser ?
        <UserNavbar /> :
        <GuestNavbar />
      }
    </>
  );
};

export default Navbar; */
