import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { GlobalStyle } from 'styles'

import 'styles/entry.scss'
import { Test } from './modules'
import GlobalNavigation from 'components/molecules/GlobalNavigation'
import IconSettings from '@salesforce/design-system-react/components/icon-settings'
import Button from '@salesforce/design-system-react/components/button'

const App = () => (
  <main>
    <GlobalStyle />
    <Button
      iconCategory="utility"
      iconName="download"
      iconPosition="left"
      label="Neutral Icon"
    />
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" component={Test} />
      </Switch>
    </React.Suspense>
  </main>
)

export default withRouter(App)
