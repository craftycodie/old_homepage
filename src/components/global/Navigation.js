import React from "react"
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {

  render() {
    return (
      <nav>
        <hr/>
        {this.props.location.pathname !== "/" ? <Link to="/">Portfolio</Link> : <span>Portfolio</span>}
        <span> | </span>
        {this.props.location.pathname !== "/blog" ? <Link to="/blog">Blog</Link> : <span>Blog</span>}
        <span> | </span>
        {this.props.location.pathname !== "/about" ? <Link to="/about">About</Link> : <span>About</span>}
        <hr/>
      </nav>
    );
  }
}