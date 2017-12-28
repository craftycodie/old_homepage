import React from "react"

import Navigation from "./Navigation"

export default class Header extends React.Component {
  render() {
      return (
        <header>
            <h1>
                Alex Newark
            </h1>
            <small>Software Engineer</small>
            <Navigation />
        </header>
      );
  }
}