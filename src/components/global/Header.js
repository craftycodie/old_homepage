import React from "react"

import Navigation from "./Navigation"

export default class Header extends React.Component {
  render() {
      return (
        <header>
            <h1>
                WEBSITE!
            </h1>
            <small>Software Engineer</small>
            <Navigation />
        </header>
      );
  }
}