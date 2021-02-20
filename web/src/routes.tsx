import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './styles/pages/Landing'
import OrphanagesMap from './styles/pages/OrphanagesMap'


interface Props {

}

const Routes = (props: Props) => {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} />
      <Route path="/app" component={OrphanagesMap} />
    </BrowserRouter>
  )
}

export default Routes
