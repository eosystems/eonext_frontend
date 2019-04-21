import * as React from 'react'
import GlobalNavigationBar from '@salesforce/design-system-react/components/global-navigation-bar'
import GlobalNavigationBarRegion from '@salesforce/design-system-react/components/global-navigation-bar/region'
import GlobalNavigationBarLink from '@salesforce/design-system-react/components/global-navigation-bar/link'
import { Button } from '@salesforce/design-system-react'

export default function GlobalNavigation(props: any) {
  return (
    <div className="global-navigation__test">
      <GlobalNavigationBar>
        <GlobalNavigationBarRegion region="primary" />
        <GlobalNavigationBarRegion region="secondary" navigation>
          <GlobalNavigationBarLink
            href="javascript:void(0);"
            label="Home"
            id="home-link"
          />
        </GlobalNavigationBarRegion>
      </GlobalNavigationBar>
    </div>
  )
}
