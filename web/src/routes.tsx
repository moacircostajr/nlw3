import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CreateOrphanage from './pages/CreateOrphanage'
import Landing from './pages/Landing'
import OrphanagePage from './pages/Orphanage'
import OrphanagesMap from './pages/OrphanagesMap'


interface Props {

}

const Routes = (props: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/app" component={OrphanagesMap} />

        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={OrphanagePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
