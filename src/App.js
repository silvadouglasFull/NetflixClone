import React from 'react'
import Router from './router'
import RequestContext from './context/requestContext'
const App = () => {

  return <RequestContext>
    <Router />
  </RequestContext>
}
export default App