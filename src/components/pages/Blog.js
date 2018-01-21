import React from "react"
import request from "superagent"
import InfiniteScroll from '../../util/react-infinite-scroll-component/app/';


import BlogPostPreview from "./blog/BlogPostPreview";

let loadedRecentPosts = [];
let loadedStickyPosts = [];
let loadedAllRecentPosts = false;
let preloadedPosts = false;

export function reloadPosts()
{
  loadedRecentPosts = [];
  loadedStickyPosts = [];
  preloadPosts();
}

export function getAllLoadedPosts()
{
  return loadedRecentPosts.concat(loadedStickyPosts);
}

export function preloadPosts () {

  console.log("Preloading blog posts...")

  loadStickyPosts();
  loadRecentPosts();

  setTimeout(() => {
    preloadedPosts = true;
  }, 500);
}

function loadStickyPosts()
{
  var newPosts = [];

  console.log("loading sticky posts...")

  request
  .get('http://localhost:8080/api/blog/posts/sticky')
  .set('Accept', 'application/json')
  .set("Cache-Control", "no-cache")
  .end((err, res) => {
    
    JSON.parse(res.text).data.forEach(blogPost => {
      newPosts.push(<BlogPostPreview sticky={true} key={blogPost._id} blogPost={blogPost}/>)
    });
  });

  setTimeout(() => {
    loadedStickyPosts = loadedStickyPosts.concat(newPosts);
  }, 500);
}

function loadRecentPosts()
{
  var newPosts = [];

  console.log("loading recent posts...")

  var count = 20;

  request
  .get('http://localhost:8080/api/blog/posts/recent')
  .query({ at: loadedRecentPosts.length, count: count }) // query string
  .set('Accept', 'application/json')
  .set("Cache-Control", "no-cache")
  .end((err, res) => {

    JSON.parse(res.text).data.forEach(blogPost => {
      newPosts.push(<BlogPostPreview key={blogPost._id} blogPost={blogPost}/>)
    });

    if(typeof(JSON.parse(res.text).data.length) === "undefined" || JSON.parse(res.text).data.length < count)
    {
      loadedAllRecentPosts = true;
    }
  });

  setTimeout(() => {
    loadedRecentPosts = loadedRecentPosts.concat(newPosts);
  }, 500);

  return newPosts;
}

export default class Blog extends React.Component {

  constructor () {
    super();

    this.state = {
      stickyPostElements: loadedStickyPosts,
      postElements: loadedRecentPosts,
    };

    this.loadPosts = this.loadPosts.bind(this);
    this.refresh = this.refresh.bind(this);

    setTimeout(() => {
      this.refresh();
    }, 500);
  }

  loadPosts() {
  
    console.log("loading posts...");

    var stickyPosts = [];
    var recentPosts = [];

    if(!preloadedPosts)
    {
      stickyPosts = loadStickyPosts();
    }

    recentPosts = loadRecentPosts();
    
    setTimeout(() => {
      this.setState({postElements: loadedRecentPosts, stickyPostElements: loadedStickyPosts});
    }, 1000);
  }
  
  refresh () {
    this.setState({postElements: loadedRecentPosts, stickyPostElements: loadedStickyPosts});
    setTimeout(() => {
      this.setState({});
    }, 3000);
  }

  render() {
    console.log("rendering blog with " + this.state.stickyPostElements.length + " sticky posts and " + this.state.postElements.length + " recent posts");

    if(this.state.stickyPostElements.length < 1 && this.state.postElements.length < 1)
    {
      return <h1>Loading...</h1>;
    }

    return (
    <div id="blogScrollableTarget" className="page">
      <div id="blog" className="centerMargins">
      <InfiniteScroll 
      id="blog"
      className="page"
      next={this.loadPosts}
      hasMore={!loadedAllRecentPosts}
      loader={<h1>Loading...</h1>}
      scrollableTargetID="blogScrollableTarget"
      >
        {this.state.stickyPostElements}{this.state.postElements}
      </InfiniteScroll>
    </div>
    </div>
  )};
}
