import React from 'react';
import clubImage from '../../assets/club.jpg';
import gigImage from '../../assets/gig.jpg';
import eventImage from '../../assets/event.jpg';


const activities = [
  {
    image: gigImage,
    title: "Gigs",
    description: "People can find simple, paid or free tasks. Example: A student moving from a state to another, needs help with carrying heavy stuff.",
    pageLink: "/gigs",
    time: 1500,
  },
  {
    image: clubImage,
    title: "Clubs",
    description: "People sharing the same interests can join the same clubs.  Example: Chess club, running club.",
    pageLink: "/clubs",
    time: 1500,
  },
  {
    image: eventImage,
    title: "Events",
    description: "People can engage and participate in community-based events or activities. Example: Restoring a public park, Raising money for someone in need, Polyglot meeting, entertainment.",
    pageLink: "/events",
    time: 1500,
  }
];

export default activities
