import '../App.css';
import Collapse from '@material-ui/core/Collapse';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import clubImage from '../../assets/club.jpg';
import gigImage from '../../assets/gig.jpg';
import eventImage from '../../assets/event.jpg';
import { useSelector } from 'react-redux';


const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  description: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    color: '#ddd',
  }
});

/*const cards = [
  {
    image: gigImage,
    title: "Gigs",
    description: "People can find simple, paid or free tasks. Example: A student moving from a state to another, needs help with carrying heavy stuff.",
    pageLink: "/gigs",
  },
  {
    image: clubImage,
    title: "Clubs",
    description: "People sharing the same interests can join the same clubs.  Example: Chess club, running club.",
    pageLink: "/clubs",
  },
  {
    image: eventImage,
    title: "Events",
    description: "People can engage and participate in community-based events or activities. Example: Restoring a public park, Raising money for someone in need, Polyglot meeting, entertainment.",
    pageLink: "/events",
  }
];

const defaultActivity = cards[0]*/

export default function ImageCard({ activity, checked }) {
  const classes = useStyles();

  return (
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
       <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={activity.image}
        />
        <CardContent>
          <Typography
	    gutterBottom
	    variant="h5"
	    component="h2"
	    className={classes.title}
	  >
	    {activity.title}
          </Typography>
          <Typography
	    variant="body2"
	    color="textSecondary"
	    component="p"
	    className={classes.description}
	  >
            {activity.description}
	  </Typography>
        </CardContent>
	  { /* <CardActions>
	  <Link className={classes.link} to={activity.pageLink}>
          <Button size="small" color="primary">
            View
          </Button>
	  </Link>
      </CardActions> */ }
    </Card>
   </Collapse>
  );
}
