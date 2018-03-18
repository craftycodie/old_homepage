import React from "react"
import { Link } from 'react-router-dom';
import InfiniteScroll from '../../util/react-infinite-scroll-component/app/';

import BlogPostPreview from "./blog/BlogPostPreview";
import { apiHandler } from "../../App";

let recentPosts = [];
let stickyPosts = [];
let draftPosts = [];
let loadedAllRecentPosts = false;
let loadedStickyPosts = false;
let loadedRecentPosts = false;
let loadedDraftPosts = false;

export function reloadPosts()
{
  recentPosts = [];
  stickyPosts = [];
  draftPosts = [];
  loadedAllRecentPosts = false;
  loadedStickyPosts = false;
  loadedRecentPosts = false;
  loadedDraftPosts = false;

  loadPosts();
}

export function getAllLoadedPosts()
{
  return recentPosts.concat(stickyPosts).concat(draftPosts);
}

export function loadPosts() {
  if(this)
  {
    if(!loadedStickyPosts)
      this.loadStickyPosts();

    if(!loadedDraftPosts)
      this.loadDraftPosts();
      
    this.loadRecentPosts();
  }
  else
  {
    if(!loadedStickyPosts)
      loadStickyPosts();

    if(!loadedDraftPosts)
      loadDraftPosts();
      
    loadRecentPosts();
  }
}

function loadStickyPosts()
{
  if(loadedStickyPosts)
    return;

  apiHandler.stickyPosts(j => {

    if(loadedStickyPosts)
    {
      if(this)
      {
        this.setState({
          stickyPosts: stickyPosts
        })
      }

      return;
    }

    var newPosts = [];

    j.data.forEach(blogPost => {
      newPosts.push(<BlogPostPreview key={blogPost._id} blogPost={blogPost}/>)
    });

    stickyPosts = newPosts;

    loadedStickyPosts = true;

    if(this)
    {
      this.setState({
        stickyPosts: stickyPosts
      })
    }
  }, () => {
    if(this)
    {
      this.setState({
        stickyPostsRequestFailed: true,
        stickyPostsRequestFailedCount: this.state.stickyPostsRequestFailedCount + 1
      })
    }
  });
}

function loadDraftPosts()
{
  if(loadedDraftPosts)
    return;

  apiHandler.draftPosts(j => {

    if(loadedDraftPosts)
    {
      if(this)
      {
        this.setState({
          draftPosts: draftPosts
        })
      }

      return;
    }

    var newPosts = [];

    j.data.forEach(blogPost => {
      newPosts.push(<BlogPostPreview key={blogPost._id} blogPost={blogPost}/>)
    });

    draftPosts = newPosts;

    loadedDraftPosts = true;

    if(this)
    {
      this.setState({
        draftPosts: draftPosts
      })
    }
  }, () => {
    if(this)
    {
      this.setState({
        draftPostsRequestFailed: true,
        draftPostsRequestFailedCount: this.state.draftPostsRequestFailedCount + 1
      })
    }
  });
}

function loadRecentPosts()
{
  if(loadedAllRecentPosts)
    return;

  var at = recentPosts.length;
  var count = 20;

  apiHandler.recentPosts(at, count, j => {

    if(at + count >= recentPosts.count || loadedAllRecentPosts)
    {
      if(this)
      {
        this.setState({
          recentPosts: recentPosts
        })
      }

      return;
    }
   

    var newPosts = [];

    if(typeof(j.data.length) === "undefined" || j.data.length < count)
      loadedAllRecentPosts = true;

    j.data.forEach(blogPost => {
      var alreadyLoaded = false;
      recentPosts.forEach(blogPostElement => {
        if(blogPostElement.key === blogPost._id)
        {
          alreadyLoaded = true;
        }
      })
      if(!alreadyLoaded)
        newPosts.push(<BlogPostPreview key={blogPost._id} blogPost={blogPost}/>)
    });

    recentPosts = recentPosts.concat(newPosts);

    loadedRecentPosts = true;

    if(this)
    {
      this.setState({
        recentPosts: recentPosts
      })
    }
  }, () => {
    if(this)
    {
      this.setState({
        recentPostsRequestFailed: true,
        recentPostsRequestFailedCount: this.state.recentPostsRequestFailedCount + 1
      })
    }
  });
}



