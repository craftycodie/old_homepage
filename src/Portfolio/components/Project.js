import React from 'react'
import { Link } from 'react-router-dom'

export default class Project extends React.Component {
  render () {
    var primaryTagNodes = []
    var secondaryTagNodes = []

    if (this.props.primaryTags) {
      this.props.primaryTags.forEach(tag => {
        var node = <span><span className='badge badge-danger'>{tag}</span> </span>
        primaryTagNodes.push(node)
      })
    }

    if (this.props.secondaryTags) {
      this.props.secondaryTags.forEach(tag => {
        var node = <span><span className='badge badge-secondary'>{tag}</span> </span>
        secondaryTagNodes.push(node)
      })
    }

    return (
      <div className='col-md-6 portfolioProject'>
        <div className='left'>
          <h4>{this.props.name}</h4>
          <p>{this.props.description}<br />
            {primaryTagNodes} {secondaryTagNodes}<br />
            {this.props.blogPost ? <Link to={'/blog/post/' + this.props.blogPost}>Read Blog Post >></Link> : ''}
          </p>
        </div>
        <div className='right'>
          {this.props.img ? <img alt={this.props.name + ' Icon'} src={this.props.img} /> : ''}
        </div>
      </div>
    )
  }
}
