import React from "react"
import request from "superagent"
import InfiniteScroll from '../../util/react-infinite-scroll-component/app/';
import ReactDOM from 'react-dom';


import BlogPostPreview from "./blog/BlogPostPreview";

import { URLSearchParams } from 'url';

export let loadedPosts = [];
let loadedAllPosts = false;

export function preloadPosts () {
  let count = 20;

  request
  .get('http://localhost:8080/api/blog/posts/recent')
  .query({ at: 0, count: count }) // query string
  .set('Accept', 'application/json')
  .set("Cache-Control", "no-cache")
  .end((err, res) => {
    console.log(JSON.parse(res.text));
    
    JSON.parse(res.text).data.forEach(blogPost => {
      loadedPosts.push(<BlogPostPreview key={blogPost._id} blogPost={blogPost}/>)
    });

    if(typeof(JSON.parse(res.text).data.length) == "undefined" || JSON.parse(res.text).data.length < count)
    {
      loadedAllPosts = true;
    }

    console.log(typeof(JSON.parse(res.text).data.length));
    console.log(loadedAllPosts);
  });
}

export default class Blog extends React.Component {

  constructor () {
    super();

    //var initialPosts = loadPosts();

    this.state = {
      postElements: loadedPosts,
      hasMore: true
    };
    this.loadPosts = this.loadPosts.bind(this);
    this.refresh = this.refresh.bind(this);

    this.loadPosts();
  }

  loadPosts () {
    let count = 20;
    let morePosts = [];
    let at = this.state.postElements.length;

    request
    .get('http://localhost:8080/api/blog/posts/recent')
    .query({ at: at, count: count }) // query string
    .set('Accept', 'application/json')
    .set("Cache-Control", "no-cache")
    .end((err, res) => {
      console.log(JSON.parse(res.text));
      
      JSON.parse(res.text).data.forEach(blogPost => {
        morePosts.push(<BlogPostPreview key={blogPost._id} blogPost={blogPost}/>)
      });

      if(typeof(JSON.parse(res.text).data.length) == "undefined" || JSON.parse(res.text).data.length < count)
      {
        loadedAllPosts = true;
      }

      console.log(typeof(JSON.parse(res.text).data.length));
      console.log(loadedAllPosts);

    });

    setTimeout(() => {
      this.setState({postElements: this.state.postElements.concat(morePosts)});
      loadedPosts = this.state.postElements;
    }, 500);
  }
  
  refresh () {
    this.setState({postElements: []});
    setTimeout(() => {
      this.setState({});
    }, 3000);
  }

render() {

  return (
  <div id="blogScrollableTarget" class="page">
    <div id="blog" class="centerMargins">
    <InfiniteScroll 
    id="blog"
    className="page"
    next={this.loadPosts}
    hasMore={!loadedAllPosts}
    loader={<h1>Loading...</h1>}
    scrollableTargetID="blogScrollableTarget"
    >
      {this.state.postElements}
    </InfiniteScroll>
  </div>
  </div>
  )};
}
