import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { GlobalStyle } from 'styles'

import 'styles/entry.scss'

import { Test } from './modules'
import GlobalNavigation from 'components/molecules/GlobalNavigation'
import IconSettings from '@salesforce/design-system-react/components/icon-settings'
import Button from '@salesforce/design-system-react/components/button'
const LDS_ROOT = 'static/lds/assets'

const App = () => (
  <main>
    <IconSettings
      standardSprite={`${LDS_ROOT}/icons/standard-sprite/svg/symbols.svg`}
      utilitySprite={`${LDS_ROOT}/icons/utility-sprite/svg/symbols.svg`}
      actionSprite={`${LDS_ROOT}/icons/action-sprite/svg/symbols.svg`}
      doctypeSprite={`${LDS_ROOT}/icons/doctype-sprite/svg/symbols.svg`}
      customSprite={`${LDS_ROOT}/icons/custom-sprite/svg/symbols.svg`}
    >
      <GlobalStyle />
      <Button iconName="download" iconPosition="left" label="Neutral Icon" />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={Test} />
        </Switch>
      </React.Suspense>
    </IconSettings>
  </main>
)

export default withRouter(App)
