import React from "react"

export default class About extends React.Component {
  
  render() {
    return (
    <div class="page">
        <div id="about" class="centerMargins">
          <div class="row">
            <div class="col-md-6">
              <h2>About</h2>
              <ul>
                <li>UEA Student from Boston, Lincolnshire</li>
                <li>Homestuck Fan</li>
                <li>Podcast Fan</li>
                <li>Music Lover</li>
                <li>🌈</li>
                <li>Languages and skill ratings with stars!</li>
                <li>YouTube Link</li>
              </ul>
            </div>
            <div class="col-md-6">
              <h2>Contact</h2>
              <ul>
                <li>Skype:</li>
                <li>Discord:</li>
                <li>Twitter:</li>
                <li>Email Me:</li>
                <li>Email Form</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
  }
}