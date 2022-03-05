import React from "react"
import { Link } from 'react-router-dom';

export default class BlogPostPreview extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      blogPost: null,
      errorCount: 0
    };
  }

  render() {
    if(this.state.blogPost == null)
    {
      if(this.state.errorCount >= 3)
      {
        return (
          <div className="page">
            <div id="blogPost" className="centerMargins failedLoad">
              <h1>Failed to load blog post.</h1>
              <p>
                The blog may be down for maintainence. 
                <br/>
                Please try again later.
                <br/>
              </p>
              <span onClick={this.props.history.goBack}>Go Back</span>
              <br/>
              <Link to="/">Go to Portfolio</Link>
            </div>
          </div>
        );
      }

      this.getPostData();

      if(this.state.errorCount > 0)
      {
        return (
          <div className="page">
            <div id="blogPost" className="centerMargins">
              <h2>Loading...</h2>
              <p>An error occured while loading the blog post.
                <br/>
                Trying {3-this.state.errorCount} more times...
              </p>
            </div>
          </div>
        );
      }

      return (
        <div className="page">
          <div id="blogPost" className="centerMargins">
            <h2>Loading blog post...</h2>
          </div>
        </div>
      );
    }

    return (    
      <div className="page">
        <div id="blogPost" className="centerMargins">
          <h1 className="postTitle">{this.state.blogPost.title}</h1>
          {apiHandler.isUserLogged() ? <small>{this.state.blogPost._id}</small> : null}
          <hr/>
          <div className="postBody">
            {/* {ReactHtmlParser(showdownConverter.makeHtml(this.state.blogPost.body))} */}
          </div>
          <hr/>
          <Link to={"/blog"}>&lt;&lt; Back to Blog</Link>
          <span className="right">
          {this.state.blogPost.draft ? <span><span className="badge badge-secondary">Draft </span> </span> : ""}{this.state.blogPost.sticky ? <span><span className="badge badge-secondary">Sticky Post</span> </span> : ""}<small>{createdString}</small>
          </span>
        </div>
      </div>
    );
  }
}