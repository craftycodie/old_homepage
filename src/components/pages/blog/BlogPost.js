import React from "react"
import { Link } from 'react-router-dom';
import { getAllLoadedPosts } from "../Blog"
import request from "superagent"
import showdown from "showdown";
import ReactHtmlParser from 'react-html-parser';
import { apiHandler } from "../../../App";

export default class BlogPostPreview extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      blogPost: null,
      errorCount: 0
    };
    this.getPostData = this.getPostData.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  getPostData() {
    getAllLoadedPosts().forEach(loadedPost => {
      if(loadedPost.props.blogPost._id === this.props.match.params.postID)
      {
        this.setState({blogPost: loadedPost.props.blogPost});
        return;
      }
    });

    request
    .get('http://localhost:8080/api/blog/post/' + this.props.match.params.postID)
    .set('Accept', 'application/json')
    .set("Cache-Control", "no-cache")
    .end((err, res) => {
      console.log(JSON.parse(res.text));
      
      if(JSON.parse(res.text).data != null)
      {
        setTimeout(() => {
          this.setState({blogPost: JSON.parse(res.text).data});
        }, 500);
      }
      else{
        this.setState({errorCount: this.state.errorCount+1})
      }
    });
  }

  render() {

    var converter = new showdown.Converter();

    if(this.state.blogPost == null)
    {
      if(this.state.errorCount >= 3)
      {
        console.log(this.props.history);

        return <div className="page">
        <div id="blogPost" className="centerMargins failedLoad"><h2>Failed to load blog post.</h2>
        <p>Tried {this.state.errorCount} times.<br/>
        <span onClick={this.goBack}>Go Back</span>
        <br/>
        <Link to="/">Go to Portfolio</Link>
        </p>
        </div></div>
      }

      this.getPostData();

      if(this.state.errorCount > 0)
      {
        return <div className="page">
        <div id="blogPost" className="centerMargins"><h2>Loading...</h2>
        <p>An error occured while loading the blog post.<br/>
        Trying {3-this.state.errorCount} more times...</p>
        </div></div>
      }

      return <div className="page">
      <div id="blogPost" className="centerMargins"><h2>Loading...</h2>
      </div></div>
    }

    return (    <div className="page">
    <div id="blogPost" className="centerMargins">
    <h1 className="">{this.state.blogPost.title}</h1>
    {apiHandler.isUserLogged() ? <small>{this.state.blogPost._id}</small> : null}
    {ReactHtmlParser(converter.makeHtml(this.state.blogPost.body))}
  </div></div>);
  }
}