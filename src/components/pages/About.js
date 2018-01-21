import React from "react"

export default class About extends React.Component {
  
  render() {
    return (
    <div className="page">
        <div id="about" className="centerMargins">
          <div className="row">
            <div className="col-md-6">
              <h2>About</h2>
              <ul>
                <li>UEA Student from Boston, Lincolnshire</li>
                <li>Homestuck Fan</li>
                <li>Podcast Fan</li>
                <li>Music Lover</li>
                <li><span role="img">🌈</span></li>
                <li>Languages and skill ratings with stars!</li>
                <li>YouTube Link</li>
              </ul>
            </div>
            <div className="col-md-6">
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