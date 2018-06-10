import React from "react"
import { apiHandler, showdownConverter } from "../../App"
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import { getAllLoadedPosts } from "./Blog"
import { reloadPosts } from "../pages/Blog";

export default class BlogPostEditor extends React.Component {

  constructor(props)
  {
    super(props)
  
    var postID = null;
    if(this.props.match.params.postID)
      postID = this.props.match.params.postID;

    this.state = {
      postID: postID, 
      loadedPost: false, 
      postBody: "", 
      postTitle: "", 
      stickyPost: false,
      draftPost: false,
      errorCount: 0
    };
  
    this.handleChange = this.handleChange.bind(this);
    this.submitPostData = this.submitPostData.bind(this);
  }

  handleChange(event) {
    var obj = {};
    obj[event.target.id] = event.target.value;
    if(event.target.id === "stickyPost" || event.target.id === "draftPost")
      obj[event.target.id] = event.target.checked;
    this.setState(obj);
  }

  submitPostData()
  {
    if(this.state.postID == null)
    {
      apiHandler.newPost(this.state.postTitle, this.state.postBody, this.state.stickyPost, this.state.draftPost, postID => {
        reloadPosts();
        this.props.history.push("/blog/post/" + postID);
      });
    }
    else
    {
      apiHandler.editPost(this.state.postID, this.state.postTitle, this.state.postBody, this.state.stickyPost, this.state.draftPost, postID => {
        reloadPosts();
        this.props.history.push("/blog/post/" + postID);
      });
    }
  }

  getPostData() {
    getAllLoadedPosts().forEach(loadedPost => {
      if(loadedPost.props.blogPost._id === this.props.match.params.postID)
      {
        console.log(loadedPost.props.blogPost);
        this.setState({
          loadedPost: true, 
          postTitle: loadedPost.props.blogPost.title,
          postBody: loadedPost.props.blogPost.body,
          stickyPost: loadedPost.props.blogPost.sticky,
          draftPost: loadedPost.props.blogPost.draft
        });
        return;
      }
    });

    apiHandler.blogPost(this.props.match.params.postID,
      j => {
        this.setState({blogPost: j.data});
        setTimeout(() => {
          this.setState({
            loadedPost: true, 
            postTitle: j.data.title,
            postBody: j.data.body,
            stickyPost: j.data.sticky,
            draftPost: j.data.draft
          });
        }, 500);
      },
      () => {
        this.setState({errorCount: this.state.errorCount + 1})
      });
  }

  render() {
    if(this.state.postID != null && !this.state.loadedPost)
    {
      if(this.state.errorCount >= 3)
      {
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
    }


    return (
      <div className="page">
      <div className="centerMargins" id="blogPostEditor">
        <div id="postEditorToolbar" className="row">
          <div className="col-md-6">
            <input value={this.state.postTitle} onChange={this.handleChange} id="postTitle" type="text"/>
          </div>
          <div className="col-md-6">
          {this.state.draftPost ? 
              <span>Draft <input checked onChange={this.handleChange} id="draftPost" type="checkbox"/></span>
              :
            <span>Draft <input onChange={this.handleChange} id="draftPost" type="checkbox"/></span>}
            {this.state.stickyPost ? 
              <span>Sticky <input checked onChange={this.handleChange} id="stickyPost" type="checkbox"/></span>
              :
            <span>Sticky <input onChange={this.handleChange} id="stickyPost" type="checkbox"/></span>}
            <button onClick={this.submitPostData} className="right">Submit</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <textarea value={this.state.postBody} onChange={this.handleChange} id="postBody"/>
          </div>
          <div className="col-md-6">
            {ReactHtmlParser(showdownConverter.makeHtml(this.state.postBody))}
          </div>
        </div>
      </div>
  </div>
  );
  }
}