export default class Blog extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      recentPostsRequestFailed: false,
      recentPostsRequestFailedCount: 0,
      stickyPostsRequestFailed: false,
      stickyPostsRequestFailedCount: 0,
      draftPostsRequestFailed: false,
      draftPostsRequestFailedCount: 0,
      recentPosts: recentPosts,
      stickyPosts: stickyPosts,
      draftPosts: draftPosts
    };

    this.loadRecentPosts = loadRecentPosts.bind(this);
    this.loadStickyPosts = loadStickyPosts.bind(this);
    this.loadDraftPosts = loadDraftPosts.bind(this);
    this.loadPosts = loadPosts.bind(this);
  }

  render() {

    if(!loadedRecentPosts && !loadedRecentPosts && !loadedDraftPosts
      && this.state.stickyPostsRequestFailedCount > 3 && this.state.recentPostsRequestFailedCount > 3 && this.state.draftPostsRequestFailedCount > 3)
    {
      return (
        <div id="blogScrollableTarget" className="page">
          <div id="blog" className="centerMargins failedLoad">
            <h2>Blog posts are currently unavailable.</h2>
            <p>
              The blog may be down for maintainence. 
              <br/>
              Please try again later.
            </p>
            <br/>
            <span onClick={this.props.history.goBack}>Go Back</span>
            <br/>
            <Link to="/">Go to Portfolio</Link>
          </div>
        </div>
      );
    }

    var stickyPostsRender;
    if(!loadedStickyPosts)
    {
      if(this.state.stickyPostsRequestFailed)
      {
        stickyPostsRender =
          <div>
            <h2>Failed to load Sticky Posts.</h2>
            <h3>
              Trying
                {" "}{3 - this.state.stickyPostsRequestFailedCount >= 0 ? 3 - this.state.stickyPostsRequestFailedCount : 0}{" "}
              more times...
            </h3>
          </div>;
      }
      else
      {
        stickyPostsRender = <h2>Loading Sticky Posts...</h2>;
      }

      if(this.state.stickyPostsRequestFailedCount < 3)
        this.loadStickyPosts();
    }
    else
    {
      stickyPostsRender = this.state.stickyPosts;
    }

    var draftPostsRender;
    if(!loadedDraftPosts)
    {
      if(this.state.draftPostsRequestFailedCount)
      {
        draftPostsRender =
          <div>
            <h2>Failed to load Draft Posts.</h2>
            <h3>
              Trying
                {" "}{3 - this.state.draftPostsRequestFailedCount >= 0 ? 3 - this.state.draftPostsRequestFailedCount : 0}{" "}
              more times...
            </h3>
          </div>;
      }
      else
      {
        draftPostsRender = <h2>Loading Draft Posts...</h2>;
      }

      if(this.state.draftPostsRequestFailedCount < 3)
        this.loadDraftPosts();
    }
    else
    {
      draftPostsRender = this.state.draftPosts;
    }

    var recentPostsRender;
    if(!loadedRecentPosts)
    {
      if(this.state.recentPostsRequestFailed)
      {
        recentPostsRender =
          <div>
            <h2>Failed to load Recent Posts.</h2>
            <h3>
              Trying
                {" "}{3 - this.state.recentPostsRequestFailedCount >= 0 ? 3 - this.state.recentPostsRequestFailedCount : 0}{" "}
              more times...
            </h3>
          </div>;
      }
      else
      {
        recentPostsRender = <h2>Loading Recent Posts...</h2>;
      }

      if(this.state.recentPostsRequestFailedCount < 3)
      {
        this.loadRecentPosts();
      }
    }
    else
    {
      if(this.state.recentPosts.length < 1 && this.state.loadedStickyPosts && this.state.stickyPosts.length < 1)
      {
        recentPostsRender = <h1>Oh no! There's no posts yet!</h1>;
      }
      else
      {
        recentPostsRender =
          <InfiniteScroll 
            next={this.loadPosts}
            hasMore={!loadedAllRecentPosts}
            loader={<h1>Loading Posts...</h1>}
            scrollableTargetID="blogScrollableTarget"
          >
            {this.state.recentPosts}
          </InfiniteScroll>;
      }
    }

    console.log("rendering blog with " + this.state.stickyPosts.length + " sticky posts and " + this.state.recentPosts.length + " recent posts and " +this.state.draftPosts.length + " draft posts");

    return (
      <div id="blogScrollableTarget" className="page">
        <div id="blog" className="centerMargins">
          {apiHandler.isUserLogged() ? draftPostsRender : ""}
          {stickyPostsRender}
          {recentPostsRender}
        </div>
      </div>
  )};
}
