import React from 'react'
import ReactDOM from 'react-dom'

import Routes from 'routes'
import store from 'store'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Routes store={store} />, document.getElementById('react-todo-app'),
  )
});
