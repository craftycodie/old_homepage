import React from "react";
import { Link } from 'react-router-dom';

export default class blogPostPreview extends React.Component {

  render() {
    return (
      <div className={"blogPostPreview"}>
        <h2>{this.props.title}</h2>
        <div className="blogPreviewBody">
          {/* {ReactHtmlParser(showdownConverter.makeHtml(this.props.blogPost.body.substring(0,500) + "..."))} */}
        </div>
        <Link className="readMore" to={"blog/post/" + this.props.blogPost._id}>Read More</Link>
        <hr/>
      </div>
    );
  }
}