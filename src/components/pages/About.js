import React from "react"

export default class About extends React.Component {
  
  componentDidMount() {
    if(window.twttr != null)
      window.twttr.widgets.load()
  }

  render() {
    return (
    <div className="page">
        <div id="social" className="centerMargins">
          <div>
            <img className="profilePic" src="https://pbs.twimg.com/profile_images/954254230314979328/ISO3BgXP_400x400.jpg"/>
          </div>
        <p>
            {/* <img src="/social/if_2018_social_media_popular_app_logo_googleplus_2894409.png"/> */}
            {/* <img src="/social/if_2018_social_media_popular_app_logo_instagram_2895177.png"/>
            <img src="/social/if_2018_social_media_popular_app_logo_linkedin_2894410.png"/>
            <img src="/social/if_2018_social_media_popular_app_logo_messenger_2894411.png"/> */}
            <a href="https://www.pinterest.co.uk/alexnewark/"><img src="/social/if_2018_social_media_popular_app_logo_pinterest_2894412.png"/></a>
            {/* <img src="/social/if_2018_social_media_popular_app_logo_reddit_2894413.png"/> */}
            <a href="skype:live:alexnewark_2?add"><img src="/social/if_2018_social_media_popular_app_logo_skype_2894414.png"/></a>
            {/* <img src="/social/if_2018_social_media_popular_app_logo_tumblr_2894419.png"/> */}
            <a href="https://twitter.com/Alex231_"><img src="/social/if_2018_social_media_popular_app_logo_twitter_2895134.png"/></a>
            {/* <img src="/social/if_2018_social_media_popular_app_logo_vine_2894418.png"/> */}
            <a href="https://www.youtube.com/user/A13x231"><img src="/social/if_2018_social_media_popular_app_logo_youtube_2895135.png"/></a>
            <a href="https://open.spotify.com/user/a13x231"><img src="/social/spotify-logo.jpg"/></a>
            {/* <img src="/social/if_2018_social_media_popular_app_logo-whatsapp_2894416.png"/> */}
            <a href="https://discordapp.com/invite/NJCvUzR"><img src="/social/if_2018_social_media_popular_app_logo-discord_2894416.png"/></a>
            <a href="https://github.com/Alex-231"><img src="/social/github.png"/></a>
            <a href="mailto:alex@alexnewark.co.uk"><img src="/social/email.png"/></a>
            {/* <img src="/social/"/> */}
            </p>
        </div>
        <div id="about" className="centerMargins">
          <div className="row">
            <div className="col-md-12">
              <h2>About</h2>
              <ul>
                <li>UEA Student from Lincolnshire</li>
                {/* <li>Homestuck Fan</li>
                <li>Podcast Fan</li>
                <li>Music Lover</li>
                <li><span role="img">🌈</span></li>
                <li>Languages and skill ratings with stars!</li>
                https://www.gotinder.com/@alexn231 */}
              </ul>
            </div>
            {/* <div className="col-md-6">
              <h2>Social</h2>
              <p>Find me on...</p>
              <ul>
                <li>Skype: <a href="skype:live:alexnewark_2?add">live:alexnewark_2</a></li>
                <li>Discord: Alex &lt;&gt;#9823 (<a href="https://discordapp.com/invite/NJCvUzR">Join My Server</a>)</li>
                <li>YouTube: <a href="https://www.youtube.com/user/A13x231">Alex231</a></li>
                <li>Twitter: <a href="https://twitter.com/Alex231_">@Alex231_</a></li>
                <li>Email Me: <a href="mailto:alex@alexnewark.co.uk">alex@alexnewark.co.uk</a></li>
                li>Email Form</li> 
              </ul>
            </div> */}
          </div>
          <div className="row">
            <div className="col-md-6">
                <h2>Twitter</h2>
                <a className="twitter-timeline" data-tweet-limit="3" data-theme="dark" data-link-color="#E81C4F" href="https://twitter.com/Alex231_?ref_src=twsrc%5Etfw">Tweets by Alex231_</a>
            </div>
            <div className="col-md-6">
                <h2>Discord</h2>
                <iframe src="https://discordapp.com/widget?id=397047707119648768&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>
            </div>
          </div>
        </div>
    </div>
  );
  }
}