import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { GlobalStyle } from 'styles'

import 'styles/entry.scss'

import { Test } from './modules'
import GlobalNavigation from 'components/molecules/GlobalNavigation'

const App = () => (
  <main>
    <GlobalStyle />
    <React.Suspense fallback={<div>Loading...</div>}>
      <GlobalNavigation />
      <Switch>
        <Route path="/" component={Test} />
      </Switch>
    </React.Suspense>
  </main>
)

export default withRouter(App)
