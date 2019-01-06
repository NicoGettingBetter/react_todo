import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { Provider } from 'react-redux'

import Projects from 'components/projects/Projects'
import Login from 'components/users/Login'
import Registration from 'components/users/Registration'

const App = (props) => (
  <Provider store={props.store}>
    <Router>
      <div>
        <Route exact path='/' component={Projects} />
        <Route path='/sign-in' component={Login} />
        <Route path='/sign-up' component={Registration} />
      </div>
    </Router>
  </Provider>
)
export default App;
