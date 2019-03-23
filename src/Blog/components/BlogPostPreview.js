import React from 'react'
import { Link } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import moment from 'moment'
import { connect } from 'react-redux'

import showdownConverter from '../utils/showdownConverter'

class BlogPostPreview extends React.Component {
  render () {
    var createdString = moment(new Date(this.props.blogPost.created)).format('dddd, Do MMMM YYYY')

    return (
      <div className={'blogPostPreview' + (this.props.blogPost.sticky ? ' sticky' : '')}>
        <h2>{this.props.blogPost.title}</h2>
        {this.props.auth.authenticated ? <small>{this.props.blogPost._id}</small> : null}
        <div className='blogPreviewBody'>
          {ReactHtmlParser(showdownConverter.makeHtml(this.props.blogPost.body.substring(0, 500) + '...'))}
        </div>
        <Link className='readMore' to={'blog/post/' + this.props.blogPost._id}>Read More >></Link>
        <span className='readMore right'>
          {this.props.blogPost.draft ? <span><span className='badge badge-secondary'>Draft </span>&nbsp;</span> : ''}{this.props.blogPost.sticky ? <span><span className='badge badge-secondary'>Sticky Post</span>&nbsp;</span> : ''}<small>{createdString}</small>
        </span>
        <hr />
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(BlogPostPreview)
