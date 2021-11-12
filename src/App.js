import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import GetStarted from './components/GetStarted'
import './app.scss'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={GetStarted} exact/>
        <Route path="/Home" component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
