import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import LandingPage from './components/landingPage';
import NewPage from './components/newPage';
const App = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={LandingPage} />
      <Route path='/new' component={NewPage} />
    </div>
  </Router>
)
export default App;
