import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Repository from '../pages/Repository'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
)

export default Routes
