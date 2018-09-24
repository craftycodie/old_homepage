import { Route } from 'react-router'

import About from '../screens/About'

export default function routes (props) {
  return (
    <div>
      <Route exact path='/about' component={About} />
    </div>
  )
}
