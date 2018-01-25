import React from "react"
import InfiniteScroll from '../../util/react-infinite-scroll-component/app/';

import BlogPostPreview from "./blog/BlogPostPreview";
import { apiHandler } from "../../App";

let recentPosts = [];
let stickyPosts = [];
let loadedAllRecentPosts = false;
let loadedStickyPosts = false;
let loadedRecentPosts = false;

export function reloadPosts()
{
  recentPosts = [];
  stickyPosts = [];
  loadedAllRecentPosts = false;
  loadedStickyPosts = false;
  loadedRecentPosts = false;

  loadPosts();
}

export function getAllLoadedPosts()
{
  return recentPosts.concat(stickyPosts);
}

export function loadPosts() {
  if(this)
  {
    if(!loadedStickyPosts)
      this.loadStickyPosts();
      
    this.loadRecentPosts();
  }
  else
  {
    if(!loadedStickyPosts)
      loadStickyPosts();
      
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
      recentPosts: recentPosts,
      stickyPosts: stickyPosts
    };

    this.loadRecentPosts = loadRecentPosts.bind(this);
    this.loadStickyPosts = loadStickyPosts.bind(this);
    this.loadPosts = loadPosts.bind(this);
  }

  render() {

    var stickyPostsRender;
    if(!loadedStickyPosts)
    {
      if(this.state.stickyPostsRequestFailed)
      {
        stickyPostsRender =
          <div>
            <h1>Failed to load Sticky Posts.</h1>
            <h3>Trying {3-this.state.stickyPostsRequestFailedCount} more times...</h3>
          </div>;
      }
      else
      {
        stickyPostsRender = <h1>Loading Sticky Posts...</h1>;
      }

      this.loadStickyPosts();
    }
    else
    {
      stickyPostsRender = this.state.stickyPosts;
    }

    var recentPostsRender;
    if(!loadedRecentPosts)
    {
      if(this.state.recentPostsRequestFailed)
      {
        recentPostsRender =
          <div>
            <h1>Failed to load Recent Posts.</h1>
            <h3>Trying {3-this.state.recentPostsRequestFailedCount} more times...</h3>
          </div>;
      }
      else
      {
        recentPostsRender = <h1>Loading Posts...</h1>;
      }

      this.loadRecentPosts();
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

    console.log("rendering blog with " + this.state.stickyPosts.length + " sticky posts and " + this.state.recentPosts.length + " recent posts");

    return (
      <div id="blogScrollableTarget" className="page">
        <div id="blog" className="centerMargins">
          {stickyPostsRender}
          {recentPostsRender}
        </div>
      </div>
  )};
}
