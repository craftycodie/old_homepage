import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { initialize as initializeHighlighting } from '../utils/highlight'
import InfiniteScroll from '../../util/react-infinite-scroll-component/app/'
import BlogPostPreview from '../components/BlogPostPreview'
import { getDraftPosts, getRecentPosts, getStickyPosts } from '../actions/blogActions'

export default class Blog extends React.Component {
  
  state = {
    loading: false,
    error: false
  }

  constructor (props) {
    super(props)

    this.loadRecentPosts = loadRecentPosts.bind(this)
    this.loadStickyPosts = loadStickyPosts.bind(this)
    this.loadDraftPosts = loadDraftPosts.bind(this)
    this.loadPosts = loadPosts.bind(this)
  }

  getInitialPosts() {
    if(this.props.blog.getStickyPosts) {
      this.props.getStickyPosts()
    }

    if(this.props.blog.getDraftPosts) {
      this.props.getDraftPosts()
    }

    if (!recentPosts.length < 1 && !this.props.blog.gotAllRecentPosts) {
      var recentPosts = this.props.blog.posts.filter(post => {return !post.sticky && !post.draft})
      this.props.getRecentPosts(recentPosts.length, 20)
    }
  }

  getMoreRecentPosts() {
    if (!this.props.blog.gotAllRecentPosts) {
      var recentPosts = this.props.blog.posts.filter(post => {return !post.sticky && !post.draft})
      this.props.getRecentPosts(recentPosts.length, 20)
    }
  }

  componentDidUpdate () {
    initializeHighlighting()
  }

  componentDidMount () {
    this.getInitialPosts()
    initializeHighlighting()
  }

  renderPosts() {
    var renderedPosts = []
    this.props.blog.posts.forEach(postData => {
      renderedPosts.push(<BlogPostPreview key={postData._id} blogPost={postData}/>)
    });
    return renderedPosts
  }

  render () {
    if (!this.props.blog.posts && this.state.error) {
      return (
        <div id='blogScrollableTarget' className='page'>
          <div id='blog' className='centerMargins failedLoad'>
            <h2>Blog posts are currently unavailable.</h2>
            <p>
              The blog may be down for maintainence.
              <br />
              Please try again later.
            </p>
            <br />
            <span onClick={this.props.history.goBack}>Go Back</span>
            <br />
            <Link to='/'>Go to Portfolio</Link>
          </div>
        </div>
      )
    }
    recentPostsRender = <h1>Oh no! There's no posts yet!</h1>

    return (
      <div id='blogScrollableTarget' className='page'>
        <div id='blog' className='centerMargins'>
        <InfiniteScroll
            next={this.getMoreRecentPosts()}
            hasMore={!this.props.blog.loadedRecentPosts}
            loader={<h1>Loading Posts...</h1>}
            scrollableTargetID='blogScrollableTarget'
          >
          {this.renderPosts()}
          </InfiniteScroll>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ blog }) => ({ blog })

export default connect(mapStateToProps)(Blog)