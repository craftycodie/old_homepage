import React from "react";
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { apiHandler, showdownConverter } from "../../../App";

function getOrdinalNum(n) {
  return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}

export default class blogPostPreview extends React.Component {
  
  componentDidUpdate()
  {
    window.hljs.initHighlighting.called = false;
    window.hljs.initHighlighting();
  }

  componentDidMount()
  {
    window.hljs.initHighlighting.called = false;
    window.hljs.initHighlighting();
  }

  render() {
    var createdDate = new Date(this.props.blogPost.created);
    var createdString = 
      createdDate.toLocaleDateString(navigator.userLanguage, { weekday: 'long' }) +
      ", " +
      getOrdinalNum(createdDate.getDate()) +
      " " +
      createdDate.toLocaleDateString(navigator.userLanguage, { month: 'long' }) +
      " " +
      createdDate.getFullYear();

    return (
      <div className={"blogPostPreview" + (this.props.blogPost.sticky ? " sticky" : "")}>
        <h2>{this.props.blogPost.title}</h2>
        {apiHandler.isUserLogged() ? <small>{this.props.blogPost._id}</small> : null}
        <div className="blogPreviewBody">
          {ReactHtmlParser(showdownConverter.makeHtml(this.props.blogPost.body.substring(0,500) + "..."))}
        </div>
        <Link className="readMore" to={"blog/post/" + this.props.blogPost._id}>Read More >></Link>
        <span className="readMore right">
        {this.props.blogPost.draft ? <span><span className="badge badge-secondary">Draft </span>&nbsp;</span> : ""}{this.props.blogPost.sticky ? <span><span className="badge badge-secondary">Sticky Post</span>&nbsp;</span> : ""}<small>{createdString}</small>
        </span>
        <hr/>
      </div>
    );
  }
}