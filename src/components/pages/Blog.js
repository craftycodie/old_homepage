import React from "react"
import request from "superagent"
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
  apiHandler.stickyPosts(j => {
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
  apiHandler.recentPosts(recentPosts.length, 20, j => {
    var newPosts = [];

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
      recentPosts: [],
      stickyPosts: []
    };

    this.loadRecentPosts = loadRecentPosts.bind(this);
    this.loadStickyPosts = loadStickyPosts.bind(this);
    this.loadPosts = loadPosts.bind(this);
  }

  componentDidMount()
  {
    this.loadPosts();
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

        this.loadStickyPosts();
      }
      else
      {
        stickyPostsRender = <h1>Loading Sticky Posts...</h1>;
      }
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

        this.loadRecentPosts();
      }
      else
      {
        recentPostsRender = <h1>Loading Recent Posts...</h1>;
      }
    }
    else
    {
      recentPostsRender =
        <InfiniteScroll 
          next={this.loadPosts}
          hasMore={!loadedAllRecentPosts}
          loader={<h1>Loading...</h1>}
          scrollableTargetID="blogScrollableTarget"
        >
          {this.state.recentPosts}
        </InfiniteScroll>;
    }


    console.log("rendering blog with " + this.state.stickyPosts.length + " sticky posts and " + this.state.recentPosts.length + " recent posts");



    if(this.state.stickyPosts.length < 1 && this.state.recentPosts.length < 1)
    {
      return <h1>Loading...</h1>;
    }

    return (
      <div id="blogScrollableTarget" className="page">
        <div id="blog" className="centerMargins">
          {stickyPostsRender}
          {recentPostsRender}
        </div>
      </div>
  )};
}
