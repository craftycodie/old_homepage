import React from "react"

import Navigation from "./Navigation"

export default class Header extends React.Component {
  render() {
      return (
          <div>
              <div id="headerImage">
              <div>
        <header>
            <div className="left">
            <h1>
                <b>Alex Newark</b>
            </h1>
            <p><b>Norwich // Software Engineer</b><br/>
            Student at UEA. Other things.
            {/* <small> Music addict, podcast enthusiast.</small>*/}</p>
            </div>
            <div className="right">
            <img src="https://pbs.twimg.com/profile_images/954254230314979328/ISO3BgXP_400x400.jpg"/>
            </div>
        </header>
        </div>
        </div>
        <Navigation />
        </div>
      );
  }
}