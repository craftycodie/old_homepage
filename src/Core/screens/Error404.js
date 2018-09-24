import React from 'react'
import { Link } from 'react-router-dom'

export default class Error404 extends React.Component {
  render () {
    return (
      <div className='page'>
        <div id='error404' className='centerMargins'>
          <h1>404</h1>
          <br />
            Page Not Found
          <br />
          <span onClick={this.props.history.goBack}>Go Back</span>
          <br />
          <Link to='/'>Go to Portfolio</Link>
        </div>
      </div>
    )
  }
}
