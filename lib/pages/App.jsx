import React from 'react'
import { render } from 'react-dom'
import { observer } from 'mobx-react'
// import { observable } from 'mobx'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import ConfigPage from 'configProject/page'
// import Landing from 'landing/page'

const Landing = require("react-proxy-loader!./landing/page")
const ConfigProject = require("react-proxy-loader!./configProject/page")

@observer
class App extends React.Component {
  render () {
    return <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/configProject' component={ConfigProject} />
    </Switch>
  }
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
)
