import {Route} from 'react-router'

import Blog from '../screens/Blog'
import BlogPost from '../screens/BlogPost'
import BlogPostEditor from '../screens/BlogPostEditor'

export default function routes (props) {
  return (
    <div>
      <Route exact path='/blog/post/:postID/edit' component={BlogPostEditor} />
      <Route exact path='/blog/post/new' component={BlogPostEditor} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/blog/post/:postID' component={BlogPost} />
    </div>
  )
}
