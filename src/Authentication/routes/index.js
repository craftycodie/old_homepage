import {Route} from 'react-router'

import Login from '../screens/Login'

export default function routes (props) {
  return (
    <div>
      <Route exact path='/login' component={Login} />
    </div>
  )
}
