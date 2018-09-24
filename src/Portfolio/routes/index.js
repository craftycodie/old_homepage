import {Route} from 'react-router'

import Portfolio from '../screens/Portfolio'

export default function routes (props) {
  return (
    <div>
      <Route exact path='/portfolio' component={Portfolio} />
    </div>
  )
}
