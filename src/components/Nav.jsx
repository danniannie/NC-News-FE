import { Link } from "@reach/router";
import React, { Component } from "react";
import * as api from "../utils/api";

class Nav extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;
    return (
      <div className="nav">
        <Link to={"/"}>Home</Link>
        {topics.map(topic => {
          return (
            <Link to={`/topics/${topic.slug}`} key={topic.slug}>
              {topic.slug}
            </Link>
          );
        })}
      </div>
    );
  }
  componentDidMount = async () => {
    const topics = await api.fetchTopics();
    this.setState({ topics });
  };
}

export default Nav;

// const Nav = ({ topics }) => {
//   return (

//   );

// };

// export default Nav;
