import React from "react"
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {

  render() {
    return (
        <nav>
          <hr/>
          <Link to="/">Portfolio</Link>
          <span> | </span>
          <Link to="/blog">Blog</Link>
          <span> | </span>
          <Link to="/about">About</Link>
          <hr/>
        </nav>
    );
  }
}