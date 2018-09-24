import React from 'react'
import { Link } from 'react-router-dom'
import { getAllLoadedPosts } from '../Blog'
import ReactHtmlParser from 'react-html-parser'
import { apiHandler, showdownConverter } from '../../App'

function getOrdinalNum (n) {
  return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '')
}

export default class BlogPost extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      blogPost: null,
      errorCount: 0
    }
    this.getPostData = this.getPostData.bind(this)
  }

  getPostData () {
    getAllLoadedPosts().forEach(loadedPost => {
      if (loadedPost.props.blogPost._id === this.props.match.params.postID) {
        this.setState({blogPost: loadedPost.props.blogPost})
      }
    })

    apiHandler.blogPost(this.props.match.params.postID,
      j => {
        this.setState({blogPost: j.data})
      },
      () => {
        this.setState({errorCount: this.state.errorCount + 1})
      })
  }

  componentDidUpdate () {
    window.hljs.initHighlighting.called = false
    window.hljs.initHighlighting()
  }

  componentDidMount () {
    window.hljs.initHighlighting.called = false
    window.hljs.initHighlighting()
  }

  render () {
    if (this.state.blogPost == null) {
      if (this.state.errorCount >= 3) {
        return (
          <div className='page'>
            <div id='blogPost' className='centerMargins failedLoad'>
              <h1>Failed to load blog post.</h1>
              <p>
                The blog may be down for maintainence.
                <br />
                Please try again later.
                <br />
              </p>
              <span onClick={this.props.history.goBack}>Go Back</span>
              <br />
              <Link to='/'>Go to Portfolio</Link>
            </div>
          </div>
        )
      }

      this.getPostData()

      if (this.state.errorCount > 0) {
        return (
          <div className='page'>
            <div id='blogPost' className='centerMargins'>
              <h2>Loading...</h2>
              <p>An error occured while loading the blog post.
              <br />
                Trying {3 - this.state.errorCount} more times...
              </p>
            </div>
          </div>
        )
      }

      return (
        <div className='page'>
          <div id='blogPost' className='centerMargins'>
            <h2>Loading blog post...</h2>
          </div>
        </div>
      )
    }

    var createdDate = new Date(this.state.blogPost.created)
    var createdString =
      createdDate.toLocaleDateString(navigator.userLanguage, { weekday: 'long' }) +
      ', ' +
      getOrdinalNum(createdDate.getDate()) +
      ' ' +
      createdDate.toLocaleDateString(navigator.userLanguage, { month: 'long' }) +
      ' ' +
      createdDate.getFullYear()

    return (
      <div className='page'>
        <div id='blogPost' className='centerMargins'>
          <h1 className='postTitle'>{this.state.blogPost.title}</h1>
          {apiHandler.isUserLogged() ? <small>{this.state.blogPost._id}</small> : null}
          <hr />
          <div className='postBody'>
            {ReactHtmlParser(showdownConverter.makeHtml(this.state.blogPost.body))}
          </div>
          <hr />
          <Link to={'/blog'}>&lt;&lt; Back to Blog</Link>
          <span className='right'>
            {this.state.blogPost.draft ? <span><span className='badge badge-secondary'>Draft </span> </span> : ''}{this.state.blogPost.sticky ? <span><span className='badge badge-secondary'>Sticky Post</span> </span> : ''}<small>{createdString}</small>
          </span>
        </div>
      </div>
    )
  }
}
