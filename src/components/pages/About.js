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
            <img alt="portrait" className="profilePic" src="me.jpg"/>
          </div>
        <p>
            {/* <img src="/social/if_2018_social_media_popular_app_logo_googleplus_2894409.png"/> */}
            {/*<img src="/social/if_2018_social_media_popular_app_logo_messenger_2894411.png"/> */}
            <a href="https://www.linkedin.com/in/alexnewark/"><img alt="LinkedIn" src="/social/linkedin.png"/></a>
            <a href="https://github.com/Alex-231"><img alt="GitHub" src="/social/github.png"/></a>
            <a href="https://twitter.com/Alex231_"><img alt="Twitter" src="/social/twitter.png"/></a>
            <a href="https://www.youtube.com/user/A13x231"><img alt="YouTube" src="/social/youtube.png"/></a>
            <a href="https://discordapp.com/invite/zMK7eFs"><img alt="Discord" src="/social/discord.png"/></a>
            <a href="https://open.spotify.com/user/a13x231"><img alt="Spotify" src="/social/spotify.jpg"/></a>
            <a href="https://www.instagram.com/alexn231/"><img alt="Instagram" src="/social/instagram.png"/></a>
            <a href="https://www.pinterest.co.uk/alexnewark/"><img alt="Pinterest" src="/social/pinterest.png"/></a>
            <a href="skype:live:alexnewark_2?add"><img alt="Skype" src="/social/skype.png"/></a>
            {/* <img src="/social/if_2018_social_media_popular_app_logo_tumblr_2894419.png"/> */}
            {/* <img src="/social/if_2018_social_media_popular_app_logo-whatsapp_2894416.png"/> */}
            <a href="https://www.reddit.com/user/Alex_231/"><img alt="Reddit" src="/social/reddit.png"/></a>
            <a href="mailto:alex@alexnewark.co.uk"><img alt="E-Mail" src="/social/email.png"/></a>
            {/* <img src="/social/"/> */}
            </p>
        </div>
        <div id="about" className="centerMargins">
              <h2>About Me</h2>
              <p>Hello, World! I'm Alex, a Computing Sciences student in Norwich, studying at the Universiy of East Anglia.
                I'm a fan of some nerdy things, comics and cartoons. I also enjoy lots of music and podcasts, and I love to stay creative.
                <h3>A Brief History of My Time as a Developer</h3>
                I began programming in my spare time while I was in school, addons for game called Garry's Mod allowed players to create LUA scripts to interact with the game and make new things. I learned to make my own scripts, then a friend swiftly introduced me to HTML, CSS and PHP.
                I started wondering how the applications I use every day were created, which lead me to learn C#. Once I was confident, I created solutions to my friends' problems, which was mainly applications to simplify complicated tasks or blogs for students who wished to share their own content. 
                Eventually I begun solving some of my teacher's problems, which included more applications to simplify tasks and preparing and somewhat documenting new hardware such as raspberry pis' for students to use.
                I also started to teach other students what I had learned as at the time, the school didn't teach computing.
                <br/><br/>
                When I finished school I spent a long time learning lots more online, I started making projects with Node and learning more about low level languages like C++. In college I continued to develop my skills and learned a bit more about software development as a career, and project management.
                I had the opportuity to get some experience as a software developer at Automatic Data Processing, and then at Mold Agency. Two very different organizations, both very enjoyable.
                <br/><br/>
                These days I'm still learning, working on as many projects as I can in my spare time and making the most of university.
              </p>
          <div className="row">
            <div className="col-md-6">
                <h2>Twitter</h2>
                <a className="twitter-timeline" data-tweet-limit="3" data-theme="dark" data-link-color="#E81C4F" href="https://twitter.com/Alex231_?ref_src=twsrc%5Etfw">Tweets by Alex231_</a>
            </div>
            <div className="col-md-6">
                <h2>Discord</h2>
                <iframe title="discordFrame" src="https://discordapp.com/widget?id=397047707119648768&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0"></iframe>
            </div>
          </div>
        </div>
    </div>
  );
  }
}