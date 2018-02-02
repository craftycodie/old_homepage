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
                <li>UEA Student from Lincolnshire</li>
                {/* <li>Homestuck Fan</li>
                <li>Podcast Fan</li>
                <li>Music Lover</li>
                <li><span role="img">🌈</span></li>
                <li>Languages and skill ratings with stars!</li>
                <li>YouTube Link</li> */}
              </ul>
            </div>
            <div className="col-md-6">
              <h2>Social</h2>
              <p>Find me on...</p>
              <ul>
                <li>Skype: <a href="skype:live:alexnewark_2?add">live:alexnewark_2</a></li>
                <li>Discord: Alex231#9823 (<a href="https://discordapp.com/invite/NJCvUzR">Join My Server</a>)</li>
                <li>Twitter: <a href="https://twitter.com/Alex231_">@Alex231_</a></li>
                <li>Email Me: <a href="mailto:alex@alexnewark.co.uk">alex@alexnewark.co.uk</a></li>
                {/* <li>Email Form</li> */}
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
  }
}