import React from "react";
import { Link } from '@reach/router'

const Heading = (props) => {
  return <div data-cy='header' className="heading"><h1><Link to='/'>NC News</Link></h1><p className='loggedIn'>Logged in as [ {props.username} ]</p></div>;
};

export default Heading;
