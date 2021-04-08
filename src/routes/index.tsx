import { Route, Switch } from 'react-router-dom'

import About from '../pages/About'
import Home from '../pages/Home'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
  </Switch>
)

export default Routes
